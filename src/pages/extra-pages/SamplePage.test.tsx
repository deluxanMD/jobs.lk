import { render } from '@testing-library/react';
import SamplePage from './SamplePage';

describe('SamplePage', () => {
  it('should render the page', () => {
    render(<SamplePage />);
  });
});
