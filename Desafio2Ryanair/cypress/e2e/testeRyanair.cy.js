describe('Comprar passagem Ryanair', () => {
  it('Comprar passagem', () => {
    // Entrar no site
    cy.visit('https://www.ryanair.com/pt/pt');
    // Aceitar os cookies
    cy.get('button[data-ref="cookie.accept-all"]').click();
    // Clicar no campo para selecionar o destino
    cy.get('input#input-button__destination').click();
    // Escolher o país Irlanda
    cy.get('span.countries__country-inner[data-ref="country__name"]').contains('Irlanda').click();
    // Escolher o aeroporto de Dublin
    cy.get('span[data-ref="airport-item__name"][data-id="DUB"]').contains('Dublin').click();
    // Selecionar o mês de Setembro
    cy.get('div[data-ref="m-toggle-months-item"][data-id="set."]').contains('set.').click();
    // Selecionar o dia 6
    cy.get('div.calendar-body__cell[data-id="2024-09-06"][data-value="6"][data-type="day"]').contains('6').click();
    // Selecionar o dia 13
    cy.get('div.calendar-body__cell[data-id="2024-09-13"][data-value="13"][data-type="day"]').contains('13').click();
    // Clicar no botão 'Feito' na área de passageiros
    cy.xpath('/html/body/ry-tooltip/div[2]/ry-passengers-container/ry-passengers/div').click();
    // Clicar no botão pesquisar
    cy.get('[data-ref="flight-search-widget__cta"]').contains('Pesquisar').click();
    // Esperar 7 segundos para dar tempo da página carregar
    cy.wait(7000);
    // Selecionar o voo de ida
    cy.get('.ng-tns-c2689157688-16 > .flight-card-summary__footer > .flight-card-summary__select-btn').click();
    // Selecionar o voo da volta
    cy.get('.flight.ng-tns-c2689157688-12 > .flight-card__wrapper > .flight-card__header').click();
    // Selecionar a táfira Basic
    cy.get('[data-e2e="fare-card-standard"] > .fare-table__fare-column-border').click();
    // Selecionar a tarifa Basic na pop up
    cy.get(':nth-child(2) > fare-table-upgrade-footer > .fare-footer__submit-btn > ry-spinner').click();
    // Selecionar 'Iniciar sessão mais tarde'
    cy.get('.login-touchpoint__login-later').click();
    // Clicar no campo para selecionar o título
    cy.get('.dropdown__toggle').click();
    // Escolher o título
    cy.get('[data-ref="title-item-1"] > .dropdown-item__link').click();
    // Preencher o campo Nome Próprio
    cy.xpath('/html/body/app-root/flights-root/div/div/div/div/flights-lazy-content/flights-passengers/ry-spinner/pax-app-container/pax-app/ry-spinner/div/div/div[2]/pax-app-form-container/pax-app-form/form/pax-passenger-container/pax-passenger/div/pax-passenger-details-container/pax-passenger-details/pax-passenger-details-form-container/pax-details-form/ry-input-d[1]/div/input').click().type('Vivianne');
    // Preencher o campo Apelido
    cy.xpath('/html/body/app-root/flights-root/div/div/div/div/flights-lazy-content/flights-passengers/ry-spinner/pax-app-container/pax-app/ry-spinner/div/div/div[2]/pax-app-form-container/pax-app-form/form/pax-passenger-container/pax-passenger/div/pax-passenger-details-container/pax-passenger-details/pax-passenger-details-form-container/pax-details-form/ry-input-d[2]/div/input').click().type('Cavalcante');
    // Clicar no botão Continue
    cy.xpath('/html/body/app-root/flights-root/div/div/div/div/flights-lazy-content/ng-component/div/continue-flow-container/continue-flow/div/div/span/button').click();
    // Esperar 7 segundos para dar termpo de carregar a página
    cy.wait(7000);
    // Selecionar o tipo de bagagem
    cy.get('label[for="ry-radio-button--0"]').click();
    // Clicar no botão Continue
    cy.xpath('/html/body/bags-root/bags-booking-container/div/main/div/section[4]/bags-continue-flow-container/bags-continue-flow/button').click();
    // Esperar 7 segundos para dar termpo de carregar a página
    cy.wait(7000);
    // Clicar em 'Selecionar assentos mais tarde'
    cy.xpath('/html/body/seats-root/div/div/div[2]/ng-component/seats-container-v2/main/div[2]/div/div/div[1]/button[2]/span/span').click();
    // Clicar em 'Continuar sem um lugar'
    cy.xpath('/html/body/seats-root/div/div/div[2]/ng-component/seats-container-v2/main/div[2]/div/div/div[2]/div[2]/random-allocation-info/reinforcement-message/div/div[3]/div/button[1]').click();
    // Clicar em 'Continuar com a atribuição aleatória'
    cy.xpath('/html/body/seats-root/ry-portal/div/upsell-modal-container/upsell-modal/ry-dialog/div[2]/div[2]/button[2]').click();
    // Clicar em Continue
    cy.get('.enhanced-takeover__product-dismiss-cta').click();
    // Clicar em Continue
    cy.xpath('/html/body/app-root/ng-component/div/div/div/main/div/airport-and-flight-container/button').click();
    // Clicar em Continue
    cy.xpath('/html/body/app-root/ng-component/div/div/div/main/div/ng-component/button').click();
    // Esperar 7 segundos para dar termpo de carregar a página
    cy.wait(7000);
    // Assertion para comprovar que a pop up de 'Início de sessão na conta' está visível
    cy.get('.auth-popup__content').should('be.visible');
  })
})