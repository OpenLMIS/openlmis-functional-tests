var {When} = require('cucumber');

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';

When(
    /^I set "([^"]*)?" as "([^"]*)?" for "([^"]*)?" product$/,
    (column, value, product) => ViewRequisitionPage.setColumnForProduct(column, product, value)
);

When(
    /^I set "([^"]*)?" as empty for "([^"]*)?" product$/,
    (column, product) => ViewRequisitionPage.clearColumnForProduct(column, product)
);

When(
    /^I skip remaining products$/,
    () => ViewRequisitionPage.skipAll()
);

When(
    /^I unskip all products$/,
    () => ViewRequisitionPage.skipNone()
);

When(
    /^I clear the form$/,
    () => ViewRequisitionPage.clearForm()
);
