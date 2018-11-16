import { defineSupportCode } from 'cucumber';

import '../../login/given.steps';

import ReasonListPage from '../../../pages/administration/reason.list.page';

defineSupportCode(({ Given }) => {

    Given(
        /^I have navigated to the reason list page$/,
        () => {
            ReasonListPage.open();
            ReasonListPage.waitForIsVisible();
        }
    );

});
