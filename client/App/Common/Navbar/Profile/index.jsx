import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'

import Menu from './Menu'
import './Profile.scss'

const avatarStyle = {
    width: 30,
    height: 30
}

const buttonStyle = {
    borderRadius: 0
}

class Profile extends Component {
    constructor (props) {
        super(props)

        this.state = {
            user: {
                fullName: 'Lasha Kakhidze',
                avatarUrl: '/avatar.png'
            },
            open: false
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        this.setState(state => ({
            open: !state.open
        }))
    }

    render () {
        const {
            user,
            open
        } = this.state

        const {
            avatarUrl,
            fullName
        } = user

        return (
            <div className='mt-header__profile-container'>
                <div className='mt-header__profile'>
                    <Button
                        onClick={this.handleClick}
                        className='mt-header__profile-action'
                        style={buttonStyle}
                    >
                        <Avatar alt={fullName} src={avatarUrl} className='mt-header__avatar' style={avatarStyle} />
                        {open ? (
                            <span className='mt-header__arrow-up'>
                                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><path d='M7 14l5-5 5 5z' /><path d='M0 0h24v24H0z' fill='none' /></svg>
                            </span>
                        ) : (
                            <span className='mt-header__arrow-down'>
                                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><path d='M7 10l5 5 5-5z' /><path d='M0 0h24v24H0z' fill='none' /></svg>
                            </span>
                        )}
                    </Button>
                    <Menu open={open} />
                </div>
            </div>
        )
    }
}

export default Profile