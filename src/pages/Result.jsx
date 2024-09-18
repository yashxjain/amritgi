import React, { useState } from 'react';
import { Box, Tabs, Tab, Grid, Typography, Button } from '@mui/material';

// Mock data for colleges, courses, and result sheets with their respective PDF links and images.
const resultData = {
    "College A": {
        courses: {
            "Course 1": {
                semesters: {
                    "Semester 1": {
                        pdf: "path/to/collegeA_course1_sem1_result.pdf",
                        image: "path/to/collegeA_course1_sem1_image.png"
                    },
                    "Semester 2": {
                        pdf: "path/to/collegeA_course1_sem2_result.pdf",
                        image: "path/to/collegeA_course1_sem2_image.png"
                    },
                },
            },
            "Course 2": {
                semesters: {
                    "Semester 1": {
                        pdf: "path/to/collegeA_course2_sem1_result.pdf",
                        image: "path/to/collegeA_course2_sem1_image.png"
                    },
                    "Semester 2": {
                        pdf: "path/to/collegeA_course2_sem2_result.pdf",
                        image: "path/to/collegeA_course2_sem2_image.png"
                    },
                },
            },
        },
    },
    "College B": {
        courses: {
            "Course 3": {
                semesters: {
                    "Semester 1": {
                        pdf: "path/to/collegeB_course3_sem1_result.pdf",
                        image: "path/to/collegeB_course3_sem1_image.png"
                    },
                    "Semester 2": {
                        pdf: "path/to/collegeB_course3_sem2_result.pdf",
                        image: "path/to/collegeB_course3_sem2_image.png"
                    },
                },
            },
        },
    },
    "College C": {
        courses: {
            "Course 4": {
                semesters: {
                    "Semester 1": {
                        pdf: "path/to/collegeC_course4_sem1_result.pdf",
                        image: "path/to/collegeC_course4_sem1_image.png"
                    },
                },
            },
        },
    },
};

const Result = () => {
    const [activeTab, setActiveTab] = useState('College A');
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [selectedSemester, setSelectedSemester] = useState(null);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
        setSelectedCourse(null); // Reset course and semester when a new college is selected
        setSelectedSemester(null);
    };

    const handleCourseSelect = (course) => {
        setSelectedCourse(course);
        setSelectedSemester(null); // Reset semester when a new course is selected
    };

    const handleSemesterSelect = (semester, { pdf, image }) => {
        setSelectedSemester(semester);
        window.open(pdf, '_blank'); // Open the PDF in a new tab
    };

    return (
         <div style={{marginTop:"100px",minHeight:"500px"}}>
        <Box sx={{ width: '100%', padding: 2 }}>
            {/* Tabs for college selection */}
            <Tabs
                value={activeTab}
                onChange={handleTabChange}
                indicatorColor="secondary"
                textColor="inherit"
                centered
                sx={{
                    backgroundColor: 'blue',
                    color: "white",
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    marginBottom: '16px',
                    '& .MuiTab-root': {
                        fontWeight: 'bold',
                        textTransform: 'none'
                    },
                    '& .MuiTabs-indicator': {
                        backgroundColor: '#1976d2',
                    },
                }}
            >
                {Object.keys(resultData).map(college => (
                    <Tab key={college} label={college} value={college} />
                ))}
            </Tabs>

            {/* Course and Semester Selection */}
            {selectedCourse === null ? (
                <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
                    <Typography variant="h6">Select Course for {activeTab}</Typography>
                    {Object.keys(resultData[activeTab].courses).map(course => (
                        <Button
                            key={course}
                            onClick={() => handleCourseSelect(course)}
                            sx={{
                                margin: "10px",
                                padding: "10px 20px",
                                backgroundColor: selectedCourse === course ? "#ccc" : "#007bff",
                                color: "white",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            {course}
                        </Button>
                    ))}
                </Box>
            ) : (
                <>
                    <Typography variant="h6">Select Semester for {selectedCourse}</Typography>
                    {Object.keys(resultData[activeTab].courses[selectedCourse].semesters).map(semester => (
                        <Button
                            key={semester}
                            onClick={() => handleSemesterSelect(
                                semester,
                                resultData[activeTab].courses[selectedCourse].semesters[semester]
                            )}
                            sx={{
                                margin: "10px",
                                padding: "10px 20px",
                                backgroundColor: selectedSemester === semester ? "#ccc" : "#007bff",
                                color: "white",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            {semester}
                        </Button>
                    ))}

                    {/* Display the image for the selected semester */}
                    {selectedSemester && (
                        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
                            <Typography variant="h6">Result Sheet Image for {selectedSemester}</Typography>
                            <img
                                src={resultData[activeTab].courses[selectedCourse].semesters[selectedSemester].image}
                                alt={`Result Sheet for ${selectedSemester}`}
                                style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }}
                            />
                        </Box>
                    )}
                </>
            )}
        </Box>
        </div>
    );
};

export default Result;
