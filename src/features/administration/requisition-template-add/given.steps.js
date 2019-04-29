import { defineSupportCode } from 'cucumber';
import RequisitionTemplatesPage from '../../../pages/administration/requisition.templates.page';
import RequisitionTemplateConfigurationSettingsPage from '../../../pages/administration/requisition.template.configuration.settings.page';
import Button from '../../../components/button';


defineSupportCode(({ Given }) => {
    Given(
        /^I have removed "([^"]*)?" facility type from "([^"]*)?" template$/,
        (facility, template) => {
            RequisitionTemplatesPage.open();
            RequisitionTemplatesPage.waitForIsVisible();
            RequisitionTemplatesPage.clickConfigureProgram(template);
            RequisitionTemplatesPage.openTemplateSettingsTab();
            RequisitionTemplateConfigurationSettingsPage.removeFacilityType(facility);
            new Button('Save').click();
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
            new Button('Save').click();
            RequisitionTemplateConfigurationSettingsPage.confirmSave();
        }
    );
});
