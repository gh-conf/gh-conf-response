/**
 * Builds an success response object
 * @param {String} message 
 * @param {Error Object} data 
 */
const formatSuccess = (message, data = {}) => {

  return {
    status: 'success',
    message: message,
    data: data
  };
};


module.exports = formatSuccess;