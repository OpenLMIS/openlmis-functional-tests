import Page from '../../components/page';

/**
 * Supervisory Node Edit Page object represents the related view in OpenLMIS UI.
 */
class SupervisoryNodeEditPage extends Page {

    constructor() {
        super({
            header: 'Edit Supervisory Node',
        });
    }
}

export default new SupervisoryNodeEditPage();
