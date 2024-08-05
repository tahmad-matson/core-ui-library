```markdown
# Core UI Library

@matson-inc/core-ui-library is a reusable component library built with React, TypeScript, and styled-components. This library follows the atomic design methodology, providing a set of modular, composable, and reusable UI components.

## Installation

To install the package, run the following command:

```bash
npm install @matson-inc/core-ui-library
```

## Usage

Below is an example of how to use the `Button` component from the `core-ui-library`.

### Importing the Button Component

First, import the `Button` component into your project:

```tsx
import React from 'react';
import { Button } from '@matson-inc/core-ui-library';
```

### Using the Button Component

Here’s an example of how to use the `Button` component in your React application:

```tsx
import React from 'react';
import { Button } from '@matson-inc/core-ui-library';

const App: React.FC = () => {
  return (
    <div>
      <Button variant="primary" size="large">Primary Button</Button>
      <Button variant="secondary" size="small">Secondary Button</Button>
    </div>
  );
};

export default App;
```

### Button Props

The `Button` component accepts the following props:

- `variant`: Defines the style of the button. Possible values are `primary` and `secondary`. Default is `primary`.
- `size`: Defines the size of the button. Possible values are `small`, `medium`, and `large`. Default is `medium`.
- Any other props are passed directly to the underlying `<button>` element.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch and create a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

## Maintainers

This project is maintained by the Matson Inc team. If you have any questions or issues, please contact us at support@matson-inc.com.
```

### Summary

This README provides instructions on how to install the package, use the `Button` component, and includes basic information about contributing and licensing. Feel free to customize it further based on the additional components you may have in your library and any other specific details you want to include.