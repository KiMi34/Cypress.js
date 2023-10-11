describe('Тестирование страницы QA.Studio', function () {
  it('Проверка на позитивный кейс авторизации', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.get('body').contains('Авторизация прошла успешно');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                 })
                 it('Проверка логики восстановления пароля', function () {
                  cy.visit('https://login.qa.studio/');
                  cy.get('#forgotEmailButton').click();
                  cy.get('#mailForgot').type('test@email.com')
                  cy.get('#restoreEmailButton').click();
                  cy.get('body').contains('Успешно отправили пароль на e-mail');
                  cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                            })
                            it('Проверка на негативный кейс авторизации с неверным паролем', function () {
                              cy.visit('https://login.qa.studio/');
                              cy.get('#mail').type('german@dolnikov.ru');
                              cy.get('#pass').type('iLoveqastudio');
                              cy.get('#loginButton').click();
                              cy.get('body').contains('Такого логина или пароля нет');
                              cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                                        })
                                        it('Проверка на негативный кейс авторизации с неверным логином', function () {
                                          cy.visit('https://login.qa.studio/');
                                          cy.get('#mail').type('gn@dolnikov.ru');
                                          cy.get('#pass').type('iLoveqastudio1');
                                          cy.get('#loginButton').click();
                                          cy.get('body').contains('Такого логина или пароля нет');
                                          cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                                                    })
                                                               it('Проверка на негативный кейс валидации', function () {
                                                                  cy.visit('https://login.qa.studio/');
                                                                  cy.get('#mail').type('germandolnikov.ru');
                                                                  cy.get('#pass').type('iLoveqastudio1');
                                                                  cy.get('#loginButton').click();
                                                                  cy.get('body').contains('Нужно исправить проблему валидации');
                                                                  cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                                                                            })
                                                                            it('Проверка на приведение к строчным буквам в логине', function () {
                                                                              cy.visit('https://login.qa.studio/');
                                                                              cy.get('#mail').type('GerMan@Dolnikov.ru');
                                                                              cy.get('#pass').type('iLoveqastudio1');
                                                                              cy.get('#loginButton').click();
                                                                              cy.get('body').contains('Авторизация прошла успешно');
                                                                              cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                                                                                        })
})
describe('Тестирование страницы Pokemon.Battle', function () {
  it('Проверка покупки аватара', function () {
       cy.visit('https://pokemonbattle.me/login/');
       cy.get(':nth-child(1) > .auth__input').type('haungry@gmail.com');
       cy.get('#password').type('Kimi1989');
       cy.get('.auth__button').click();
       cy.get('.header__container > .header__id').should('be.visible');
       cy.get('.header__btns > [href="/shop"]').click();
       cy.get(':nth-child(2) > .shop__button').click();
       cy.get('.pay__main-header').should('be.visible');
       cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
       cy.get(':nth-child(1) > .pay_base-input-v2').type('1025');
       cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
       cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('German Dolnikov');
       cy.get('.pay-btn').click();  
       cy.get('#cardnumber').type('56456');3
       cy.get('.payment__submit-button').click();
       cy.get('.payment__submit-button').should('be.visible');
       cy.get('.payment__main').contains('Покупка прошла успешно');
       cy.get('.payment__adv').click();
       cy.get('.header__img').click();
                 })
                 
})


