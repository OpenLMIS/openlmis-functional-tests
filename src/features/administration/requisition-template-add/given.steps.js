import { defineSupportCode } from 'cucumber';
import RequisitionTemplatesPage from '../../../pages/administration/requisition.templates.page';
import RequisitionTemplateConfigurationSettingsPage from '../../../pages/administration/requisition.template.configuration.settings.page';

defineSupportCode(({ Given }) => {
    Given(
        /^I have removed "([^"]*)?" facility type from "([^"]*)?" template$/,
        (facility, template) => {
            RequisitionTemplatesPage.open();
            RequisitionTemplatesPage.waitForIsVisible();
            RequisitionTemplatesPage.clickConfigureProgram(template);
            RequisitionTemplatesPage.openTemplateSettingsTab();
            RequisitionTemplateConfigurationSettingsPage.removeFacilityType(facility);
            RequisitionTemplateConfigurationSettingsPage.save();
            RequisitionTemplateConfigurationSettingsPage.confirmSave();
        }
    );

    Given(
        /^I have added "([^"]*)?" facility type to "([^"]*)?" template$/,
        (facility, template) => {
            RequisitionTemplatesPage.open();
            RequisitionTemplatesPage.waitForIsVisible();
            RequisitionTemplatesPage.clickConfigureProgram(template);
            RequisitionTemplatesPage.openTemplateSettingsTab();
            RequisitionTemplateConfigurationSettingsPage.addFacilityType(facility);
            RequisitionTemplateConfigurationSettingsPage.save();
            RequisitionTemplateConfigurationSettingsPage.confirmSave();
        }
    );
});
