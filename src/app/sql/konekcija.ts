
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./events');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'timeline',
    password : 'password',
    database : 'timeline'
  });