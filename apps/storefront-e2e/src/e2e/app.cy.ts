import { getGreeting } from '../support/app.po';

describe('storefront', () => {
  beforeEach(() => cy.visit('/'));

  it('should display container 123', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.get('[data-test-id="123"]').should('exist')

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome storefront');
  });
});
