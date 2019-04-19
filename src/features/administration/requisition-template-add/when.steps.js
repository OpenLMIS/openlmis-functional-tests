import { defineSupportCode } from 'cucumber';

import RequisitionTemplateAddModal from '../../../pages/administration/requisition.templates.add.modal';

defineSupportCode(({ When }) => {

    When(
        /^I click on the remove button for "([^"]*)?" facility type in the table$/,
        (name) => RequisitionTemplateAddModal.removeFacilityType(name)
    );

    When(
        /^I confirm adding new template$/,
        () => RequisitionTemplateAddModal.confirm()
    );

    When(
        /^I select "([^"]*)?" facility type from the dropdown$/,
        (facilityType) => RequisitionTemplateAddModal.addFacilityType(facilityType)
    );

});
