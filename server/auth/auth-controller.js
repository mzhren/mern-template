const jwt = require('jwt-simple')
const passport = require('passport')
const signale = require('signale')

const User = require('../users/user-model')

const tokenizeUser = (user) => {
    const sub = user._id
    const iat = Date.now()
    const exp = Date.now() + Number(process.env.AUTH_EXPIRES_IN)

    return jwt.encode({
        sub,
        iat,
        exp
    }, process.env.JWT_SECRET)
}

const requireAuth = passport.authenticate('jwt', {
    session: false
})

const requireLogin = passport.authenticate('local', {
    session: false
})

const logIn = async (req, res) => {
    const {
        email
    } = req.body

    try {
        const user = await User.findOne({
            email
        })

        const token = tokenizeUser(user)

        res.json({
            status: 'ok',
            token,
            user: {
                email,
                name: user.name
            }
        })
    } catch (e) {
        signale.fatal('Error occured in login', e)

        res.status(500).send('Internal server error', e)
    }
}

module.exports = {
    logIn,
    requireAuth,
    requireLogin
}
