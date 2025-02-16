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
import Swal from "sweetalert2";

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
        const data = loadedData.filter(x =>  x?.status === "pending")
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
    //     const check = pendingAssignments.find(item => item.userEmail === user.email)
    //    if(check){

    //        Swal.fire({
    //            icon: "error",
    //            title: "Oops...",
    //            text: "You can't mark your own assignment!"
    //         });
    //         setOpenModal(false);
    //         return;
    //     }

        if (!marks || !feedback) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill input field!"
              });
            return;
        }

        const response = await fetch(`https://online-group-study-server-zeta.vercel.app/submission/${id}`, {
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
            Swal.fire({
                title: "Marked!",
                text: "Assignment marked successfully!",
                icon: "success"
              });
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
    return (
        <div>
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
                                <TableCell>{assignment?.assignmentTitle}</TableCell>
                                <TableCell>{assignment?.assignmentMarks}</TableCell>
                                <TableCell>{assignment?.userName}</TableCell>
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
        </div>
    );
};

export default PendingAssignmentsPage;
