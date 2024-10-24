describe('Puppy Image App', () => {
    beforeEach(() => {
      // Visit the React app before each test
      cy.visit('http://localhost:3000')
    })
  
    it('Displays the header correctly', () => {
      cy.contains('Cute Puppy App').should('exist')
    })
  
    it('Button should trigger image fetch', () => {
      // Mock the backend API response
      cy.intercept('GET', 'http://192.168.49.2:30003/api/puppy', {
        statusCode: 200,
        body: { imageUrl: 'https://place-puppy.com/300x300' },
      }).as('getPuppyImage')
  
      // Click the button
      cy.contains('Click For Cute Puppy').click()
  
      // Wait for the API to be called
      cy.wait('@getPuppyImage')
  
      // Verify that the image is displayed
      cy.get('img').should('have.attr', 'src', 'https://place-puppy.com/300x300')
    })
  
    it('Displays loading text while fetching the image', () => {
      cy.intercept('GET', 'http://192.168.49.2:30003/api/puppy', (req) => {
        req.reply((res) => {
          // Simulate a delay to show the loading state
          res.send({ delay: 500, body: { imageUrl: 'https://place-puppy.com/300x300' } })
        })
      }).as('getPuppyImage')
  
      // Click the button and check for loading text
      cy.contains('Click For Cute Puppy').click()
      cy.contains('Loading...').should('exist')
  
      // Verify the image loads after the delay
      cy.wait('@getPuppyImage')
      cy.get('img').should('have.attr', 'src', 'https://place-puppy.com/300x300')
    })
  })
  