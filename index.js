import app from './app/app.js'; // Our app

const PORT = 8080;
const HOST = 'localhost';

app.listen(PORT, HOST, () => {
  console.log('Listening on %s:%d...', HOST || '*', PORT);
});
