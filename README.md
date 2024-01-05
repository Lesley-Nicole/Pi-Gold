<h1 align="center"><img src="https://res.cloudinary.com/lesley-z/image/upload/v1704401748/Projects/pi-gold/GOLD_kwn3te.png" width="50%"></h1>
<p align="center"><b><i>Measuring PI, by way of PHI</i></b></p>
<p align="center"><a href="https://apache.org/licenses/"><img src="https://img.shields.io/badge/License-Apache2.0-green.svg"></a></p>
<hr>

## Description
The "approximated" number 3.1459.. is not the correct value of pi, as it becomes deficient at the thousandth decimal place.  The precise measure of pi, 3.1446055.., is derived by way of phi, the golden ratio.  The [Measuring Pi Squaring Phi](https://measuringpisquaringphi.com) website provides a number of geometrical proofs, as well as a physical measurment of a real circle.

## Features
- Is compatible with Javascript's built-in Math library
- Runs on any Javascript engine
- Is easily extensible
- Open Source

## Install
Pi-Gold.js can be used in both node.js and in the browser.

Install pi-gold.js using npm:
```
npm install pi-gold
```
Or Link via CDN:
```
// index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <link href="style.css" rel="stylesheet">
  <script src="https://cdn.jsdeliver.net/npm/pi-gold@1.0.0/pi-gold.js>
</head>
```

## Usage Example
```
// index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="script.js" type="module"></script>
  </head>
  <body>
    <div id="demo"></div>
  </body>
</html>
```
```
// script.js

import { pii } from "./node-modules/pi-gold/pi-gold.js";

document.getElementById("demo").innerHTML = pii;
```
Output:
```
3.144605511029693
```

## Acknowledgements
- [Measuring Pi Squaring Phi](https://measuringpisquaringphi.com)

## License 
[Apache 2.0](https://apache.org/licenses/)
<hr>

<a href="https://lesley-nicole.github.io"><img src="https://res.cloudinary.com/lesley-z/image/upload/v1704422727/Branding/my-portfolio-wh_wvurej.png" width="33%"></a>
