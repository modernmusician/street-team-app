import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { describe } from 'riteway';
import render from 'riteway/render-component';

// ##default create-react-app
// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('App component', async assert => {
  const createApp = (props = {}) => render(<App {...props} />);

  {
    const props = {};
    const $ = createApp(props);

    assert({
      given: 'no props',
      should: 'render a button',
      actual: $('.increment-button').length,
      expected: 1,
    });
  }

  {
    const props = {};
    const $ = createApp(props);

    assert({
      given: 'no props',
      should: 'suggest render a number',
      actual: $('.number')
        .html()
        .trim(),
      expected: '0',
    });
  }
});