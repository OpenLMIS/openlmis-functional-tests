import { defineSupportCode } from 'cucumber';

import ProgramListPage from '../../../pages/administration/program.list.page';
import ProgramEditPage from '../../../pages/administration/program.edit.page';

defineSupportCode(({ When }) => {

    When(
        /^I click edit button for "([^"]*)?" program$/,
        (program) => ProgramListPage.clickEditProgram(program)
    );

    When(
        /^I confirm saving program$/,
        () => ProgramEditPage.confirmSave()
    );
});
