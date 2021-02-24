# roulette

This is a vanilla js circle with n sectors and a ball that spins as a roulette.
Is not intended to simulate a casino roulette whatsoever.


## Parameters

- elem_id: The id of the container
- num_sectors: Number of sectors
- margin: Margin within sectors
- width: Width of svg (is always square)
- colors: An array of colors 
           

## Sample



```html

<div id="roulette-container">
</div>

<script src="roulette.js"></script>
<script>

var roulette = new Roulette({
    elem_id:'roulette-container',
    num_sectors:17,
    margin:4,
    width:600,
    /* colors:['#f00','#0f0','#00f','#ff0','#0ff','#f0f','#008','#800','#080',
    '#088','#880','#808','#f00','#0f0','#00f','#ff0','#0ff']*/
    })
    ;
roulette.create();

```

## Screenshot 

![Roulette](screenshots/roulette.png?raw=true "Roulette")
