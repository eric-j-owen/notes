[[CSS]]
Supports positive and negative numbers. With negatives, it can pull elements outside its parents or pull sibling elements close to it. 

#### [[margin collapse]]
	margins that are side by side collapse. an element on top of another, each with 20px of margin, will not have 40px, theyll share the 20px. 

#### auto margins
	Good for centering elements. The auto value fills the maximum available space. This online works for horizontal margin and for elements with an explicit width (block elements for ex grow to fill all horizontal space)
```css
margin-inline: auto;
```

vertical auto does work however in other layouts outside of flow
