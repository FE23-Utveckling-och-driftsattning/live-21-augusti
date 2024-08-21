function sendResponse(todos) {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ todos }),
  };
}

function sendError() {
  return {
    statusCode: 404,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: 'URL not found' }),
  };
}

module.exports = { sendResponse, sendError };
