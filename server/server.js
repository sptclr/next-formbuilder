/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-var */
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const api = require('./api/routes');

const PORT = process.env.PORT || 5050;
const dev = process.env.NODE_DEV !== 'production'; //true false
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler(); //part of next config


nextApp.prepare().then(() => {
  // express code here
  const app = express()
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.use('/api/', api);

  app.get('*', (req,res) => {
      return handle(req,res) // for all the react stuff
  })
  app.listen(PORT, err => {
      if (err) throw err;
      console.log(`ready at http://localhost:${PORT}`)
  })
})