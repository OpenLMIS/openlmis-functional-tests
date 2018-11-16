import Page from '../page';
import waitForVisible from '../../support/action/waitForVisible';

/**
 * Reason List Page object represents the related view in OpenLMIS UI.
 */
class ReasonListPage extends Page {

    constructor() {
        super({
            header: 'Reasons',
            uri: 'administration/reasons',
        });
    }

    /**
     * Wait for the reason to be visible in the table.
     */
    waitForReason(name, category, type) {
        waitForVisible(
            `//td[text()="${name}"]` +
            `/following-sibling::td[text()="${category.toUpperCase()}"]` +
            `/following-sibling::td[text()="${type.toUpperCase()}"]`
        );
    }
}

export default new ReasonListPage();
