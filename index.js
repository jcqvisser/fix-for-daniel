const express = require("express");

const app = express();
app.get(
  "/projects-dashboard/project-sites/1/site-overview/1/phase-4",
  (req, res) => {
    res.send(
      `

      <!doctype html>

      <html lang="en">
      <head>
        <meta charset="utf-8">

        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">

        <style>
          @keyframes spin {
            from {
                transform:rotate(0deg);
            }
            to {
                transform:rotate(360deg);
            }
          }
          svg {
            width: 500px;
            height: 500px;
            animation-name: spin;
            animation-duration: 5000ms;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
          }
          p {
            position: absolute;
            top: 209px;
            left: 47px;
            color: red;
            font-family: sans-serif;
            font-weight: 900;
            font-size: 37px;
          }
        </style>

      </head>

      <body>
        <svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.0" width="47.471741" height="47.471741" viewBox="0 0 47.471741 47.471741" id="svg2">
          <path d="M 22.889471,25.607172 C 22.589713,24.605127 24.092318,24.708731 24.554936,25.108955 C 25.808602,26.193538 25.053398,28.14136 23.885905,28.938102 C 21.797533,30.363287 19.018523,29.16303 17.893076,27.101823 C 16.241437,24.076919 17.936475,20.36976 20.896603,18.945312 C 24.841988,17.046747 29.504523,19.25402 31.216796,23.116087 C 33.371517,27.976105 30.644503,33.605344 25.878773,35.599962 C 20.106834,38.015712 13.505062,34.765112 11.231216,29.094691 C 8.551568,22.412295 12.327973,14.834577 18.903736,12.283452 C 26.495714,9.3380778 35.051552,13.641683 37.878656,21.12322 C 41.09099,29.624218 36.259254,39.159651 27.87164,42.261821 C 18.462006,45.741988 7.9459296,40.381466 4.5693566,31.087558 C 0.82072068,20.769559 6.7105029,9.2720694 16.910868,5.6215926" transform="matrix(-1,0,0,1,44.89239,-0.7400139)" style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:4;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="path2171"/>
        </svg>
        <p> pay Jacques lots of money </p>
      </body>
      </html>
      `
    );
  }
);

app.listen(3000);
