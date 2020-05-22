const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const express = require("express");
const app = express();
const fs = require("fs");

function redirect(req, res, next) {

}

function create(req, res, next) {

}

const configFile = fs.readFileSync(process.cwd() + "config.json");
const config = JSON.parse(configFile.toString());

app.post('/create', create());
