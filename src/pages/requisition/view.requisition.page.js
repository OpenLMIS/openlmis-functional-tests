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
        browser.scroll('//table/parent::*');

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

        browser.saveScreenshot(`./${column}-${product}.png`);
        return browser.element(selector).getValue();
    }

    scrollToCell(target) {
        browser.execute((selector, index) => {
            const element = $($(selector)[index]).parents('td')[0];
            const tableContainer = $('table').parent();
            const offsetLeft = element.offsetLeft + $(element).width() - tableContainer.width();
            const actualOffset = offsetLeft < 0 ? 0 : offsetLeft;

            $('table').parent()[0].scrollLeft = actualOffset;

            return {
                offsetLeft: actualOffset,
            };
        }, target.selector, target.index);
    }

    scrollToSelector(target) {
        browser.selectorExecute(target, (elements) => {
            const element = $(elements[0]).parents('td')[0];
            const tableContainer = $('table').parent();
            const offsetLeft = element.offsetLeft + $(element).width() - tableContainer.width();
            const actualOffset = offsetLeft < 0 ? 0 : offsetLeft;

            $('table').parent()[0].scrollLeft = actualOffset;

            return {
                offsetLeft: actualOffset,
            };
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

}

export default new ViewRequisitionPage();
