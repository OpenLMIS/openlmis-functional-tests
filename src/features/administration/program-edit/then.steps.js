var {Then} = require('cucumber');

import ProgramEditPage from '../../../pages/administration/program.edit.page';

Then(
    /^I should be brought to the program edit page$/,
    () => ProgramEditPage.waitForIsVisible()
);
