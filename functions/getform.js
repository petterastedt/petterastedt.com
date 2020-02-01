const axios = require("axios")

exports.handler = (event, context, callback) => {
  const pass = (body) => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body)
    })
  }

  axios(API_URL.process.env, {
    method: event.httpMethod,
    data: event.body
  })
  .then(data => {
    pass(data)
  })
  .catch(error => {
    let errorMsg = {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({error: error.message}
    )}

    pass(errorMsg)
  })
}