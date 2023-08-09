<h1 align="center">Layla UI</h1>

[![npm version](https://img.shields.io/badge/npm-last%20version-green)](https://www.npmjs.com/package/layla-ui-library)

Layla UI is a React UI library that provides a set of unstyled customizable UI components.

## Installation

Layla UI is available as an [npm package](https://www.npmjs.com/package/layla-ui-library).

**npm:**

```bash
npm install layla-ui-library
```

## Getting started

Here is an example using a `Button` component:

```jsx
import * as React from "react";
import { Button } from "layla-ui-library";

function App() {
  return <Button label="Next" />;
}
```

## Styling

Components are unstyled and compatible with any styling solution, giving you full control.

CSS-in-JS

```jsx
import styled from "styled-components";
import { Button } from "layla-ui-library";

export const StyledButton = styled(Button)`
  background-color: #ff0000;
`;
```

Class attribute

```jsx
import { Button } from "layla-ui-library";
import "./styles.css";

function App() {
  return <Button label="Next" className="styledButton" />;
}

export default App;

// styles.css

.styledButton {
  background-color: #000000;
}
```


## Changelog

The [changelog](https://github.com/RichEwin/layla-ui/releases) is regularly updated to reflect what's changed in each new release.
