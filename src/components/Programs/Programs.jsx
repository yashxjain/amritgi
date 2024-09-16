import React, { useState } from 'react';
import { Box, Tabs, Tab, Grid } from '@mui/material';
import CardFlip from './CardFlip'; // Import the CardFlip component

const Programs = () => {
    const [activeTab, setActiveTab] = useState('college1');

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    // Data for courses
    const collegeCourses = {
        college1: [
            { degree: 'BBA. LL.B', duration: '10 Sem.', nature: 'Regu.', modeOfAdmission: 'Direct/ Univ. Norms', seats: 120 },
            { degree: 'LL.B', duration: '6 Sem.', nature: 'Regu.', modeOfAdmission: 'Direct/ Univ. Norms', seats: 120 },
            { degree: 'LL.M', duration: '2 Sem.', nature: 'Regu.', modeOfAdmission: 'Direct/ Univ. Norms', seats: 60 }
        ],
        college2: [
            { degree: 'Bachelor of Education B.Ed.', duration: '2 Years', nature: 'Regu.', modeOfAdmission: 'Direct/ Univ. Norms', seats: 100 }
        ],
        college3: [
            { degree: "B.Sc. (Agriculture Hons.)", duration: "8 Sem.", nature: "Regu.", modeOfAdmission: "Direct/ Univ. Norms", seats: 60 },
            { degree: "B.Sc. (Computer Science)", duration: "6 Sem.", nature: "Regu.", modeOfAdmission: "Direct/ Univ. Norms", seats: 60 },
            { degree: "B.Sc. (Home Science)", duration: "2 Sem.", nature: "Regu.", modeOfAdmission: "Direct/ Univ. Norms", seats: 60 },
            { degree: "B. Lib. Sc. (Library Science)", duration: "2 Sem.", nature: "Regu.", modeOfAdmission: "Direct/ Univ. Norms", seats: 60 },
            { degree: "M. Lib. Sc. (Library Science)", duration: "2 Sem.", nature: "Regu.", modeOfAdmission: "Direct/ Univ. Norms", seats: 60 },
            { degree: "Certificate in Yoga", duration: "2 Sem.", nature: "Regu.", modeOfAdmission: "Direct/ Univ. Norms", seats: 30 },
            { degree: "P.G. Diploma in Yoga", duration: "2 Sem.", nature: "Regu.", modeOfAdmission: "Direct/ Univ. Norms", seats: 30 },
            { degree: "M.A. In Yoga", duration: "4 Sem.", nature: "Regu.", modeOfAdmission: "Direct/ Univ. Norms", seats: 30 }
        ]
    };

    return (
        <Box sx={{ width: '100%', padding: 2 }}>
            {/* Tabs for college selection */}
            <Tabs
                value={activeTab}
                onChange={handleTabChange}
                indicatorColor="secondary"
                textColor="inherit"
                centered
                sx={{
                    backgroundColor: '#ffffff',
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
                <Tab label="Amrit Law College" value="college1" />
                <Tab label="Roorkee Degree College" value="college2" />
                <Tab label="Amrit College of Education" value="college3" />
            </Tabs>

            {/* Courses cards */}
            <Grid container spacing={2}>
                {collegeCourses[activeTab].map((course, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                        <CardFlip course={course} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Programs;
