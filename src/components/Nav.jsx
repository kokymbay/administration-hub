import Nav from './Nav.css';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { AccountCircle } from '@mui/icons-material';

const nav = () => {
    return (
        <div className='login'>
            <h1>REGISTRATION</h1>
            <div className="authorization">
                <div className="username">
                    <TextField
                        id='username'
                        label='Username'
                        type='username'
                        size='small'
                        autoComplete='current-username'
                        sx={{ m: 0, width: '25ch' }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        variant="filled" />
                </div>
                <div className="password">
                    <TextField
                        id='password'
                        label='Password'
                        size='small'
                        autoComplete='current-password'
                        variant='filled'
                        sx={{ m: 0, width: '25ch' }}
                    />
                </div>
                <div id='button'>
                    <div className="button-input">
                        <Button className='input' variant='contained'>
                            Login
                        </Button>
                    </div>
                    <div className="button-registration">
                        <Button className='registration' variant='contained'>
                            Registration
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default nav;