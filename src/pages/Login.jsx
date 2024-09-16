import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        setLoading(true);

        if (phoneNumber.trim() === '' || password.trim() === '') {
            setError('Both fields are required.');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post('https://namami-infotech.com/EvaraBackend/src/auth/login.php', {
                phone_number: phoneNumber,
                password: password,
                companyname: "EVARA"
            });

            if (response.data.token) {
                localStorage.setItem('authToken', response.data.token);
                setIsAuthenticated(true);
                navigate('/');
            } else {
                setError('Invalid phone number or password.');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh'
                }}
            >
                <img
                    src="https://namami-infotech.com/EvaraBackend/assets/sku/logo.png"
                    alt="Company Logo"
                    style={{ width: '150px', marginBottom: '20px' }}
                />
                <Typography variant="h5" gutterBottom style={{ color: "orange" }}>
                    Login Dashboard
                </Typography>
                {error && <Alert severity="error">{error}</Alert>}
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, width: '100%' }}>
                    <TextField
                        label="Phone Number"
                        type="tel"
                        fullWidth
                        required
                        margin="normal"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        inputProps={{ maxLength: 10 }}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        required
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        disabled={loading}
                        sx={{ mt: 3, mb: 2, color: "orange", backgroundColor: "#008080" }}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
