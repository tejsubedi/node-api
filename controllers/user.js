const User = require('../models/user');

exports.userById = (req, res, next) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "User not found"
            })
        }
        req.profile = user //adds profile object in req with user info
        next()
    });
};

exports.hasAuthorization = (req, res, next) => {
    const authorised = req.profile && req.auth && req.profile._id === req.auth._id;
    if (!authorised) {
        return res.status(403).json({
            error: "User is not authorised to perform this action"
        });
    }
};
