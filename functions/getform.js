const axios = require("axios")

exports.handler = async (event, context, callback) => {
  const pass = (body) => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body)
    })
  }

  axios("https://getform.io/f/fe0dc8a6-5e48-45f4-84c3-2f115ea31233", {
    method: event.httpMethod,
    data: event.body
  })
  .then(data => {
    pass(data)
  })
  .catch(error => {
    let errorMsg = {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({error: err.message}
    )}

    pass(errorMsg)
  })
}