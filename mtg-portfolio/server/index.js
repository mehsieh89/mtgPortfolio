'use strict';
const app = require('./app');
const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`Community listening on port ${PORT}!`);
});
