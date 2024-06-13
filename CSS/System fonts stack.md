[[CSS]]
To prevent the default html font from being used, it is common to have a system font stack, shown below. This ensures if the intended fonts cannot be found, at least the font installed on the user's system will be used, which is a better alternative to the html font for reasons of consistency, readability, performance, and user preference. 
```css
:root {
  --system-ui: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.element {
  font-family: var(--system-ui);
}
```
