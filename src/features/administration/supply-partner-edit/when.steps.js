import { defineSupportCode } from 'cucumber';

import SupplyPartnerEditPage from '../../../pages/administration/supply.partner.edit.page';
import AddAssociationModal from '../../../pages/administration/add.association.modal';

defineSupportCode(({ When }) => {

    When(
        /^I add "([^"]*)?" facility to the association$/,
        name => AddAssociationModal.addFacility(name)
    );

    When(
        /^I add "([^"]*)?" product to the association$/,
        code => AddAssociationModal.addProduct(code)
    );

    When(
        /^I remove "([^"]*)?" product from the association$/,
        code => AddAssociationModal.removeProduct(code)
    );

    When(
        /^I add the association$/,
        () => AddAssociationModal.confirmAddAssociation()
    );

    When(
        /^I confirm the association update$/,
        () => AddAssociationModal.confirmUpdateAssociation()
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
