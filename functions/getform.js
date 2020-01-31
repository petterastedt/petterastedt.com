const fetch = require("node-fetch")

exports.handler = async (event, context, callback) => {
  const pass = (body) => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body)
    })
  }

  try {
    let response = await fetch("https://getform.io/f/fe0dc8a6-5e48-45f4-84c3-2f115ea31233", {
      method: event.httpMethod,
      body: event.body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })

    let data = await response.json()

    pass(data)
  } catch (err) {
    let error = {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({error: err.message}
    )}

    pass(error)
  }
}