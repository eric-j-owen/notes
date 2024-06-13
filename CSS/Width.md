[[CSS]]

```css
 .img-container {
    margin-inline: -32px;
  }

  img {
    display: block;
    width: 100%;
  }
```


#### Width auto
	The default value for the `width` property is `auto`. By default, for _most_ elements, this means “automatically grow to fill as much space as possible”.

Images, as well as other “replaced elements” like `<video>` `<canvas>` `<input/>` `<textarea>`, are special. They don't automatically expand to fill the available space. Instead, they rely on their _intrinsic size_.

For example, suppose I take a photo on an old webcam. That photo has a native size of `640 × 480`. When I embed this image on the page, using an `<img>` tag, it'll have a default width of 640px.

**This is the problem.** `width: auto` has a different meaning for replaced elements. It doesn't mean “stretch out and fill all of the space”, it means “use your natural width”!
#### width: fit-content/min-content/max-content
	Fit-content combines both width: min-content and width: max-content. The width is based on the size of the children, if the width can fit in parent container, it behaves like max-content, if not it allows line breaks (min-content)
	min-content will shrink everything to the absolute smallest width that can fit the content, while max-width is the opposite and does not line break.
