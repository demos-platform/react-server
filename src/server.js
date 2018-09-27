import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'
import App from './app'
import fetch from 'isomorphic-fetch'

const app = express()

app.use(express.static('dist/public'))

app.get('/', function (req, res) {
  const body = ReactDOMServer.renderToString(<App />)
  // const data = fetch('https://api.github.com/users/gaearon/gists')
  const result = template(body)
  res.send(result)
})

app.listen(8080, () => {
  console.log('listen in 8080')
})

const template = (body) =>
  `<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>同构实践</title>
      </head>
      <body>
        <div id='root'>${body}</div>
        <script src='bundle.js'></script>
      </body>
    </html>`