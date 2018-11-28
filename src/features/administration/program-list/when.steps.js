import { defineSupportCode } from 'cucumber';

import ProgramListPage from '../../../pages/administration/program.list.page';

defineSupportCode(({ When }) => {

    When(
        /^I go to the program list page$/,
        () => ProgramListPage.open()
    );

    When(
        /^I navigate to the program list page$/,
        () => ProgramListPage.navigateToPage()
    );
});
