var {Then} = require('cucumber');

import RequisitionTemplateAddModal from '../../../pages/administration/requisition.templates.add.modal';
import RequisitionTemplatesPage from '../../../pages/administration/requisition.templates.page';

Then(
    /^I should be brought to the requisition template add modal$/,
    () => RequisitionTemplateAddModal.waitForIsVisible()
);

Then(
    /^I should be brought to the requisition templates page$/,
    () => {
        RequisitionTemplatesPage.navigateToPage();
        RequisitionTemplatesPage.waitForIsVisible();
    }
);

Then(
    /^I should be able to select facility type$/,
    () => expect(RequisitionTemplateAddModal.isDropdownEnabled('Facility Type')).to.equal(true)
);

Then(
    /^I should be able to see error messages saying that name and the program are required$/,
    () => {
        expect(RequisitionTemplateAddModal.isFieldInvalid('Program')).to.equal(true);
        expect(RequisitionTemplateAddModal.isFieldInvalid('Name')).to.equal(true);
    }
);

Then(
    /^I should not be able to see error message for the "([^"]*)?" field$/,
    (fieldName) => expect(RequisitionTemplateAddModal.isFieldInvalid(fieldName)).to.equal(false)
);

Then(
    /^I should be able to see "([^"]*)?" facility type in the table$/,
    (facilityType) => expect(RequisitionTemplateAddModal.isFacilityTypePresent(facilityType)).to.equal(true)
);