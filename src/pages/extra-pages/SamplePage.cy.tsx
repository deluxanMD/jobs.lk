import SamplePage from './SamplePage';

describe('SamplePage', () => {
  it('should render', () => {
    cy.mount(<SamplePage />);
  });
});
