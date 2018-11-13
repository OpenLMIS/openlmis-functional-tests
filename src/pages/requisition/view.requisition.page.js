import Page from '../page';
import waitForVisible from '../../support/action/waitForVisible';
import getButtonSelector from '../../support/lib/getButtonSelector';

/**
 * Product Grid Page object represents the related view in OpenLMIS UI.
 */
class ViewRequisitionPage extends Page {

    /**
     * Wait for this page to be visible.
     */
    waitForIsVisible() {
        waitForVisible('div.openlmis-table-container');
        waitForVisible('div.openlmis-flex-table');
    }

    /**
     * Clears all enabled inputs in the requisition as well as total loses and adjustments.
     */
    clearForm() {
        browser.elements('tr a:enabled').value.forEach((element) => {
            this.scrollToCell(element);
            element.click();

            browser.elements(getButtonSelector('Remove')).value.forEach(button => button.click());
            browser.element(getButtonSelector('Update')).click();
            this.waitForLoadingModalToFade();
        });

        browser.elements('td input[type="text"]:enabled').value.forEach((element) => {
            this.scrollToCell(element);
            element.clearElement();
        });
    }

    /**
     * Updates the value of the input for the given column and product.
     *
     * @param {String} column the name of the column
     * @param {String} product the name of the product
     * @param {String} value the value to be set for the specific input
     */
    setColumnForProduct(column, product, value) {
        const id = this.getColumnId(column);
        const selector = this.getInputSelector(product, id);
        const td = browser.element(selector);

        this.scrollToSelector(selector);
        td.setValue(value);
    }

    /**
     * Skips all skippable line items.
     */
    skipAll() {
        browser.element('//a[normalize-space(text())=\'All\']').click();
    }

    /**
     * Unskips all line items.
     */
    skipNone() {
        browser.element('//a[normalize-space(text())=\'None\']').click();
    }

    /**
     * Updates the value of the input for the given column and product.
     *
     * @param {String} column the name of the column
     * @param {String} product the name of the product
     *
     * @return {String} the value of the input in the cell
     */
    getColumnForProduct(column, product) {
        const id = this.getColumnId(column);
        const selector = this.getInputSelector(product, id);

        return browser.element(selector).getValue();
    }

    scrollToCell(target) {
        browser.execute((selector, index) => {
            const element = $($(selector)[index]).parents('td')[0];
            element.focus();
        }, target.selector, target.index);
    }

    scrollToSelector(target) {
        browser.selectorExecute(target, (elements) => {
            const element = $(elements[0]).parents('td')[0];
            element.focus();
        });
    }

    getInputSelector(product, columnNumber) {
        return `//td[normalize-space(text())='${product}']/parent::tr/td[position()='${columnNumber + 1}']/div/input`;
    }

    getColumnId(columnName) {
        return browser
            .execute(name => $(`th:contains('${name}')`).index(), columnName)
            .value;
    }

    /**
     * Clears the value of the input for the given column and product.
     *
     * @param {String} column the name of the column
     * @param {String} product the name of the product
     */
    clearColumnForProduct(column, product) {
        const id = this.getColumnId(column);
        const selector = this.getInputSelector(product, id);
        const td = browser.element(selector);

        this.scrollToSelector(selector);
        td.clearElement();
    }

    /**
     * Checks whether the field in already submitted requisition is editable.
     */
    checkIfIsEditable() {
        const numberOfEditableInputs = 0;
        browser.elements('td input[type="text"]:enabled').value.forEach((element) => {
            this.scrollToCell(element);
            this.numberOfEditableInputs++;
        });
        return numberOfEditableInputs > 0 ? true : false;
    }

    /**
    * Open the Non full supply product(s) page.
    */
    openNonFullSupplyProduct() {
        browser.execute(() => $('ul a:contains("Non full supply product(s)")').click());
    }

    /**
    * Open the Full supply product(s) page.
    */
    openFullSupplyProduct() {
        browser.execute(() => $('ul a:contains("Full supply product(s)")').click());
    }

    /**
     * Check if button is not visible
     *
     * @param {String} button the name of the button
     */
    checkIfButtonIsHidden(button) {
        const buttonSelector = browser.element('//*[contains(@class, "button-group")]/button[contains(text(), "'+ button + '")]');
        this.waitForIsVisible(buttonSelector, true);
    }

    /**
     *
     * @param {String} page the number of a page to open
     */
    switchToPage(page) {
        browser.execute((pageNumber) => $(`ul a:contains('${pageNumber}')`).click(), page);
    }

    /**
     * Submit the confirmation modal
     */
    confirmSubmit() {
        browser.element('//*[contains(@class, "modal-footer")]/button[contains(text(), "Submit")]').click();
        this.waitForLoadingModalToFade();
    }

    /**
     * Click on 'Proceed' button for the submitted requisition.
     *
     * @param {String} status  Period name.
     */
    proceedToRequisition(status) {
        browser.execute(function (status) {
            $('table tr')
                .filter((index, element) => {
                    var that = $(element),
                        statusCell = that.find('td:nth-child(4)').text();

                    return status === statusCell;
                })
                .find('td:nth-child(5) input:nth-child(1)')
                .click();
        }, status);
    }
}

export default new ViewRequisitionPage();
