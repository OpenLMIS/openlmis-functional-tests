var {When} = require('cucumber');

import SupervisoryNodeEditPage from '../../../pages/administration/supervisory.node.edit.page';

When(
    /^I add "([^"]*)?" supervisory node to child nodes$/,
    name => SupervisoryNodeEditPage.addChildNode(name)
);

When(
    /^I remove "([^"]*)?" supervisory node from child nodes$/,
    name => SupervisoryNodeEditPage.removeChildNode(name)
);

When(
    /^I add "([^"]*)?" supervisory node to partner nodes$/,
    name => SupervisoryNodeEditPage.addPartnerNode(name)
);

When(
    /^I remove "([^"]*)?" supervisory node from partner nodes$/,
    name => SupervisoryNodeEditPage.removePartnerNode(name)
);
