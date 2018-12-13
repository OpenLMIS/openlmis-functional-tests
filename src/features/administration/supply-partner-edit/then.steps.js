import { defineSupportCode } from 'cucumber';

import SupplyPartnerEditPage from '../../../pages/administration/supply.partner.edit.page';
import ViewItemsModal from '../../../pages/administration/view.items.modal';

defineSupportCode(({ Then }) => {

    Then(
        /^I should see "([^"]*)?" facility on the list$/,
        (name) => {
            ViewItemsModal.searchInputValue = name;
            ViewItemsModal.waitForRow(name);
        }
    );

    Then(
        /^I should see "([^"]*)?" product on the list$/,
        (name) => {
            ViewItemsModal.searchInputValue = name;
            ViewItemsModal.waitForRow(name);
        }
    );

    Then(
        /^I should see association with "([^"]*)?" program and "([^"]*)?" supervisory node$/,
        (program, supervisoryNode) => SupplyPartnerEditPage.waitForAssociation(program, supervisoryNode, false)
    );

    Then(
        /^I should not see association with "([^"]*)?" program and "([^"]*)?" supervisory node$/,
        (program, supervisoryNode) => SupplyPartnerEditPage.waitForAssociation(program, supervisoryNode, true)
    );

});
