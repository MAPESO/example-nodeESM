// Native
import http from 'http';

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html', 'utf-8');
    res.end(`
       <header style="font-family: sans-serif; text-align: center;">
         <h1>ESM in node</h1>
         <p>node: <b>${process.version}</b></p>
       </header>
    `);
});

server.listen(port, err => {
    if (err) throw new Error(`> The port ${port} is busy`);
    console.log(`> http://localhost:${port}`);
});
