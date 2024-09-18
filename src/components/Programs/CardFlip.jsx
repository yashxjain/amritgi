import React from 'react';
import { Card, CardContent, Typography, CardActionArea, CardHeader, Divider } from '@mui/material';
import { styled } from '@mui/system';
import image from "../../assets/law.png";

const FlipContainer = styled('div')({
    position: 'relative',
    width: '100%',
    height: '250px',
    perspective: '1000px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const FlipCard = styled('div')({
    position: 'relative',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
    '&:hover': {
        transform: 'rotateY(180deg)',
    },
});

const CardSide = styled('div')({
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const Front = styled(CardSide)({
    backgroundColor: '#ffffff',
    zIndex: 2,
    transform: 'rotateY(0deg)',
    padding: '16px',
});

const Back = styled(CardSide)({
    backgroundColor: '#f5f5f5',
    transform: 'rotateY(180deg)',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
});
const InfoTypography = styled(Typography)({
    marginBottom: '8px',
    fontWeight: '500',
});
const CardImage = styled('img')({
    width: '130px',
    height: 'auto',
    marginBottom: '8px',
    display: 'block', // Ensure the image is treated as a block element
});

const CardFlip = ({ course }) => (
    <FlipContainer>
        <FlipCard>
            <Front>
                <Card sx={{ width: '100%', height: '100%' }}>
                    <CardActionArea>
                        <CardContent>
                            <CardImage src={image} alt="Course" />
                            <Typography variant="h6">{course.degree}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Front>
            <Back>
                <Card sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <CardHeader
                        title={course.degree}
                        // subheader={`Degree: ${course.degree}`}
                        sx={{ width: '100%', backgroundColor: '#1976d2', color: 'white', textAlign: 'center', paddingBottom: '0' }}
                    />
                    <Divider />
                    <CardContent sx={{ textAlign: 'center' }}>
                        <InfoTypography variant="body1" color="textPrimary">
                            <strong>Duration:</strong> {course.duration}
                        </InfoTypography>
                        <InfoTypography variant="body1" color="textPrimary">
                            <strong>Nature:</strong> {course.nature}
                        </InfoTypography>
                        <InfoTypography variant="body1" color="textPrimary">
                            <strong>Mode of Admission:</strong> {course.modeOfAdmission}
                        </InfoTypography>
                        <InfoTypography variant="body1" color="textPrimary">
                            <strong>Seats Available:</strong> {course.seats}
                        </InfoTypography>
                    </CardContent>
                </Card>
            </Back>
        </FlipCard>
    </FlipContainer>
);

export default CardFlip;
