/* eslint-disable no-undef */
describe('Login spec', () => {

  it('should display login page correctly', () => {
    cy.visit('http://localhost:5173/');

    // memverifikasi elemen yang harus tampak pada halaman login
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Sign in$/).should('be.visible');
  });

  it ('should display alert when email is empty', () => {
    cy.visit('http://localhost:5173/');

    cy.get('button').contains(/^Sign in$/).click();
    
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty')
    });
  });

  it ('should display alert when password is empty', () => {
    cy.visit('http://localhost:5173/');
    cy.get('input[placeholder = "Email"]').type('test@test.com');

    cy.get('button').contains(/^Sign in$/).click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty')
    });
  });

  it ('should display alert when email and password are wrong', () => {
    cy.visit('http://localhost:5173/');

    // mengisi email
    cy.get('input[placeholder = "Email"]').type('testing@test');

    // mengisi password salah
    cy.get('input[placeholder = "Password"]').type('wrong_password');

    // klik login
    cy.get('button').contains(/^Sign in$/).click();

       // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Email atau password salah')
    });
  });

  it('should display threadpage when username and password are correct', () => {
    cy.visit('http://localhost:5173/');

    cy.get('input[placeholder = "Email"]').type('hi@hi.com');

    cy.get('input[placeholder = "Password"]').type('123456');

    cy.get('button').contains(/^Sign in$/).click();

    cy.get('p').contains(/^Dashboard$/).should('be.visible');
    cy.get('p').contains(/^Threads$/).should('be.visible');
    cy.get('p').contains(/^Leaderboard$/).should('be.visible');


  })

});