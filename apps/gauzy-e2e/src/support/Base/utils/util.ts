const defaultCommandTimeout = Cypress.config('defaultCommandTimeout');
const taskTimeout = Cypress.config('taskTimeout');

export const getTitle = () => {
	return cy.title();
};

export const verifyText = (loc, data) => {
	cy.get(loc, { timeout: defaultCommandTimeout })
		.invoke('text')
		.then((text) => {
			expect(text.trim()).to.include(data);
		});
};

export const verifyValue = (loc, data) => {
	cy.get(loc, { timeout: defaultCommandTimeout })
		.invoke('val')
		.then((val) => {
			expect(val).to.equal(data);
		});
};

export const verifyTextNotExisting = (loc, text) => {
	cy.get(loc, { timeout: defaultCommandTimeout }).should(
		'not.contain.text',
		text
	);
};

export const verifyTextByIndex = (loc, data, index) => {
	cy.get(loc)
		.eq(index)
		.invoke('text')
		.then((text) => {
			expect(text).to.include(data);
		});
};

export const clickButton = (loc) => {
	cy.get(loc, { timeout: taskTimeout }).click();
};

export const clickElementByText = (loc, data) => {
	cy.contains(loc, data).click();
};

export const enterInput = (loc, data) => {
	cy.get(loc, { timeout: taskTimeout }).type(data);
};

export const wait = (loc) => {
	cy.wait(loc);
};

export const waitUntil = (time: number) => {
	cy.wait(time);
};

export const clearField = (loc) => {
	cy.get(loc).clear();
};

export const urlChanged = () => {
	cy.url();
};

export const verifyElementIsVisible = (loc) => {
	cy.get(loc, { timeout: defaultCommandTimeout }).should('be.visible');
};

export const clickButtonByIndex = (loc, index) => {
	cy.get(loc, { timeout: taskTimeout })
		.eq(index)
		.click({ force: true });
};

export const enterInputConditionally = (loc, data) => {
	cy.get(loc, { timeout: taskTimeout }).type(`${data}{enter}`);
};

export const clickKeyboardBtnByKeycode = (keycode) => {
	cy.get('body').trigger('keydown', { keyCode: keycode });
};

export const clickElementIfVisible = (loc, index) => {
	cy.get(loc, { timeout: taskTimeout }).then((option) => {
		if (option.is(':visible')) {
			option.eq(index).trigger('click');
		}
	});
};

export const compareTwoTexts = (loc, text) => {
	cy.get(loc, { timeout: defaultCommandTimeout }).should(
		'contain.text',
		text
	);
};

export const getLastElement = (loc) => {
	cy.get(loc, { timeout: defaultCommandTimeout }).last().trigger('click');
};

export const doubleClickOnElement = (loc, index) => {
	cy.get(loc, { timeout: taskTimeout }).eq(index).dblclick();
};

export const getNotEqualElement = (loc, text) => {
	cy.get(loc, { timeout: defaultCommandTimeout }).should(
		'not.have.text',
		text
	);
};

export const waitElementToHide = (loc) => {
	cy.get(loc, { timeout: defaultCommandTimeout }).should('not.exist');
};

export const clickButtonWithDelay = (loc) => {
	cy.get(loc, { timeout: defaultCommandTimeout }).click();
};

export const clickButtonByText = (text) => {
	cy.get(`button:contains("${text}")`).click({ force: true });
};

export const scrollDown = (loc) => {
	cy.get(loc, { timeout: defaultCommandTimeout }).scrollTo('bottom', {
		ensureScrollable: false
	});
};

export const verifyElementIsNotVisible = (loc) => {
	cy.get(loc, { timeout: defaultCommandTimeout }).should('not.be.visible');
};

export const verifyElementNotExist = (loc) => {
	cy.get(loc, { timeout: defaultCommandTimeout }).should('not.exist');
};

export const clickTableRowByText = (loc, text) => {
	cy.get(loc, { timeout: taskTimeout }).contains(text).click();
};

export const clickButtonMultipleTimes = (loc, n) => {
	for (let i = 0; i < n; i++) {
		cy.get(loc, { timeout: taskTimeout }).click();
	}
};

export const typeOverTextarea = (loc, text) => {
	cy.get(loc, { timeout: taskTimeout }).type(text);
};

export const verifyStateByIndex = (loc, index, state) => {
	cy.get(loc, { timeout: defaultCommandTimeout })
		.eq(index)
		.should(`${state}`);
};

export const verifyClassExist = (loc, someClass) => {
	cy.get(loc, { timeout: defaultCommandTimeout }).should(
		'have.class',
		`${someClass}`
	);
};

export const clickOutsideElement = () => {
	cy.get('body').click(0, 0);
};
