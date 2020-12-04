var {Given} = require('cucumber');

import ProgramListPage from '../../../pages/administration/program.list.page';

Given(
    /^I have navigated to the program list page$/,
    () => {
        ProgramListPage.open();
        ProgramListPage.waitForIsVisible();
    }
);
