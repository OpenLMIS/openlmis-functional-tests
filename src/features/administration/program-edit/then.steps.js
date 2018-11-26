import { defineSupportCode } from 'cucumber';

import ProgramEditPage from '../../../pages/administration/program.edit.page';

defineSupportCode(({ Then }) => {

    Then(
        /^I should be brought to the program edit page$/,
        () => ProgramEditPage.waitForIsVisible()
    );
});
