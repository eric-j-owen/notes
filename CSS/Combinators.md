[[CSS]]
A character that combines multiple selectors

```css
/* a space character combines nav and a tags to select all 'a'  descendants of nav */
nav a {}

/* Will select only children of ul */
ul > li {}

/* targets all li children of ul that are descendants of nav */
nav ul > li {}
```