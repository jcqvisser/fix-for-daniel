const express = require("express");

const app = express();
app.get(
  "/projects-dashboard/project-sites/1/site-overview/1/phase-4",
  (req, res) => {
    res.send("Why did you go to all this effort?"); // why did I?
  }
);

app.listen(3000);
