var {When} = require('cucumber');

import SupervisoryNodeListPage from '../../../pages/administration/supervisory.node.list.page';

When(
    /^I go to the supervisory node list page$/,
    () => SupervisoryNodeListPage.navigateToPage()
);

When(
    /^I navigate to supervisory node list page$/,
    () => SupervisoryNodeListPage.navigateToPage()
);

When(
    /^I select "([^"]*)?" supervisory node for edition$/,
    code => SupervisoryNodeListPage.clickEdit(code)
);
