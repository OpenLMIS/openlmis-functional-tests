import { defineSupportCode } from 'cucumber';

import SupplyPartnerEditPage from '../../../pages/administration/supply.partner.edit.page';

defineSupportCode(({ When }) => {

    When(
        /^I add "([^"]*)?" facility to the association$/,
        name => SupplyPartnerEditPage.addFacility(name)
    );

    When(
        /^I add "([^"]*)?" product to the association$/,
        code => SupplyPartnerEditPage.addProduct(code)
    );

    When(
        /^I remove "([^"]*)?" product from the association$/,
        code => SupplyPartnerEditPage.removeProduct(code)
    );

    When(
        /^I add the association$/,
        () => SupplyPartnerEditPage.confirmAddAssociation()
    );

    When(
        /^I confirm the association update$/,
        () => SupplyPartnerEditPage.confirmUpdateAssociation()
    );

    When(
        /^I select association with "([^"]*)?" program and "([^"]*)?" supervisory node for edition$/,
        (program, supervisoryNode) => SupplyPartnerEditPage.editAssociation(program, supervisoryNode)
    );

    When(
        /^I view facilities for the association with "([^"]*)?" program and "([^"]*)?" supervisory node$/,
        (program, supervisoryNode) => SupplyPartnerEditPage.viewFaciliesFor(program, supervisoryNode)
    );

    When(
        /^I view products for the association with "([^"]*)?" program and "([^"]*)?" supervisory node$/,
        (program, supervisoryNode) => SupplyPartnerEditPage.viewProductsFor(program, supervisoryNode)
    );

    When(
        /^I remove the association with "([^"]*)?" program and "([^"]*)?" supervisory node$/,
        (program, supervisoryNode) => SupplyPartnerEditPage.removeAssociation(program, supervisoryNode)
    );

});
