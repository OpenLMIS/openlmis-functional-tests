import { defineSupportCode } from 'cucumber';

import SupplyPartnerListPage from '../../../pages/administration/supply.partner.list.page';
import SupplyPartnerAddModal from '../../../pages/administration/supply.partner.add.modal';

import Button from '../../../components/button';

import fillInput from '../../../support/action/fillInput';

defineSupportCode(({ Given }) => {

    Given(
        /^I created supply partner with code "([^"]*)?" and name "([^"]*)?"$/,
        (code, name) => {
            SupplyPartnerListPage.open();
            SupplyPartnerListPage.waitForIsVisible();

            new Button('Add Supply Partner').click();
            fillInput('Code', code);
            fillInput('Name', name);

            SupplyPartnerAddModal.confirm();
            SupplyPartnerAddModal.cancelAddAssociations();
        }
    );

});
