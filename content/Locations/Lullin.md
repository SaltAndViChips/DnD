---
mapCalc1: 1
map_height_y: 4095
scale_pixels: 1
scale_pixels_range: 1
map_width_x: 4095
---
Lullin is a small town in the Northernmost parts of [[Celesion]]

Lullin hosts the [[Festival of Ends]] once every 70 years.

The streets of Lullin are carved with Nevermelt ice, filled with undying fire.


```leaflet  
id: Lulllin ### Must be unique with no spaces  
image: [[lullin.png]] ### Link to the map image file. Do not add a ! in front of the image  
bounds: [[0,0], [4095, 4095]] ### Size of the map in px Height_y, Width_x. Ignore 0,0  
height: 750px ### Size of the leaflet embed in px on your screen  
width: 750px ### Size of the leaflet embed in your note  
lat: 2047.5 ### To center the map, make this half of the map height.  
long: 2047.5 ### To center the map, make this half of the map width.  
minZoom: -1.5 ### Controls how far away from the map you can zoom out. Hover over the target icon to see the current level.  
maxZoom: 1 ### Controls how far towards the map you can zoom in. Hover over the target icon to see the current level.  
defaultZoom: -1 ### Sets the default zoom level when the map loads. Hover over the target icon to see the current level.  
zoomDelta: 0.5 ### Adjust how much the zoom changes when you zoom in or out.  
unit: mi ### The value displayed when measuring so you know what type of unit is being measure.  
scale: 0.09328358208955223 ### Real units/px (resolution) of your map  
recenter: false  
darkmode: false ### marker
```

 