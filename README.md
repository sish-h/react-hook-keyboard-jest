# react-hook-keyboard-jest
A TypeScript library that provides a React hook for handling keyboard events, along with Jest tests to ensure it works as expected.

## What it does
This hook allows you to easily listen to keyboard events in your React application, providing a simple and effective way to handle user input.

## Installation
To get started, simply run `npm install` or `yarn install` to install the dependencies.

## Usage
To use the hook, import it into your component and call it with the event you want to listen for. For example:
```typescript
import { useKeyboardEvent } from './useKeyboardEvent';

function MyComponent() {
  useKeyboardEvent('keydown', (event) => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed');
    }
  });

  return <div>Press the Enter key</div>;
}
```
## Running the tests
To run the Jest tests, simply run `npm run test` or `yarn test`. This will execute the tests and report any failures.

## Contributing
Feel free to contribute to this repository by submitting a pull request. Make sure to include tests for any new functionality.