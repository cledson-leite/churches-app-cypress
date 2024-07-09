const locators = {
    MENU: {
        SETTINGS: '[data-test="menu-settings"]',
        CONTA: '[href="/contas"]',
        RESET: '[href="/reset"]',
        MOVIMENTACAO: '[href="/movimentacao"]',
        EXTRATO: '[href="/extrato"]',
        CONFIG: '[href="/config"]'
    },
    LOGIN: {
        USER: '[data-test="email"]',
        PASSWORD: '[data-test="passwd"]',
        BTN_LOGIN: '.btn'
    },
    CONTAS: {
        NOME: '[data-test="nome"]',
        BTN_SALVAR: '.btn',
        XP_BTN_EDITAR: "//td[contains(.,'Conta de teste')]/..//i[@class='far fa-edit']",
        XP_BTN_EXCLUIR: "//td[contains(.,'Conta de teste')]/..//i[@class='fas fa-trash']"
    },
    TOAST: "//div[@class='toast-message']",
}
export default locators