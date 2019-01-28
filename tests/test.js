const expect = require('chai').expect;

const { 
  formatError, 
  formatSuccess 
} = require('../index');


describe('error responses', () => {
  it('should generate error response with empty data', async () => {
    const response = formatError('Some error message!!!');
    expect(response.status).to.equal('err');
    expect(response.message).to.equal('Some error message!!!');
    expect(response.data).to.deep.equal({});
    expect(response).to.deep.equal({
      status: 'err',
      message: 'Some error message!!!',
      data: {}
    });
  });
  it('should generate error response with data', async () => {
    const response = formatError('Some error message again!!!', { err: '101'});
    expect(response.status).to.equal('err');
    expect(response.message).to.equal('Some error message again!!!');
    expect(response.data).to.deep.equal({ err: '101'});
    expect(response).to.deep.equal({
      status: 'err',
      message: 'Some error message again!!!',
      data: {
        err: '101'
      }
    });
  });
});

describe('success responses', () => {
  it('should generate success response with empty data', async () => {
    const response = formatSuccess('Some success message');
    expect(response.status).to.equal('success');
    expect(response.message).to.equal('Some success message');
    expect(response.data).to.deep.equal({});
    expect(response).to.deep.equal({
      status: 'success',
      message: 'Some success message',
      data: {}
    });
  });
  it('should generate success response with data', async () => {
    const response = formatSuccess('Some success message again', { name: 'gh-conf'});
    expect(response.status).to.equal('success');
    expect(response.message).to.equal('Some success message again');
    expect(response.data).to.deep.equal({ name: 'gh-conf'});
    expect(response).to.deep.equal({
      status: 'success',
      message: 'Some success message again',
      data: {
        name: 'gh-conf'
      }
    });
  });
});