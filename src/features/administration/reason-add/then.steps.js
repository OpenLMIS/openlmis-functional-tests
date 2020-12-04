var {Then} = require('cucumber');

import ReasonAddModal from '../../../pages/administration/reason.add.modal';

Then(
    /^I should be brought to the reason creation page$/,
    () => ReasonAddModal.waitForIsVisible()
);

Then(
    /^I should see assignment for "([^"]*)?" program and "([^"]*)?" facility type$/,
    (program, facilityType) => ReasonAddModal.waitForAssignment(program, facilityType)
);
