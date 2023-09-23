"use client"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Select, MenuItem, InputLabel, FormControl  } from '@mui/material';
import { useAuth } from '@/app/hooks/useAuth';
import { Toaster, toast } from 'sonner';
import { useRouter } from 'next/navigation'
import { destroyCookie } from 'nookies'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Page() {
  const { login } = useAuth();
  const router = useRouter();
  const [type, setType] = React.useState('4M/1E');


  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if(data.get('line') !== ""){
      return router.push('/pages/monitoringView')
    }


    login({
        Username : data.get('username'),
        Password : data.get('password'),
    }).then((response) => {

        if(response.error){
            toast.error(response.error);
        }
        else{
            router.push('/')
        }
    })
  };

  React.useEffect(() => {
    sessionStorage.clear();
    destroyCookie(null, 'TOKEN', { path: "/"});
  }, []);


  return (
    <ThemeProvider theme={defaultTheme}>
    <Toaster richColors expand={true}/> { /* padding change */}
      <Grid container component="main" sx={{ height: '82vh', width: '80%' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <div>
              <FormControl sx={{ m: 1, minWidth: '100%' }} className='m-0'>
                <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="type"
                    value={type}
                    label="Type"
                    onChange={handleChange}
                    >
                    <MenuItem value="4M/1E">4M/1E</MenuItem>
                    <MenuItem value="MONITORING">MONITORING</MenuItem>
                </Select>
              </FormControl>
              </div>
            

            {
                type === "4M/1E" ?
                <>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    
                    autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        
                        id="password"
                    />
                </>
                : type === "MONITORING" ?
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="line"
                        label="Line"
                        id="line"
                        autoFocus
                    />
                : ""
            }

              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}