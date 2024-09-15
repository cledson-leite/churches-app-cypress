const locators = {
  LOGIN: {
    USER: '[data-test="email"]',
    PASSWORD: '[data-test="passwd"]',
    BTN_LOBIN: '.btn'
  },
  MENU: {
    SETTINGS: '[data-test="menu-settings"]',
    CONTAS: '[href="/contas"]',
    RESET: '[href="/reset"]',
  },
  CONTAS: {
    NOME: '[data-test="nome"]',
    BTN_SALVAR: '.btn',
    XP_BTN_EDITAR: "//td[contains(.,'Conta antiga')]/..//i[@class='far fa-edit']",
  },
  MESSAGE: '.toast-message'
}

export default locators