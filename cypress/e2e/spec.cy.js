const mySite = 'https://pictures-of-life.online/'

describe('Pictures of life', () => {
  it('passes', () => {
    cy.visit(mySite)
    cy.get('._textButton_13iad_1').click()
    cy.get('#Email-id').type('testovichmarket@gmail.com');
    cy.get('#Password-id').type('123Qwa#ыхты')
  })
})