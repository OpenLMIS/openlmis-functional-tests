import Page from '../../components/page';

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
}

export default new SupervisoryNodeListPage();
