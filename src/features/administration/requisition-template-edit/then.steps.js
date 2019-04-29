import { defineSupportCode } from 'cucumber';
import RequisitionTemplateConfigurationSettingsPage from '../../../pages/administration/requisition.template.configuration.settings.page';
import RequisitionTemplatesPage from '../../../pages/administration/requisition.templates.page';

defineSupportCode(({ Then }) => {

    Then(
        /^I should be brought to the template settings page$/,
        () => RequisitionTemplateConfigurationSettingsPage.waitForIsVisible()
    );

    Then(
        /^I should not be able to see "([^"]*)?" facility type in the template settings table$/,
        facilityType => expect(RequisitionTemplateConfigurationSettingsPage.isFacilityTypePresent(facilityType)).to.equal(false)
    );

    Then(
        /^I should be able to see "([^"]*)?" facility type in the template settings table$/,
        facilityType => expect(RequisitionTemplateConfigurationSettingsPage.isFacilityTypePresent(facilityType)).to.equal(true)
    );

    Then(
        /^I should not be able to see "([^"]*)?" facility type in the template settings dropdown$/,
        facilityType => expect(RequisitionTemplateConfigurationSettingsPage.isFacilityTypePresentInDropdown(facilityType)).to.equal(false)
    );

    Then(
        /^I should be brought to the requisition template page$/,
        () => RequisitionTemplatesPage.waitForIsVisible()
    );

    Then(
        /^I should not be able to see tag option in the table$/,
        () => expect(RequisitionTemplatesPage.isTagOptionPresent()).to.equal(false)
    );

    Then(
        /^I should be able to see all "([^"]*)?" tags in the table$/,
        tagCount => expect(RequisitionTemplatesPage.isAllTagsPresent(parseInt(tagCount))).to.equal(true)
    );

    Then(
        /^I should see option "([^"]*)?" in rows "([^"]*)?"$/,
        (option, rows) => {
            rows.split(',').forEach(row => expect(RequisitionTemplatesPage.isOptionVisible(row, option)).to.equal(true));            
        }
    );

    Then(
        /^I should not see option "([^"]*)?" in rows "([^"]*)?"$/,
        (option, rows) => {
            rows.split(',').forEach(row => expect(RequisitionTemplatesPage.isOptionVisible(row, option)).to.equal(false));
        }
    );

    Then(
        /^I should see all "([^"]*)?" empty tag error messages$/,
        msgCount => expect(RequisitionTemplatesPage.isAllEmptyTagMessagesPresent(parseInt(msgCount))).to.equal(true)
    );

    Then(
        /^I should see tag "([^"]*)?" in row "([^"]*)?"$/,
        (option, row) => expect(RequisitionTemplatesPage.isOptionSelected(row, option)).to.equal(true)
    );
});
