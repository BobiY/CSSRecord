const express = require('express');
const { renderToString } = require('react-dom/server')
const SSR = require('../dist/server-index').default;
// console.log("SSR", new SSR().render())
server(process.env.PORT || 3000)

function server(port) {
    const app = express();

    app.use(express.static('dist'));
    app.get('/', (req,res) => {
        console.log("renderToString", renderToString(SSR), "renderToString")
        res.status(200).send(renderMarkup(renderToString(SSR)))
    })

    app.listen(port, () => {
        console.log('server is running on port + ', port )
    })
}

function renderMarkup(html){
    // console.log(html, "html")
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SSR</title>
    </head>
    <body>
        <div id='app'>${html}</div>
    </body>
    </html>
    `
}