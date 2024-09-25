describe('Проверка авторизации', function () {

    it('1.Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); //Зашли на сайт
         cy.get('#mail').type ('german@dolnikov.ru');//Ввели верный логин
         cy.get('#pass').type ('iLoveqastudio1');//Ввели верный пароль
         cy.get('#loginButton').click();//Нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно');//Проверил нужный текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Проверил крестик
        
     })

     it('2.Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').click();//Нажал забыли пароль
        cy.get('#mailForgot').type ('german@dolnikov.ru');//Ввели имейл
        cy.get('#restoreEmailButton').click();//Нажал отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');//Проверил нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Проверил крестик
       
    })

    it('3.Верный логин и НЕверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#mail').type ('german@dolnikov.ru');//Ввели верный логин
        cy.get('#pass').type ('iLoveqastudio');//Ввели НЕверный пароль
        cy.get('#loginButton').click();//Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет');//Проверил нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Проверил крестик
       
    })

    it('4.Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#mail').type ('germa@dolnikov.ru');//Ввели НЕверный логин
        cy.get('#pass').type ('iLoveqastudio1');//Ввели верный пароль
        cy.get('#loginButton').click();//Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет');//Проверил нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Проверил крестик
       
    })

    it('5.НЕверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#mail').type ('germandolnikov.ru');//Ввели НЕверный логин
        cy.get('#pass').type ('iLoveqastudio1');//Ввели верный пароль
        cy.get('#loginButton').click();//Нажал войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//Проверил нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Проверил крестик
       
    })

    it('6.Строчные буквы в логине и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#mail').type ('GerMan@Dolnikov.ru');//Ввели строчные буквы в логин
        cy.get('#pass').type ('iLoveqastudio1');//Ввели верный пароль
        cy.get('#loginButton').click();//Нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно');//Проверил нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Проверил крестик
      
    })
     
 })
 
 
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
 