import { defineSupportCode } from 'cucumber';
import RequisitionTemplatesPage from '../../../pages/administration/requisition.templates.page';
import RequisitionTemplateConfigurationSettingsPage from '../../../pages/administration/requisition.template.configuration.settings.page';


defineSupportCode(({ When }) => {
    When(
        /^I navigate to template settings tab$/,
        () => RequisitionTemplatesPage.openTemplateSettingsTab() // openNonFullSupplyProduct()
    );

    When(
        /^I click on the remove button for "([^"]*)?" facility type in the template settings table$/,
        name => RequisitionTemplateConfigurationSettingsPage.removeFacilityType(name)
    );

    When(
        /^I save the template configuration$/,
        () => RequisitionTemplateConfigurationSettingsPage.save()
    );

    When(
        /^I confirm saving the template configuration$/,
        () => RequisitionTemplateConfigurationSettingsPage.confirmSave()
    );
    When(
        /^I select "([^"]*)?" facility type from the dropdown on the template configuration page$/,
        facilityType => RequisitionTemplateConfigurationSettingsPage.addFacilityType(facilityType)
    );

    When(
        /^I clear all tag selections$/,
        () => RequisitionTemplatesPage.clearAllTagSelections()
    );

    When(
        /^I set tag in row "([^"]*)?" to be "([^"]*)?"$/,
        (letter, option) => RequisitionTemplatesPage.selectOptionForTag(letter, option)
    );
});
