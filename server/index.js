const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(express.static(`${__dirname}/../public`));

app.use('/product', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
app.use('/carousel', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));
app.use('/qanda', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));
app.use('/reviews', createProxyMiddleware({ target: 'http://localhost:3004', changeOrigin: true }));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'));
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));