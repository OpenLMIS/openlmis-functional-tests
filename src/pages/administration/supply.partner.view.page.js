import Page from '../../components/page';

/**
 * Supply Partner View Page object represents the related view in OpenLMIS UI.
 */
class SupplyPartnerViewPage extends Page {

    constructor() {
        super({
            header: 'View Supply Partner',
        });
    }
}

export default new SupplyPartnerViewPage();
