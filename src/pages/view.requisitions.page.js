import Page from './page';
import waitForVisible from '../support/action/waitForVisible';
import checkInURLPath from '../support/check/checkInURLPath';

/**
 * View Requisitions Page object represents the related view in OpenLMIS UI.
 */
class ViewRequisitionsPage extends Page {

  /**
  * Get this search button.
  */
  get search() {
    return browser.element('input[type="submit"][value="Search"]');
  }

  /**
   * Open the view requisitions page.
   */
  open() {
    browser.execute(() => $('.navbar a:contains("Requisition")').parent().find('a:contains("View")').click());
  }

  /**
   * Click to search.
   */
  clickSearch() {
    this.search.click();
  }

  /**
   * Wait for this page to be visible.
   */
  waitForIsVisible() {
    waitForVisible('.navbar');
  }

  /**
   * Is this page visibile?
   */
  isVisible() {
    checkInURLPath(false, '#!/requisitions/view');
  }

  /**
   * Click on 'View requisition' button for the given requisition.
   * 
   * @param {String} program  Program name.
   * @param {String} period  Period name.
   */
  viewRequisition(program, period) {
    browser.execute(function (program, period) {
      $('table tr')
        .filter((index, element) => {
          var that = $(element),
            programCell = that.find('td:nth-child(1)').text(),
            periodCell = that.find('td:nth-child(3)').text();

          return program === programCell && period === periodCell;
        })
        .find('td:nth-child(10) button:nth-child(1)')
        .click();
    }, program, period);
  }

  /**
  * Wait for the table to be visible.
  */
  waitForTable() {
    waitForVisible('table tr td');
  }
}

export default new ViewRequisitionsPage();
