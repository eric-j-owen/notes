[[Programming]] [[js]]

#### Closure

    A function that captures the lexical scope in which it was declared, allowing it to access and manipulate variables from an outer scope even after that scope has been closed (maintain state).

#### Lexical Scoping

    A function's access to variables is determinned by its physical location in the source code. So a function declared within another function is a closure that has lexical access to to its outer function, even after the outer function has finished executing.

```javascript
const createCounter = () => {
  let count = 0;
  return () => {
    count += 1;
    return count;
  };
};

const counter = createCounter();
console.log(counter()); // Outputs: 1
console.log(counter()); // Outputs: 2
```

#### Why use closures?

- Data encapsulation.
  - A closures variables or functions can't be accessed outside, so they are private. Hiding implementation details and maintaining state.
- Functional programming.
- Event handlers and callbacks.
- Module patterns.
