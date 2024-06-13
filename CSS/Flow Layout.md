[[CSS]] 

Two main element types in flow layout:
#### Block 
	headings, p, footer, aside, section, etc. Content box expands to fill available horizontal space.
#### Inline
	span, links, strong, a, etc. margin-inline can affect them, however can't give width or height. Exception is replaced elements. Browser treats inline elements as typography, to deal with this either make element display:block or set line-height of parent container to 0. Can line-wrap.

#### Inline-Block
	Can't line wrap. Block level element that can be placed in inline context. Meaning margin-block and height and width values work with it. 
