var {Then} = require('cucumber');

import ProgramListPage from '../../../pages/administration/program.list.page';

Then(
    /^I should be brought to the program list page$/,
    () => ProgramListPage.waitForIsVisible()
);
