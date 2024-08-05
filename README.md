# Core UI Library

@matson-inc/core-ui-library is a reusable component library built with React, TypeScript, and styled-components. This library follows the atomic design methodology, providing a set of modular, composable, and reusable UI components.

## Table of Contents

1. [Installation](#installation)
2. [Components](#components)
   - [Button](#button)
     - [Button Props](#button-props)
   - [Link](#link)
     - [Link Props](#link-props)
   - [Typography](#typography)
     - [Heading](#heading)
       - [Heading Props](#heading-props)
     - [Paragraph](#paragraph)
       - [Paragraph Props](#paragraph-props)
3. [BEM Methodology](#bem-methodology)
4. [Contributing](#contributing)
5. [License](#license)
6. [Maintainers](#maintainers)

## Installation

To install the package, run the following command:

```bash
npm install @matson-inc/core-ui-library
```

## Components

### Button

#### Importing the Button Component

First, import the `Button` component into your project:

```tsx
import React from 'react';
import { Button } from '@matson-inc/core-ui-library';
```

#### Using the Button Component

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

#### Button Props

The `Button` component accepts the following props:

- `variant`: Defines the style of the button. Possible values are `primary` and `secondary`. Default is `primary`.
- `size`: Defines the size of the button. Possible values are `small`, `medium`, and `large`. Default is `medium`.
- Any other props are passed directly to the underlying `<button>` element.

### Link

#### Importing the Link Component

First, import the `Link` component into your project:

```tsx
import React from 'react';
import { Link } from '@matson-inc/core-ui-library';
```

#### Using the Link Component

Here’s an example of how to use the `Link` component in your React application:

```tsx
import React from 'react';
import { Link } from '@matson-inc/core-ui-library';

const App: React.FC = () => {
  return (
    <div>
      <Link href="https://www.example.com">External Link</Link>
      <Link href="/internal-page">Internal Link</Link>
    </div>
  );
};

export default App;
```

#### Link Props

The `Link` component accepts the following props:

- `href`: The URL the link points to. If it starts with "http", it is treated as an external link. Otherwise, it is treated as an internal link.
- Any other props are passed directly to the underlying `<a>` or `React Router Link` element.

### Typography

#### Heading

##### Importing the Heading Component

First, import the `Heading` component into your project:

```tsx
import React from 'react';
import { Heading } from '@matson-inc/core-ui-library';
```

##### Using the Heading Component

Here’s an example of how to use the `Heading` component in your React application:

```tsx
import React from 'react';
import { Heading } from '@matson-inc/core-ui-library';

const App: React.FC = () => {
  return (
    <div>
      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
    </div>
  );
};

export default App;
```

##### Heading Props

The `Heading` component accepts the following props:

- `level`: Defines the heading level. Possible values are `1`, `2`, `3`, `4`, `5`, and `6`.
- Any other props are passed directly to the underlying `<h1>`, `<h2>`, etc., element.

#### Paragraph

##### Importing the Paragraph Component

First, import the `Paragraph` component into your project:

```tsx
import React from 'react';
import { Paragraph } from '@matson-inc/core-ui-library';
```

##### Using the Paragraph Component

Here’s an example of how to use the `Paragraph` component in your React application:

```tsx
import React from 'react';
import { Paragraph } from '@matson-inc/core-ui-library';

const App: React.FC = () => {
  return (
    <div>
      <Paragraph>This is a paragraph.</Paragraph>
      <Paragraph>This is another paragraph.</Paragraph>
    </div>
  );
};

export default App;
```

##### Paragraph Props

The `Paragraph` component accepts the following props:

- Any other props are passed directly to the underlying `<p>` element.

## BEM Methodology

This component library uses the BEM (Block Element Modifier) methodology for styling. The `Button` component applies BEM class names as follows:

- `button--primary`: Primary button style.
- `button--secondary`: Secondary button style.
- `button--large`: Large button size.
- `button--small`: Small button size.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch and create a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

## Maintainers

This project is maintained by the Matson Inc team. If you have any questions or issues, please contact us at tahmad@matson.com.