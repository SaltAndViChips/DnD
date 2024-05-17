---
title: Lullin
draft: false
---
Lullin is a small town in the Northernmost parts of [[Celesion]]

%%

```leaflet  
### Tutorial: [https://youtu.be/54EyMzJP5DU](https://youtu.be/54EyMzJP5DU)  
### id must be unique  
id: Lullin  
### Lock pins so they can't be moved  
lock: true  
### If true, view of map will recenter as you zoom out.  
recenter: true  
### If true, disables mouse scroll for zomming in and out of a map. Button controls still work.  
noScrollZoom: true  
image: [[lullin.png]]  
### Map Pixel Height x 1 / (Pixels between Bar Scale / 100)  
### Map Pixel Width x 1 / (Pixels between Bar Scale / 100)  
### Note that this formula requires adjustments depending on your map. The idea is to determine the number of units between your bar scale. We divide by 100 here because my bar scale measures in 100 units. If your maps scale bar measures in units of 50 them you should divide by 50 instead. The idea is to calculate how many pixels are equal to 1 unit.  
### Bounds is entered as [Height, Width]  
bounds: [[0,0], [4095, 4095]]  
height: 500px  
width: 95%  
### This sets where the map starts by default. Set it to the middle (half) of your bounds.  
lat: 2300 
long: 2300  
### 0 is no zoom. Negative zoom steps away from the map. Positive zoom steps towards the map.  
minZoom: -3  
### Max zoom is 18.  
maxZoom: 3  
### Hover mouse over the Reset Zoom icon to see your current zoom level.  
defaultZoom: -2  
### How far it zooms in or out with each step. Can be in decimals.  
zoomDelta: 0.5  
### This is a string so can be any text. Change it to match your maps measurement scale.  
unit: miles  
scale: 1  
darkMode: false
marker: default,2242.59375,2634,,Lucky Looks,,
marker: default,1636.59375,2432,Sentix Grimbeard,Grimbeards Gizmos and Gadgets,,
marker: default,1895.8858628826065,2245.7711370484753,,Frozenforge Tavern,,

```

%%
Lullin hosts the [[Festival of Ends]] once every 70 years.

The streets of Lullin are carved with Nevermelt ice, filled with undying fire.

While a town full of mostly Tradesman and Hunters, Lullin is home to the Deity [[Freya (Rey)]]
along with her family.
