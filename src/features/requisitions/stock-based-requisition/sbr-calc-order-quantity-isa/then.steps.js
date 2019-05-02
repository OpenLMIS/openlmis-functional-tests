import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';

defineSupportCode(({ Then }) => {
    Then(
        /^I should be able to see the input value for "([^"]*)?" column for "([^"]*)?" product equal to "([^"]*)?" column$/,
        (inputColumn, product, column) => {
            ViewRequisitionPage.scrollToTheRightOfTable();
            expect(ViewRequisitionPage.getColumnForProduct(inputColumn, product)).to.equal(
               ViewRequisitionPage.getColumnTableDataForProduct(column, product));
        }
    );

    Then(
        /^I should be able to see the value for "([^"]*)?" equal to a difference between "([^"]*)?" and "([^"]*)?" columns for "([^"]*)?" product$/,
        (column1, column2, column3, product) => {
            expect(ViewRequisitionPage.getColumnTableDataForProduct(column1, product)).to.equal(
                ViewRequisitionPage.getDifferenceBetweenTwoValues(column2, column3, product));
        }
    )
});
