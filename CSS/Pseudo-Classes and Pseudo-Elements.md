[[CSS]]

# pseudo-classes

```css
button:hover {}
button:focus {}
p:first-child{} /* only selects p if it is first child in its container */
p:last-child{}
p:first-of-type{} /* will select the first p in its container */
p:last-of-type{}
```

# pseudo-elements

```html

<style>
/* Adds a span tag with contennt before the p */
p::before {
	content: "!!!";
}
</style>

is equivalent to

<span>!!!</span>
<p>hello</p>

```

Targets sub elements such as placeholder 
```html
<style>
input::placeholder {
	color: pink;
}
</style>

<label>
	Postal Code
	<input type="text" placeholder="A1A 1A1" />
</label>
```