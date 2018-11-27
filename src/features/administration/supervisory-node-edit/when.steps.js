import { defineSupportCode } from 'cucumber';

import SupervisoryNodeEditPage from '../../../pages/administration/supervisory.node.edit.page';

defineSupportCode(({ When }) => {

    When(
        /^I add "([^"]*)?" supervisory node to child nodes$/,
        name => SupervisoryNodeEditPage.addChildNode(name)
    );

    When(
        /^I remove "([^"]*)?" supervisory node from child nodes$/,
        name => SupervisoryNodeEditPage.removeChildNode(name)
    );

});
