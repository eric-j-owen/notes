[[CSS]]

Unlike width, default height behavior is to take up as little space as possible. Generally avoid setting fixed heights.

if setting height: 100%, parent element must have a height, because by default the parent elements height is based on its children, and if setting a percentage height of the child its looking at the parents height, so nothing will happen. We need to explicitly define the height: 
```css
html, body, #root { 
	height: 100% 
} 
/*then a child element.*/
.wrapper { 
	min-height: 100% 
}
```

when `html` is given `height: 100%`, it takes up the height of the viewport. Then the `body` and `#root` are based on that height. The `.wrapper` uses min-height to ensure the minimum size is equal to the viewport height, but can overflow and take up more space if needed.


Using vh doesnt work for mobile, because when scrolling address and footer controls slide away, changing the veiwport size. to solve this, use svh
```css
.element {
  height: 100vh; /* Fallback for older browsers */
  height: 100svh;
}
```