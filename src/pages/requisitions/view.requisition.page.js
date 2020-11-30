import Page from '../../components/page';
import waitForDisplayed from '../../support/action/waitForDisplayed';
import waitForExist from '../../support/action/waitForExist';
import getButtonSelector from '../../support/lib/getButtonSelector';
import loadingModal from '../../components/loading-modal';
import ConfirmationModal from '../../components/confirmation-modal';
import Button from '../../components/button';
import TextArea from '../../components/text-area';
import DatePicker from '../../components/date-picker';
import RequisitionLineItem from '../../components/requisition-line-item';
import Link from '../../components/link';
import scroll from '../../support/action/scroll';
import tableHorizontalScroll from '../../support/action/tableHorizontalScroll';
import scrollToSelector from '../../support/action/scrollToSelector';
import isDisplayed from '../../support/check/isDisplayed';

/**
 * Product Grid Page object represents the related view in OpenLMIS UI.
 */
class ViewRequisitionPage extends Page {

    /**
     * Wait for this page to be visible.
     */
    waitForIsVisible() {
        waitForDisplayed('//h2[contains(normalize-space(text()), "Report and Requisition for")]');
    }

    /**
     * Clears all enabled inputs in the requisition as well as total loses and adjustments.
     */
    clearForm() {
        browser.$$('tr a:enabled').forEach((element) => {
            this.scrollToCell(element);
            element.click();

            browser.$$(getButtonSelector('Remove')).forEach(button => button.click());
            browser.$(getButtonSelector('Update')).click();
            loadingModal.waitForHide();
        });

        browser.$$('td input[type="text"]:enabled').forEach((element) => {
            this.scrollToCell(element);
            element.clearValue();
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
        const td = browser.$(selector);

        scrollToSelector(selector);
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
        browser.$('//a[normalize-space(text())=\'All\']').click();
    }

    /**
     * Unskips all line items.
     */
    skipNone() {
        browser.$('//a[normalize-space(text())=\'None\']').click();
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

        scrollToSelector(selector);
        return browser.$(selector).getValue();
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

        return browser.$(selector).getText();
    }

    /**
     * Gets the difference of two table data values for the given columns and product.
     *
     * @param {string} column1 the name of the first column
     * @param {string} column2 the name of the second column
     * @param {string} product the name of the product
     *
     * @return {string} the value of the difference
     */
    getDifferenceBetweenTwoValues(column1, column2, product) {
        const value1 = this.getColumnTableDataForProduct(column1, product);
        const value2 = this.getColumnTableDataForProduct(column2, product);
        const result = value1 - value2;

        return result.toString();
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
        const td = browser.$(selector);

        scrollToSelector(selector);
        td.clearValue();
    }

    /**
     * Checks whether the field in already submitted requisition is editable.
     */
    checkIfIsEditable() {
        const numberOfEditableInputs = 0;
        browser.$$('td input[type="text"]:enabled').forEach((element) => {
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
        waitForDisplayed(buttonSelector, true);
    }

    /**
     * Check if line item is not visible
     *
     * @param {String} product the code of the product
     */
    checkIfLineItemIsHidden(product) {
        const requisitionLineItemSelector = new RequisitionLineItem(product).selector;
        waitForDisplayed(requisitionLineItemSelector, true);
    }

    /**
     * Checks whether given field is not editable.
     */
    checkIfFieldIsNotEditable(column, product) {
        const id = this.getColumnId(column);
        return browser.$$(`//td[normalize-space(text())='${product}']/parent::tr/td[position()='${id + 1}' and not (div/input)]`);
    }

    /**
     * Checks if table data cell contains 'is-invalid' class.
     */
    isTableDataInvalid(column, product) {
        const id = this.getColumnId(column);
        const selector = this.getTableData(product, id);
        browser.pause(1000);
        const className =  browser.$(selector).getAttribute('class');
        const isInvalid = className.includes('is-invalid') ? true : false;
        return isInvalid;
    }

    /**
     * Checks if element contains 'is-disabled' class.
     */
    isDropdownDisabled(label) {
        const selector = `//label[contains(text()[normalize-space()], "${label}")]` +
            '/following-sibling::div';
        const className =  browser.$(selector).getAttribute('class');
        const isDisabled = className.includes('is-disabled') ? true : false;
        return isDisabled;
    }

    /**
     * Check whether skipping products is disabled.
     */
    isSkippingProductsNotPossible() {
        const disabledCheckboxSelector = '//td//label[contains(@class, "checkbox")]//input[@disabled = "disabled"]';
        const isDisabled = browser.$(disabledCheckboxSelector).isExisting();
        return isDisabled;
    }

    /**
     * Click on 'Proceed' button for the requisition with given status.
     *
     * @param {String} status  Status name.
     */
    proceedToRequisition(status) {
        const selector = `//td[normalize-space(text()) = "${status}"]` +
            '//following-sibling::td' + getButtonSelector('Proceed');
        browser.$(selector).click();
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
     * Approves the requisition.
     */
    clickApproveButton() {
        this.approveButton.click();
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
     * Delete the requisition
     */
    clickDeleteButton() {
        this.deleteButton.click();
    }

    /**
     * Reject the requisition
     */
    clickRejectButton() {
        this.rejectButton.click();
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
        const today = new Date();

        isDisplayed(`//strong[contains(text(), "Date physical stock count completed")]/parent::li[text()[contains(., "${
            [today.getDate(), today.getMonth() + 1, today.getFullYear()].join('/')}")]]`);
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

    get proceedButton() {
        return new Button('Proceed');
    }

    get submitButton() {
        return new Button('Submit');
    }

    get authorizeButton() {
        return new Button('Authorize');
    }

    get approveButton() {
        return new Button('Approve');
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

    get rejectButton() {
        return new Button('Reject');
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

    scrollToTop() {
        scroll('top');
    }

    scrollToTheRightOfTable() {
        tableHorizontalScroll('right');
    }

    getInputSelector(product, columnNumber) {
        return `//td[normalize-space(text())='${product}']/parent::tr/td[position()='${columnNumber + 1}']/div/input`;
    }

    getTableData(product, columnNumber) {
        return `//td[normalize-space(text())='${product}']/parent::tr/td[position()='${columnNumber + 1}']`;
    }

    checkCommentsAreNotEditable() {
        return browser.$$(`//article/div[contains(@class, 'content') and not (input)]`);
    }

    checkAutoSavingSpinner() {
        const spinner = `//*[contains(@class, "saving-add-active")]`;
        waitForExist(spinner, true);
    }

    checkIfButtonIsVisible(button) {
        const buttonSelector = `//button[contains(text(), "${button}")]`;
        waitForDisplayed(buttonSelector, false);
    }

    checkIfButtonIsEnabledOrNot(button) {
        const buttonSelector = `//button[normalize-space(text()) = "${button}"]`;
        return browser.$(buttonSelector).isEnabled();
    }

    getColumnId(columnName) {
        return browser
            .execute(name => $(`th:contains('${name}')`).index(), columnName);
    }
}

export default new ViewRequisitionPage();
