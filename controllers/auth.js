const User = require('../models/user');

exports.signup = async (req, res) => {
    const userExists = await User.findOne({email: req.body.email})
    if(userExists) return res.status(403). json({
        error: "Email is taken!"
    })
}