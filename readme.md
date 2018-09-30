# reorderSvg.js
This module currently accepts an array of stringified polygons. It then calculates the center point 
of each SVG polygon, after which it reorders the polygons on either the
X or Y position it's center point. It accepts 8 ordering formats (see settings: order).

At this moment it only supports points. Svg shapes exported through Adobe 
Illustrator (points divided by spaces) and the W3C standard (X and Y point attached by
comma and coordinates seperated through spaces) are both supported.

## Installation
```npm install reorder-svg```

## Usage
```reorderSvg(shapes, order).then(result => console.log(result));```

### Settings
**Shapes** ```{array}```  
Accepts an array of stringified polygons

**Order** ```{number}```  
You can pick one of the following 8 formatting orders

| startposition-endposition | direction  | argument | image                                                                                           |
|---------------------------|------------|----------|-------------------------------------------------------------------------------------------------|
| lefttop-rightbottom       | horizontal | 1        | ![lt-rb](https://raw.githubusercontent.com/evanzummeren/reorder-svg/master/assets/lt-rb-h.svg)  |
| righttop-leftbottom       | horizontal | 2        |       |
| rightbottom-lefttop       | horizontal | 3        |       |
| leftbottom-righttop       | horizontal | 4        |       |
| lefttop-rightbottom       | vertical   | 5        |       |
| righttop-leftbottom       | vertical   | 6        |       |
| rightbottom-lefttop       | vertical   | 7        |       |
| leftbottom-righttop       | vertical   | 8        |       |

## Examples
Coming up
