const { sendResponse, sendError } = require('./responses/index');

const todos = [
  { id: 1, todo: 'Köp kaffe' },
  { id: 1, todo: 'Köp kaka' },
  { id: 1, todo: 'Brygg kaffe' },
  { id: 1, todo: 'Drick kaffe' },
];

exports.handler = async (event) => {
  console.log(event);
  const { method, path } = event.requestContext.http;

  if (method == 'GET' && path == '/todo') {
    return sendResponse(todos);
  } else if (method == 'POST' && path == '/todo') {
    const body = JSON.parse(event.body);

    todos.push(body);

    return sendResponse(todos);
  } else {
    return sendError();
  }
};
