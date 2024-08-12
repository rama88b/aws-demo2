const http = require('http');
const PORT = process.env.PORT || 9000;
let slideMode = false;

// Example color code, replace with the exact color used in the TeamComputers logo
const teamComputersColor = '#003366'; // Replace with the exact color code from the logo

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
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #f0f0f0;
                    font-family: Arial, sans-serif;
                    text-align: center;
                  }
                  img {
                    max-width: 100%;
                    height: auto;
                    margin-bottom: 20px;
                  }
                  h1 {
                    color: ${teamComputersColor}; /* Use the color code from the logo */
                    font-size: 200%; /* Set font size to 90% */
                    font-weight: bold;
                    text-shadow: 2px 2px #ffff00; /* Example shadow color */
                  }
                </style>
              </head>
              <body>
                <img src="https://www.teamcomputers.com/images/logo.png" alt="TeamComputers Logo">
                <h1>Welcome to TeamComputers at Noida !!!!!</h1>
              </body>
            </html>`;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(message);
    }
  })
  .listen(PORT, () => console.log('Listening on', PORT));

