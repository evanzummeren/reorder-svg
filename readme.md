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

| startposition-endposition | direction  | argument | image example                                                                                                  |
|---------------------------|------------|----------|----------------------------------------------------------------------------------------------------------------|
| lefttop-rightbottom       | horizontal | 1        | ![lt-rb-h](https://raw.githubusercontent.com/evanzummeren/reorder-svg/master/assets/lt-rb-h.svg?sanitize=true) |
| righttop-leftbottom       | horizontal | 2        | ![rt-lb-h](https://raw.githubusercontent.com/evanzummeren/reorder-svg/master/assets/rt-lb-h.svg?sanitize=true) |
| rightbottom-lefttop       | horizontal | 3        | ![rb-lt-h](https://raw.githubusercontent.com/evanzummeren/reorder-svg/master/assets/rb-lt-h.svg?sanitize=true) |
| leftbottom-righttop       | horizontal | 4        | ![lb-rt-h](https://raw.githubusercontent.com/evanzummeren/reorder-svg/master/assets/lb-rt-h.svg?sanitize=true) |
| lefttop-rightbottom       | vertical   | 5        | ![lt-rb-v](https://raw.githubusercontent.com/evanzummeren/reorder-svg/master/assets/lt-rb-v.svg?sanitize=true) |
| righttop-leftbottom       | vertical   | 6        | ![rt-lb-v](https://raw.githubusercontent.com/evanzummeren/reorder-svg/master/assets/rt-lb-v.svg?sanitize=true) |
| rightbottom-lefttop       | vertical   | 7        | ![rb-lt-v](https://raw.githubusercontent.com/evanzummeren/reorder-svg/master/assets/rb-lt-v.svg?sanitize=true) |
| leftbottom-righttop       | vertical   | 8        | ![lb-rt-v](https://raw.githubusercontent.com/evanzummeren/reorder-svg/master/assets/lb-rt-v.svg?sanitize=true) |

## Examples
Coming up
