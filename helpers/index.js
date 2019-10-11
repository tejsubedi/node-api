exports.createPostValidator = (req, res, next) => {
    //title
    req.check('title', "Write a title").notEmpty()
    req.check('title', "Title must be betweenn 4 to 150 characters").isLength({
        min: 4,
        max: 150
    });
}