/**
 * Builds an error response object
 * @param {String} message 
 * @param {Error Object} data 
 */
const formatError = (message, data = {}) => {

  return {
    status: 'err',
    message: message,
    data: data
  };
};


module.exports = formatError;