# SVG Roulette

This is a vanilla javascript SVG generated "roulette", a circle with n sectors and a ball that spins around and the user can control.
It's not intended to simulate a casino roulette whatsoever but as a kind of a random selector.

## Demo 

[Checkout the demo](https://danieljulia.github.io/roulette)

## Parameters

- elem_id: The id of the container element
- num_sectors: Number of sectors
- speed: In radians per frame
- margin: Margin within sectors
- width: Width of svg (is always square)
- colors: An array of colors  (optional, default as random)

## Events 

- onChange(sector)  When changes sector 
- onStopped(sector) When stopped in one sector after a click
(see example)

## Sample



```html

<div id="roulette-container">
</div>

<script src="roulette.js"></script>
<script>

var roulette = new Roulette({
    elem_id:'roulette-container',
    num_sectors:17,
    speed:0.01,
    margin:4,
    width:600,
    /* colors:['#f00','#0f0','#00f','#ff0','#0ff','#f0f','#008','#800','#080',
    '#088','#880','#808','#f00','#0f0','#00f','#ff0','#0ff']*/
    })
    ;


```

## Screenshot 

![Roulette](screenshots/roulette.png?raw=true "Roulette")
