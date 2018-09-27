import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'
import App from './app'
import fetch from 'isomorphic-fetch'

const app = express()

app.use(express.static('dist/public'))

app.get('/', function (req, res) {
  fetch('https://api.github.com/users/gaearon/gists')
  .then((res) => res.json())
  .then((gists) => {
    const body = ReactDOMServer.renderToString(<App gists={gists} />)
    const result = template(body, gists)
    res.send(result)
  })
})

app.listen(8080, () => {
  console.log('listen in 8080')
})

const template = (body, gists) =>
  `<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>同构实践</title>
      </head>
      <body>
        <div id='root'>${body}</div>
        <script>
          window.gists = ${JSON.stringify(gists)}
        </script>
        <script src='bundle.js'></script>
      </body>
    </html>`