import { defineSupportCode } from 'cucumber';

import SupervisoryNodeListPage from '../../../pages/administration/supervisory.node.list.page';

defineSupportCode(({ When }) => {

    When(
        /^I go to the supervisory node list page$/,
        () => SupervisoryNodeListPage.open()
    );

    When(
        /^I navigate to supervisory node list page$/,
        () => SupervisoryNodeListPage.navigateToPage()
    );

});
