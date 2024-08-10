const http = require('http');
const PORT = process.env.PORT || 9000;
let slideMode = false;

http
  .createServer((req, res) => {
    console.log('New connection');

    if (req.url === '/slide') {
      // Toggle slide mode
      slideMode = !slideMode;
      res.end(`Slide mode: ${slideMode ? 'ON' : 'OFF'}`);
    } else {
      // Normal mode
      const message = slideMode
        ? `<h1 style="color: blue; font-size: 20px; font-weight: bold; text-shadow: 2px 2px yellow;">TEAMCOMPUTERS-V2 (Slide Mode)</h1>`
        : `<html>
              <head>
                <style>
                  body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #f0f0f0;
                    font-family: Arial, sans-serif;
                  }
                  h1 {
                    color: blue;
                    font-size: 20px;
                    font-weight: bold;
                    text-shadow: 2px 2px yellow;
                    text-align: center;
                  }
                </style>
              </head>
              <body>
                <h1>Welcome to TeamComputers at Delhi office-</h1>
              </body>
            </html>`;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(message);
    }
  })
  .listen(PORT, () => console.log('Listening on', PORT));
