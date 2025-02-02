const jwt = require('jsonwebtoken');
const checkToken = roles => {
  return (req, res, next) => {
    try {
      console.log('middleware worked');
      const bearerToken = req.headers.authorization;
      if (!bearerToken) {
        return res.status(404).json({ message: 'you are not authorizatio' });
      }

      const token = bearerToken.split(' ')[1];
      const isMatching = jwt.verify(token, process.env.SECRET_KEY);
      console.log(isMatching);
      if (!isMatching) {
        return res.status(404).json({ message: 'you are not authorized' });
      }

      next();
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
};

module.exports = checkToken;
