import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { TextField, Button } from '@material-ui/core'

import './Login.scss'

class Login extends Component {
    constructor (props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    render () {
        const { email, password } = this.state

        return (
            <div className='mt-login mt-auth'>
                <div className='mt-auth__form-container'>
                    <h2 className='mt-auth__title'>Log in</h2>
                    <form className='mt-auth__form'>
                        <TextField
                            label='Email'
                            type='email'
                            name='email'
                            autoComplete='email'
                            margin='normal'
                            variant='outlined'
                            fullWidth={true}
                        />
                        <TextField
                            label='Password'
                            type='password'
                            margin='normal'
                            variant='outlined'
                            fullWidth={true}
                        />
                        <div className='mt-auth__actions'>
                            <Button
                                variant='contained'
                                color='primary'
                                size='large'
                                fullWidth={true}
                                style={{
                                    paddingTop: '12px',
                                    paddingBottom: '12px'
                                }}
                            >
                                Log in
                            </Button>
                            <p className='mt-login__forgot'>
                                <Link to='signup' className='mt-auth__actions-link'>Forgot your password?</Link>
                            </p>
                            <p className='mt-login__signup'>
                                Don't have an account?&nbsp;
                                <Link to='signup' className='mt-auth__actions-link'>Sign up</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
