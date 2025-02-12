export const flash = (req, res, next) => {
    res.locals.messages = req.session.messages;
    return next();
};