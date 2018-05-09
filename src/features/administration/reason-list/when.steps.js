import { defineSupportCode } from 'cucumber';

import '../../login/when.steps.js';

import ReasonListPage from '../../../pages/administration/reason.list.page';

defineSupportCode(({ When }) => {

    When(
        /^I go to the reason list page$/,
        () => ReasonListPage.open()
    );

});
