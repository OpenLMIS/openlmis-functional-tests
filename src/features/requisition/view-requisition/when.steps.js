import { defineSupportCode } from 'cucumber';

import '../../login/when.steps';
import '../../common/when.steps';

import ViewRequisitionPage from '../../../pages/requisition/view.requisition.page';

defineSupportCode(({ When }) => {

    When(
        /^I set "([^"]*)?" as "([^"]*)?" for "([^"]*)?" product$/,
        (column, value, product) => {
            ViewRequisitionPage.setColumnForProduct(column, product, value);
            browser.saveScreenshot("./screenshot11112.png");
        }
    );

    When(
        /^I set "([^"]*)?" as empty for "([^"]*)?" product$/,
        (column, product) => {
            ViewRequisitionPage.clearColumnForProduct(column, product);
            browser.saveScreenshot("./screenshot1113.png");
        }
    );

    When(
        /^I skip remaining products$/,
        () => {
            ViewRequisitionPage.skipAll();
            browser.saveScreenshot("./screenshot17.png");
        }
    );

    When(
        /^I unskip products$/,
        () => {
            ViewRequisitionPage.skipNone();
            browser.saveScreenshot("./screenshot18.png");
        }
    );

    When(
        /^I clear the form$/,
        () => {
            ViewRequisitionPage.clearForm();
            browser.saveScreenshot("./screenshot1111.png");
        }
    );

});
