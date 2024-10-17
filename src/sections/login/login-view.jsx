import { useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Link, Card, Stack, TextField, Typography, IconButton, InputAdornment } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { bgGradient } from 'src/theme/css';
import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import { useAuth } from 'src/hooks/useAuth';

// ----------------------------------------------------------------------

export default function LoginView() {
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { handlelogin } = useAuth()

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setLoading(true);
    await handlelogin(email, password, setLoading, setError)


  };




  const isEmailValid = emailAddress => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
      }}
    >
      <Stack
        sx={{
          width: '50%',
          p: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Logo sx={{ mb: 5 }} />

        <Card
          sx={{
            p: 5,
            width: '100%',
            maxWidth: 420,
          }}
        >
          <Typography variant="h4" style={{ marginBottom: 60 }}>Sign in to Yawa App</Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                name="email"
                label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!email && !isEmailValid(email)}
                helperText={!!email && !isEmailValid(email) ? 'Enter a valid email' : ''}
              />

              <TextField
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
              <Link variant="subtitle2" underline="hover">
                Forgot password?
              </Link>
            </Stack>

            {error && (
              <Typography color="error" sx={{ mb: 3 }}>
                {error}
              </Typography>
            )}

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="inherit"
              loading={loading}
              disabled={!email || !password || !!(email && !isEmailValid(email))}
            >
              Login
            </LoadingButton>
          </form>
        </Card>
      </Stack>

      <Box
        sx={{
          width: '50%',
          backgroundImage: 'url("https://yawaapp.com.ng/oakuglek/2024/05/11shots_so.png")', // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Box>
  );
}
