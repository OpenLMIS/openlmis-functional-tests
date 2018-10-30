import Page from '../page';
import waitForVisible from '../../support/action/waitForVisible';

/**
 * Submit Requisition Page object represents the related view in OpenLMIS UI.
 */
class SubmitRequisitionPage extends Page {


    /**
     * Wait for this page to be visible.
     */
    waitForIsVisible() {
        waitForVisible('.navbar');
    }

    /**
     * Open the view requisitions page.
     */
    open() {
        browser.execute(() => $('.navbar a:contains("Requisition")').parent().find('a:contains("Create/Authorize")').click());
    }

    /**
     * Is this page visibile?
     */
    isVisible() {
        checkInURLPath(false, '#!/requisitions/initiate');
    }

    /**
     * Wait for the table to be visible.
     */
    waitForTable() {
        waitForVisible('table tr td');
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
    checkIfButtonIsNotVisible(button) {
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

export default new SubmitRequisitionPage();
