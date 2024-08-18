
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
        ? `<h1 style="color: blue; font-size: 20px; font-weight: bold; color: blue; text-shadow: 2px 2px yellow;">TEAMCOMPUTERS-V2 (Slide Mode)</h1>`
        : `<h1 style="color: blue; font-size: 20px; font-weight: bold; color: blue; text-shadow: 2px 2px yellow;">TEAMCOMPUTERS-V3</h1>`;
      res.end(message);
    }
  })
  .listen(PORT, () => console.log('Listening on', PORT));
