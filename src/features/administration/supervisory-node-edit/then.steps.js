import { defineSupportCode } from 'cucumber';

import SupervisoryNodeEditPage from '../../../pages/administration/supervisory.node.edit.page';

defineSupportCode(({ Then }) => {

    Then(
        /^I should be brought to the supervisory node edit page$/,
        () => SupervisoryNodeEditPage.waitForIsVisible()
    );

});
