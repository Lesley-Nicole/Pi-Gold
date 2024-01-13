/**
* pi-gold.js
* https://github.com/Lesley-Nicole/pigold.js
*
* Pi-gold.js is a math library for Javascript and Node.js.
* Features a precise measurment of pi, by way of phi, the golden ratio.
* Also Includes values for phi and four more universal constants.
*
* @version 1.0.0 
* @date 2024-01-02
*
* @license
* Copyright (C) 2024 Lesley-Nicole <lesley-nicole@protonmail.com>
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

const phi = (5 ** 0.5) * 0.5 + 0.5; // =1.618033988749895 (the golden ratio)


// Pi-Gold will be written as "pii" (to minimize conflicts with other software)

const pii = 4 / Math.sqrt(phi); // =3.144605511029693 (circum of circle/diam of circle)


// 4 more UNIVERSAL CONSTANTS - from the website: https://measuringpisquaringphi.com

const pii2 = Math.sqrt(phi); // =1.272019649514069 (diam of squared circle/ side of squared square) AND IS ALSO,
// (area of squared circle/area of squared square)

const pii3 = Math.sqrt(phi) / Math.sqrt(2); // =0.8994537199739336 (diam of squared circle/diagonal of sqared square)

const pii4 = 2 / 3 * Math.sqrt(phi); // =0.848013099676046 (surface area of squared circle/surface area of squared square)

const pii5 = 2 / 3 * phi; // =1.0786893258332633 (volume of squared circle/volume of squared square)

export { phi, pii, pii2, pii3, pii4, pii5 };
