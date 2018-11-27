import { defineSupportCode } from 'cucumber';

import SupervisoryNodeEditPage from '../../../pages/administration/supervisory.node.edit.page';

defineSupportCode(({ Then }) => {

    Then(
        /^I should be brought to the supervisory node edit page$/,
        () => SupervisoryNodeEditPage.waitForIsVisible()
    );

    Then(
        /^I should see "([^"]*)?" supervisory node in child nodes$/,
        name => SupervisoryNodeEditPage.waitForChildNode(name, false)
    );

    Then(
        /^I should not see "([^"]*)?" supervisory node in child nodes$/,
        name => SupervisoryNodeEditPage.waitForChildNode(name, true)
    );

    Then(
        /^I should see "([^"]*)?" supervisory node in partner nodes$/,
        name => SupervisoryNodeEditPage.waitForPartnerNode(name, false)
    );

    Then(
        /^I should not see "([^"]*)?" supervisory node in partner nodes$/,
        name => SupervisoryNodeEditPage.waitForPartnerNode(name, true)
    );

});
