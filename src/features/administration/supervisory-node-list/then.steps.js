import { defineSupportCode } from 'cucumber';

import SupervisoryNodeListPage from '../../../pages/administration/supervisory.node.list.page';

defineSupportCode(({ Then }) => {

    Then(
        /^I should be brought to the supervisory node list page$/,
        () => SupervisoryNodeListPage.waitForIsVisible()
    );

});
