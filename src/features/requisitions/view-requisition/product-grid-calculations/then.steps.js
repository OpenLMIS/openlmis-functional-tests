import { defineSupportCode } from 'cucumber';

import RequisitionTemplateConfigurationPage from '../../../../pages/administration/requisition.template.configuration.page';
import TotalLossesAndAdjustmentsModal from '../../../../pages/requisitions/total-losses-and-adjustments.modal';
import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';

defineSupportCode(({ Then }) => {

    Then(
        /^I should be brought to the "([^"]*)?" template configuration page for "([^"]*)?" program$/,
        (templateName, programName) => RequisitionTemplateConfigurationPage.waitForIsVisible(templateName, programName)
    );

    Then(
        /^I should see the Total losses and adjustments modal$/,
        () => TotalLossesAndAdjustmentsModal.waitForIsVisible()
    );

    Then(
        /^I should see assignment for "([^"]*)?" reason and "([^"]*)?" quantity inside the modal$/,
        (reason, quantity) => TotalLossesAndAdjustmentsModal.waitForAssignment(reason, quantity)
    );

    Then(
        /^I should be able to see the Total value updated to "([^"]*)?"$/,
        value => expect(TotalLossesAndAdjustmentsModal.getTotalValue()).to.equal(value)
    );

    Then(
        /^I should not be able to see "([^"]*)?" option on the dropdown list$/,
        option => expect(TotalLossesAndAdjustmentsModal.isOptionInsideDropdown(option)).to.equal(false)
    );

    Then(
        /^I should be able to see "([^"]*)?" option on the dropdown list$/,
        option => expect(TotalLossesAndAdjustmentsModal.isOptionInsideDropdown(option)).to.equal(true)
    );

    Then(
        /^I should be able to see the invalid value of "([^"]*)?" column for "([^"]*)?" product$/,
        (column, product) => expect(ViewRequisitionPage.isTableDataInvalid(column, product)).to.equal(true)
    );

    Then(
        /^I should be able to see the valid value of "([^"]*)?" column for "([^"]*)?" product$/,
        (column, product) => expect(ViewRequisitionPage.isTableDataInvalid(column, product)).to.equal(false)
    );
});