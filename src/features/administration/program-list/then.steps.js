import { defineSupportCode } from 'cucumber';

import ProgramListPage from '../../../pages/administration/program.list.page';

defineSupportCode(({ Then }) => {

    Then(
        /^I should be brought to the program list page$/,
        () => ProgramListPage.waitForIsVisible()
    );
});
