[[CSS]]

#### Rules 
- Margins only collapse when they're touching.
- Only block direction margins collapse
	- ex.  Each paragraph has `24px` of vertical margin (`margin-top` and `margin-bottom`), and that margin collapses. The paragraphs will be 24px apart, not 48px apart.
```html
<style>
p {
    margin-top: 24px;
    margin-bottom: 24px;
  }
</style>

<p>Paragraph One</p>
<p>Paragraph Two</p>
```

- Margins only collapse in flow layout
- Only adjacent elements collapse
- Bigger margin wins
- Nesting doesn't prevent collapsing. 
	- Margin is meant to increase distance between siblings. This means a child will transfer margin to parent element. So a div.p adjacent to just a p will have collapsing margins even though the p tags aren't adjacent.
- Padding and border prevent collapsing
- margins can collapse in the same direction
- more than two margins can collapse
