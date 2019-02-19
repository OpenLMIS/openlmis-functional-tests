import Page from '../../components/page';
import waitForVisible from '../../support/action/waitForVisible';
import getButtonSelector from '../../support/lib/getButtonSelector';
import loadingModal from '../../components/loading-modal';
import ConfirmationModal from '../../components/confirmation-modal';
import Button from '../../components/button';
import TextArea from '../../components/text-area';
import DatePicker from '../../components/date-picker';
import RequisitionLineItem from '../../components/requisition-line-item';
import Link from '../../components/link';

/**
 * Product Grid Page object represents the related view in OpenLMIS UI.
 */
class ViewRequisitionPage extends Page {

    /**
     * Wait for this page to be visible.
     */
    waitForIsVisible() {
        waitForVisible('//h2[contains(normalize-space(text()), "Report and Requisition for")]');
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
            loadingModal.waitForHide();
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
     * Enters the comment in the text area.
     *
     * @param {String} comment the comment text
     */
    setComment(comment) {
        this.commentTextArea.value = comment;
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
     * @param {string} column the name of the column
     * @param {string} product the name of the product
     *
     * @return {string} the value of the input in the cell
     */
    getColumnForProduct(column, product) {
        const id = this.getColumnId(column);
        const selector = this.getInputSelector(product, id);

        return browser.element(selector).getValue();
    }

    /**
     * Gets the value of the table data element for the given column and product.
     *
     * @param {string} column the name of the column
     * @param {string} product the name of the product
     *
     * @return {string} the value of the input in the cell
     */
    getColumnTableDataForProduct(column, product) {
        const id = this.getColumnId(column);
        const selector = this.getTableData(product, id);

        return browser.element(selector).getText();
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
        return numberOfEditableInputs > 0;
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
        const buttonSelector = `//*[contains(@class, "button-group")]/button[contains(text(), "${button}")]`;
        waitForVisible(buttonSelector, true);
    }

    /**
     * Check if line item is not visible
     *
     * @param {String} product the code of the product
     */
    checkIfLineItemIsHidden(product) {
        const requisitionLineItemSelector = new RequisitionLineItem(product).selector;
        waitForVisible(requisitionLineItemSelector, true);
    }

    /**
     * Checks whether given field is not editable.
     */
    checkIfFieldIsNotEditable(column, product) {
        const id = this.getColumnId(column);
        return browser.elements(`//td[normalize-space(text())='${product}']/parent::tr/td[position()='${id + 1}' and not (div/input)]`);
    }

    /**
     * Checks if table data cell contains 'is-invalid' class.
     */
    isTableDataInvalid(column, product) {
        const id = this.getColumnId(column);
        const selector = this.getTableData(product, id);
        browser.pause(1000);
        const className =  browser.element(selector).getAttribute('class');
        const isInvalid = className.includes('is-invalid') ? true : false;
        return isInvalid;
    }

    /**
     * Checks if element contains 'is-disabled' class.
     */
    isDropdownDisabled(label) {
        const selector = `//label[contains(text()[normalize-space()], "${label}")]` +
            '/following-sibling::div';
        const className =  browser.element(selector).getAttribute('class');
        const isDisabled = className.includes('is-disabled') ? true : false;
        return isDisabled;
    }

    /**
     * Check whether skipping products is disabled.
     */
    isSkippingProductsNotPossible() {
        const disabledCheckboxSelector = '//td//label[contains(@class, "checkbox")]//input[@disabled = "disabled"]';
        const isDisabled = browser.element(disabledCheckboxSelector).isExisting();
        return isDisabled;
    }

    /**
     * Submits the requisition.
     */
    clickSubmitButton() {
        this.submitButton.click();
    }

    /**
     * Authorizes the requisition.
     */
    clickAuthorizeButton() {
        this.authorizeButton.click();
    }

    /**
     * Opens text area to add comment.
     */
    clickAddCommentButton() {
        this.addCommentButton.click();
    }

    /**
     * Opens modal to add new product.
     */
    clickAddProductButton() {
        this.addProductButton.click();
    }

    /**
     * Skips the requisition
     */
    clickSkipButton() {
        this.skipButton.click();
    }

    /**
     * Skips the requisition
     */
    clickDeleteButton() {
        this.deleteButton.click();
    }

    /**
     * Removes the requisition line item
     */
    clickHideLineItemButton() {
        this.hideLineItemButton.click();
    }

    /**
     * Opens requisition history modal
     */
    clickRequisitionHistoryLink() {
        this.historyLink.click();
    }

    /**
     * Get authorize confirmation modal.
     */
    get authorizeConfirmationModal() {
        return new ConfirmationModal({
            header: 'Are you sure you want to authorize this R&R?',
            confirmButtonLabel: 'Authorize',
        });
    }

    /**
     * Get submit confirmation modal.
     */
    get submitConfirmationModal() {
        return new ConfirmationModal({
            header: 'Are you sure you want to submit this R&R?',
            confirmButtonLabel: 'Submit',
        });
    }

    /**
     * Get delete confirmation modal.
     */
    get deleteConfirmationModal() {
        return new ConfirmationModal({
            header: 'Are you sure you want to delete this R&R?',
            confirmButtonLabel: 'Delete',
        });
    }

    get physicalDateSubmitConfirmationModal() {
        return new ConfirmationModal({
            header: 'Submit Requisition',
            confirmButtonLabel: 'Submit',
        });
    }

    get physicalDateAuthorizeConfirmationModal() {
        return new ConfirmationModal({
            header: 'Authorize Requisition',
            confirmButtonLabel: 'Authorize',
        });
    }

    get physicalDateDatePicker() {
        return new DatePicker('Date physical stock count completed');
    }

    confirmPhysicalDateSubmitConfirmationModal() {
        this.physicalDateSubmitConfirmationModal.confirm();
    }

    confirmPhysicalDateAuthorizeConfirmationModal() {
        this.physicalDateAuthorizeConfirmationModal.confirm();
    }

    selectDatePhysicalStockCountCompleted() {
        this.physicalDateDatePicker.selectTodayDate();
    }

    selectDatePhysicalStockCountCompletedInFuture() {
        this.physicalDateDatePicker.setDateInFuture();
    }

    checkDatePhysicalStockCountCompleted() {
        const tomorrow = new Date();
        tomorrow.setDate(new Date().getDate() + 1);

        browser.isVisible(`//strong[contains(text(), "Date physical stock count completed")]/parent[contains(text(), "${
            [tomorrow.getDate(), tomorrow.getMonth() + 1, tomorrow.getFullYear()].join('/')}")]`);
    }

    /**
     * Get approve confirmation modal.
     */
    get approveConfirmationModal() {
        return new ConfirmationModal({
            header: 'Are you sure you want to approve this R&R?',
            confirmButtonLabel: 'Approve',
        });
    }

    /**
     * Get reject confirmation modal.
     */
    get rejectConfirmationModal() {
        return new ConfirmationModal({
            header: 'Are you sure you want to reject this R&R?',
            confirmButtonLabel: 'Reject',
        });
    }

    /**
     * Get skip confirmation modal.
     */
    get skipConfirmationModal() {
        return new ConfirmationModal({
            header: 'Are you sure you want to skip this requisition?',
            confirmButtonLabel: 'Skip',
        });
    }

    /**
     * Get authorize confirmation button.
     */
    confirmSubmit() {
        this.submitConfirmationModal.confirm();
    }

    /**
     * Get submit confirmation button.
     */
    confirmAuthorize() {
        this.authorizeConfirmationModal.confirm();
    }

    /**
     * Get delete confirmation button.
     */
    confirmDelete() {
        this.deleteConfirmationModal.confirm();
    }

    /**
     * Get approve confirmation button.
     */
    confirmApproval() {
        this.approveConfirmationModal.confirm();
    }

    /**
     * Get reject confirmation button.
     */
    confirmReject() {
        this.rejectConfirmationModal.confirm();
    }

    /**
     * Get skip confirmation button.
     */
    confirmSkip() {
        this.skipConfirmationModal.confirm();
    }

    /**
     * Click on 'Proceed' button for the submitted requisition.
     *
     * @param {String} status  Period name.
     */
    proceedToRequisition(status) {
        browser.execute((status) => {
            $('table tr')
                .filter((index, element) => {
                    const that = $(element),
                        statusCell = that.find('td:nth-child(4)').text();

                    return status === statusCell;
                })
                .find('td:nth-child(5) input:nth-child(1)')
                .click();
        }, status);
    }

    get submitButton() {
        return new Button('Submit');
    }


    get authorizeButton() {
        return new Button('Authorize');
    }

    get addCommentButton() {
        return new Button('Add Comment');
    }

    get commentTextArea() {
        return new TextArea('requisition-status-message-textarea');
    }

    get skipButton() {
        return new Button('Skip');
    }

    get deleteButton() {
        return new Button('Delete');
    }

    get hideLineItemButton() {
        return new Button('', `//button[contains(@class, "hide-line-item")]`);
    }

    get addProductButton() {
        return new Button('Add Product');
    }

    get historyLink() {
        return new Link('View History');
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

    getTableData(product, columnNumber) {
        return `//td[normalize-space(text())='${product}']/parent::tr/td[position()='${columnNumber + 1}']`;
    }

    checkCommentsAreNotEditable() {
        return browser.elements(`//article/div[contains(@class, 'content') and not (input)]`);
    }

    checkAutoSavingSpinner() {
        const spinner = `//*[contains(@class, "saving-add-active")]`;
        waitForVisible(spinner, true);
    }

    getColumnId(columnName) {
        return browser
            .execute(name => $(`th:contains('${name}')`).index(), columnName)
            .value;
    }
}

export default new ViewRequisitionPage();
