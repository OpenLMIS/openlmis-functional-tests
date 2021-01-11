var {When} = require('cucumber');

import ReasonListPage from '../../../pages/administration/reason.list.page';

When(
    /^I go to the reason list page$/,
    () => ReasonListPage.navigateToPage()
);
