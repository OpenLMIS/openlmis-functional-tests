import Page from '../../components/page';
import Button from '../../components/button';

/**
 * Supervisory Node List Page object represents the related view in OpenLMIS UI.
 */
class SupervisoryNodeListPage extends Page {

    constructor() {
        super({
            header: 'Supervisory Nodes',
            uri: 'administration/supervisoryNodes',
            navParent: 'Administration',
            navChild: 'Supervisory Nodes',
        });
    }

    clickEdit(code) {
        new Button(
            'Edit',
            `//td[normalize-space(text())="${code}"]/following-sibling::td/button[text()="Edit"]`
        ).click();
    }
}

export default new SupervisoryNodeListPage();
