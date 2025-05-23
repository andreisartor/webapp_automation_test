Feature('login');

Scenario('login com sucesso no site',  ({ I }) => {
    I.amOnPage('https://www.automationpratice.com.br');
    I.click('Login');
    I.waitForText('Login', 10);
    I.fillField('#user', 'andrei.sartor@msn.com')
    I.fillField('#password', '123456')
    I.click('#btnLogin');
    I.waitForText('Login realizado', 5);

}).tag('@sucesso');

Scenario('Tentando Logar digitando apenas o e-mail',  ({ I }) => {
    I.amOnPage('https://www.automationpratice.com.br');
    I.click('Login');
    I.waitForText('Login', 10);
    I.fillField('#user', 'andrei.sartor@msn.com')
    I.click('#btnLogin');
    I.waitForText('Senha inválida.', 5);

}).tag('@falha');

Scenario('Tentando logar não digitanto o e-mail e senha',  ({ I }) => {
    I.amOnPage('https://www.automationpratice.com.br');
    I.click('Login');
    I.waitForText('Login', 10);
    I.click('#btnLogin');
    I.waitForText('E-mail inválido.', 5);

}).tag('@falha');

Scenario('Tentando Logar digitando apenas a senha',  ({ I }) => {
    I.amOnPage('https://www.automationpratice.com.br');
    I.click('Login');
    I.waitForText('Login', 10);
    I.fillField('#password', '123456')
    I.click('#btnLogin');
    I.waitForText('E-mail inválido.', 5);

}).tag('@falha');