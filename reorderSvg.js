"use strict";

const svgson = require('svgson')
const sortBy = require('lodash.sortby');

/**
 * @param {array} shapes – Collection of stringified Svg polygons
 * @param {number} order – Order formatting option
 */
module.exports = function reorderSvg(shapes, order) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(shapes)) {
      reject('First argument of reorderTriangle only accepts an array');
      return callback('First argument reorderTriangle only accepts an array');
    } else if (isNaN(order) || order > 8 || order < 1) {
      reject('Second argument can only be a number between 1 and 8');
      return callback('Second argument can only be a number between 1 and 8');
    } else {
      var allShapes = [];

      shapes.map(x => {
        svgson(x, {}, shape => {
          // split the points in an array

          var points = shape.attrs.points,
            xArray = [],
            yArray = [];

          var newpoint = points.replace(/,/g, ' '); // Replace ',' (W3C standard) with space
          var pointsArray = newpoint.split(' ');

          // divide the x and y points in seperate arrays;
          for (var i = 0; i < pointsArray.length; i++) {
            if(i % 2 === 0) { // index is even
              xArray.push(parseFloat(pointsArray[i]));
            } else { // index uneven
              yArray.push(parseFloat(pointsArray[i]))
            }
          }

          // some basic math to find the centers of x and y
          let centerX = xArray.reduce((a, b) => a + b, 0) / xArray.length,
            centerY = yArray.reduce((a, b) => a + b, 0) / yArray.length;

          var obj = {};
          obj.x = centerX;
          obj.y = centerY;
          obj.shape = x;

          allShapes.push(obj);
        })
      })

      /**
       * @param {string} firstOrder – First sort by X or Y
       * @param {string} secondOrder – Then sort by X or Y
       */
      function reorder (firstOrder, secondOrder) {
        var result = sortBy(allShapes, [firstOrder, secondOrder]);
        var svgArray = [];
        result.map(x => svgArray.push(x.shape));
        return svgArray;
      }

      function reorderBy() {
        if (order === 1) {
          return reorder('y', 'x');  // lefttop-rightbottom horizontal
        } else if (order === 2) {
          return reorder('y', 'y'); // righttop-leftbottom horizontal
        } else if (order === 3 ) {
          return reorder('y', 'x').reverse(); // rightbottom-lefttop horizontal
        } else if (order === 4) {
          return reorder('y', 'y').reverse(); // leftbottom-righttop horizontal
        } else if (order === 5) {
          return reorder('x', 'y'); // lefttop-rightbottom vertical
        } else if (order === 6 ) {
          return reorder('x', 'x').reverse();  // righttop-leftbottom vertical
        } else if (order === 7) {
          return reorder('x', 'y').reverse(); // rightbottom-lefttop vertical
        } else if (order === 8) {
          return reorder('x', 'x'); // leftbottom-righttop vertical
        }
      }

      resolve(reorderBy());
      return callback(reorderBy());
    }

  }).catch(err => console.log(err));
}
