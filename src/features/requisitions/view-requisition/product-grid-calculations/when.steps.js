import { defineSupportCode } from 'cucumber';

import RequisitionTemplatesPage from '../../../../pages/administration/requisition.templates.page';
import RequisitionTemplateConfigurationPage from '../../../../pages/administration/requisition.template.configuration.page';
import TotalLossesAndAdjustmentsModal from '../../../../pages/requisitions/total-losses-and-adjustments.modal';

defineSupportCode(({ When }) => {

    When(
        /^I select "([^"]*)?" program for configuration$/,
        name => RequisitionTemplatesPage.clickConfigureProgram(name)
    );

    When(
        /^I set Source in row "([^"]*)?" to be "([^"]*)?"$/,
        (letter, option) => RequisitionTemplateConfigurationPage.selectInputType(letter, option)
    );

    When(
        /^I confirm the Save$/,
        () => RequisitionTemplateConfigurationPage.confirmSave()
    );

    When(
        /^I click on the Total losses and adjustments icon for "([^"]*)?" product$/,
        product => TotalLossesAndAdjustmentsModal.clickIcon(product)
    );

    When(
        /^I open the "([^"]*)?" dropdown list in a modal$/,
        label => TotalLossesAndAdjustmentsModal.openSelectDropdown(label)
    );

});
