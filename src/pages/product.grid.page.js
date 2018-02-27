import Page from './page';
import waitForVisible from '../support/action/waitForVisible';
import checkInURLPath from '../support/check/checkInURLPath';

/**
 * Product Grid Page object represents the related view in OpenLMIS UI.
 */
class ProductGridPage extends Page {

  /**
   * Wait for this page to be visible.
   */
  waitForIsVisible() {
    waitForVisible('div.openlmis-table-container');
    waitForVisible('div.openlmis-flex-table');
  }
}

export default new ProductGridPage();
