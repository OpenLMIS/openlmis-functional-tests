import Page from '../../components/page';
import Button from '../../components/button';
import Filter from '../../components/filter';

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

    clickEdit(name) {
        const filter = new Filter();
        filter.open();
        filter.enterValue('Name', name);
        filter.search();

        new Button(
            'Edit',
            `//td[normalize-space(text())="${name}"]/following-sibling::td/button[text()="Edit"]`
        ).click();
    }
}

export default new SupervisoryNodeListPage();
