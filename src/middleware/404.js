'use strict';

module.exports = (req, res, next) => {
  res.status(404).send({
    error: 404,
    route: 'req.baseUrl',
    message: '404 Error: The page you are looking for does not exist',
  });
};
