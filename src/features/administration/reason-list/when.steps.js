import { defineSupportCode } from 'cucumber';

import ReasonListPage from '../../../pages/administration/reason.list.page';

defineSupportCode(({ When }) => {

    When(
        /^I go to the reason list page$/,
        () => ReasonListPage.open()
    );

});
