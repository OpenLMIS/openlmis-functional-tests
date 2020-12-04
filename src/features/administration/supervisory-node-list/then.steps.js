var {Then} = require('cucumber');

import SupervisoryNodeListPage from '../../../pages/administration/supervisory.node.list.page';

Then(
    /^I should be brought to the supervisory node list page$/,
    () => SupervisoryNodeListPage.waitForIsVisible()
);
