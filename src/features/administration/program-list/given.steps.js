import { defineSupportCode } from 'cucumber';

import ProgramListPage from '../../../pages/administration/program.list.page';

defineSupportCode(({ Given }) => {

    Given(
        /^I have navigated to the program list page$/,
        () => {
            ProgramListPage.open();
            ProgramListPage.waitForIsVisible();
        }
    );
});
