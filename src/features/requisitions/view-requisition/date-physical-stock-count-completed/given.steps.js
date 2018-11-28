import { defineSupportCode } from 'cucumber';

import ProgramListPage from '../../../../pages/administration/program.list.page';
import ProgramEditPage from '../../../../pages/administration/program.edit.page';
import clickCheckboxInput from '../../../../support/action/clickCheckboxInput';
import checkCheckboxValue from '../../../../support/check/checkCheckboxValue';
import Button from '../../../../components/button';

defineSupportCode(({ Given }) => {

    Given(
        /^I have enabled Date Physical Stock Count Completed for "([^"]*)?" program$/,
        (program) => {
            ProgramListPage.open();
            ProgramListPage.waitForIsVisible();
            ProgramListPage.clickEditProgram(program);
            ProgramEditPage.waitForIsVisible();
            var enableStockDateLabel = 'Enable field for Date Physical Stock Count Completed';
            if (!checkCheckboxValue(enableStockDateLabel)) {
                clickCheckboxInput(enableStockDateLabel);
            }
            new Button("Save").click();
            ProgramEditPage.confirmSave();
            ProgramListPage.waitForIsVisible();
        }
    );
});
