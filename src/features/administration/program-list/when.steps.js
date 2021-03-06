var {When} = require('cucumber');

import ProgramListPage from '../../../pages/administration/program.list.page';

When(
    /^I go to the program list page$/,
    () => ProgramListPage.navigateToPage()
);

When(
    /^I navigate to the program list page$/,
    () => ProgramListPage.navigateToPage()
);
