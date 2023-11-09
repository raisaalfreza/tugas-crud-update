const logRequest =(req, res, next)=>{
    console.log(' terjadi reques ke path: ', req.path);
    next();
}

module.exports = logRequest;