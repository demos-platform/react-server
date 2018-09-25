import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'
import App from './app'

const app = express()

app.get('/', function (req, res) {
  const domString = ReactDOMServer.renderToString(<App />)
  res.send(template(domString))
})

app.listen(3000, () => {
  console.log('listen in 3000')
})

const template = (domString) =>
  `<!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Document</title>
    </head>
    <body>
      ${domString}
    </body>
    </html>`