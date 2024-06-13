[[CSS]]

#### px
#### em
	Relative unit, equal to the font size of the current element. If a heading has a font size of 24px, and padding is set to 2em, the padding will be 48px.
#### rem
	Relative unit, equal to the font size of the root element (<html>). For most situations use rems vs ems sinnce it is consistant across the board relative the the root font size, which respects the users preference for increasing/descreasing font size.

#### When to use each unit

*"Should this value scale up as the user increases their browser's default font size?"*

https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/

##### examples
- Use rems for media queries. Think of media queries as available space vs mobile/tablet/desktop. 
- Vertical margins use rems so that the spacing between text is compatible with font size. 
- Horizontal margins/padding use px since this doesn't really make sense to scale with font size.
- The width of a button makes more sense to use rems since if the font size increases, a px width won't increase leading to line wrapping. 
	- Make sure to set max-width: 100% to prevent layout from breaking from too big of a font size.