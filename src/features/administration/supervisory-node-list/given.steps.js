import { defineSupportCode } from 'cucumber';

import SupervisoryNodeListPage from '../../../pages/administration/supervisory.node.list.page';

defineSupportCode(({ Given }) => {

    Given(
        /^I have navigated to the supervisory node list page$/,
        () => {
            SupervisoryNodeListPage.open();
            SupervisoryNodeListPage.waitForIsVisible();
        }
    );

});
