export const tempData = (req, res, next) => {
    res.setError = message => {
        req.session.error = {
            message,
            isFirstRequest: true
        }
    }

    if (!req.session.error) return next();

    if(req.session.isFirstRequest) {
        req.session.isFirstRequest = false;
        res.locals.error = req.session.message;
    } else delete req.session.error;

    return next();
};