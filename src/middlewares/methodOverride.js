export const methodOverride = (req, res, next) => {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        req.method = req.body._method;
        delete req.body._method;
    }
    if (req.query && typeof req.query === 'object' && '_method' in req.query) {
        req.method = req.query._method;
        delete req.query._method;
    }
    return next();
};