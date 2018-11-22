import { defineSupportCode } from 'cucumber';

import SupplyPartnerAddModal from '../../../pages/administration/supply.partner.add.modal';
import SupplyPartnerViewPage from '../../../pages/administration/supply.partner.view.page';

defineSupportCode(({ Then }) => {

    Then(
        /^I should be brought to the supply partner creation page$/,
        () => SupplyPartnerAddModal.waitForIsVisible()
    );

    Then(
        /^I should be brought to the supply partner view page$/,
        () => SupplyPartnerViewPage.waitForIsVisible()
    );

});
