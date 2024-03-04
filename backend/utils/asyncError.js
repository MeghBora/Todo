const AsyncErrorHandler = (asyncFunction) =>(req, res, next) =>{
    Promise.resolve(asyncFunction(req,res,next)).catch(next);
};

module.exports = AsyncErrorHandler;