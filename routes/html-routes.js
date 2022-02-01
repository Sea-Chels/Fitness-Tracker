const router = require("express").Router();
const db = require("../models");
const fs = require("fs");
const path = require("path");

// homepage route
router.get("/", (req, res)=>{
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// stats page route
router.get("/stats", (req, res)=>{
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// exercise page route
router.get("/exercise", (req, res)=>{
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

module.exports = router;