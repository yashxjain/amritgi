import React, { useState } from 'react';
import { Box, Tabs, Tab, Grid, Card, CardContent, Typography, Button } from '@mui/material';

// Mock data for colleges, courses, and semesters with their respective PDF links.
const syllabusData = {
    "College A": {
        courses: {
            "Course 1": {
                semesters: {
                    "Semester 1": "path/to/collegeA_course1_sem1.pdf",
                    "Semester 2": "path/to/collegeA_course1_sem2.pdf",
                },
            },
            "Course 2": {
                semesters: {
                    "Semester 1": "path/to/collegeA_course2_sem1.pdf",
                    "Semester 2": "path/to/collegeA_course2_sem2.pdf",
                },
            },
        },
    },
    "College B": {
        courses: {
            "Course 3": {
                semesters: {
                    "Semester 1": "path/to/collegeB_course3_sem1.pdf",
                    "Semester 2": "path/to/collegeB_course3_sem2.pdf",
                },
            },
        },
    },
    "College C": {
        courses: {
            "Course 4": {
                semesters: {
                    "Semester 1": "path/to/collegeC_course4_sem1.pdf",
                },
            },
        },
    },
};

const Syllabus = () => {
    const [activeTab, setActiveTab] = useState('College A');
    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
        setSelectedCourse(null); // Reset course when a new college is selected
    };

    const handleCourseSelect = (course) => {
        setSelectedCourse(course);
    };

    const handleSemesterSelect = (pdfUrl) => {
        window.open(pdfUrl, '_blank'); // Open the PDF in a new tab
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
                {Object.keys(syllabusData).map((college) => (
                    <Tab key={college} label={college} value={college} />
                ))}
            </Tabs>

            {/* Course Cards */}
            {syllabusData[activeTab] && (
                <Grid container spacing={2}>
                    {Object.keys(syllabusData[activeTab].courses).map((course) => (
                        <Grid item xs={12} sm={6} md={4} lg={4} key={course}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">{course}</Typography>
                                    {Object.keys(syllabusData[activeTab].courses[course].semesters).map((semester) => (
                                        <Button
                                            key={semester}
                                            variant="outlined"
                                            onClick={() =>
                                                handleSemesterSelect(
                                                    syllabusData[activeTab].courses[course].semesters[semester]
                                                )
                                            }
                                            style={{ margin: '5px' }}
                                        >
                                            {semester}
                                        </Button>
                                    ))}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
        </div>
    );
};

export default Syllabus;
