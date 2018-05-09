module.exports = () => {
    return `
        <!DOCTYPE html>
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Document</title>
            </head>
            <body>
                <div id="app">出错了</div>
                <script src="https://unpkg.com/react@15/dist/react.js"></script>
                <script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
                <script src="build/main.js"></script>
            </body>
        </html>
    `
}