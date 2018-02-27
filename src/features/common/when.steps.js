import { defineSupportCode } from 'cucumber';

import offlineMode from '../../support/action/offlineMode';

defineSupportCode(({ When }) => {

    When(
        /^I enable offline mode$/,
        () => offlineMode(true)
    );

    When(
        /^I disable offline mode$/,
        () => offlineMode(false)
    );
});
