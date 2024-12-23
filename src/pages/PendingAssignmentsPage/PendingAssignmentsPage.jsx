import React, { useState, useEffect, useContext } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Paper,
    Modal,
    Box,
    TextField,
} from "@mui/material";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const PendingAssignmentsPage = () => {
    const { user } = useContext(AuthContext);
    const loadedData = useLoaderData();
    const [pendingAssignments, setPendingAssignments] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedAssignment, setSelectedAssignment] = useState(null);
    const [marks, setMarks] = useState("");
    const [feedback, setFeedback] = useState("");
    
    useEffect(() => {
        // Fetch pending assignments from the API
        const data = loadedData.filter(x => x?.userEmail === user?.email && x?.status === "pending")
        setPendingAssignments(data);
    }, []);

    const handleOpenModal = (assignment) => {
        setSelectedAssignment(assignment);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedAssignment(null);
    };

    const handleSubmitMarks = async (id) => {
        if (!marks || !feedback) {
            alert("Please fill out both marks and feedback fields.");
            return;
        }

        const response = await fetch(`http://localhost:5000/submission/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              marks,
              feedback,
            }),
          });

        if (response.ok) {
            alert("Marks submitted successfully!");
            setOpenModal(false);
            setPendingAssignments(
                pendingAssignments.filter(
                    (assignment) => assignment._id !== selectedAssignment._id
                )
            );
        } else {
            alert("Failed to submit marks. Please try again.");
        }
    };
console.log(pendingAssignments);
    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Assignment Title</TableCell>
                            <TableCell>Total Marks</TableCell>
                            <TableCell>Examinee Name</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pendingAssignments.map((assignment) => (
                            <TableRow key={assignment._id}>
                                <TableCell>{assignment.assignmentTitle}</TableCell>
                                <TableCell>{assignment.assignmentMarks}</TableCell>
                                <TableCell>{user.displayName}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        onClick={() => handleOpenModal(assignment)}
                                    >
                                        Give Mark
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Modal for Giving Marks */}
            <Modal open={openModal} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "background.paper",
                        p: 4,
                        borderRadius: 2,
                        boxShadow: 24,
                    }}
                >
                    {selectedAssignment && (
                        <>
                            <h2>{selectedAssignment.title}</h2>
                            <a
                                href={selectedAssignment.googleDocsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Open Google Doc
                            </a>
                            <p>Note: {selectedAssignment.note}</p>
                            <TextField
                                fullWidth
                                label="Marks"
                                value={marks}
                                onChange={(e) => setMarks(e.target.value)}
                                margin="normal"
                                type="number"
                            />
                            <TextField
                                fullWidth
                                label="Feedback"
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                margin="normal"
                                multiline
                                rows={4}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={()=> handleSubmitMarks(selectedAssignment?._id)}
                                sx={{ mt: 2 }}
                            >
                                Submit
                            </Button>
                        </>
                    )}
                </Box>
            </Modal>
        </>
    );
};

export default PendingAssignmentsPage;
