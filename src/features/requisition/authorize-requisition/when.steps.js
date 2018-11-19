import { defineSupportCode } from 'cucumber';

import '../../login/when.steps';
import '../../common/when.steps';

import ConfirmationModal from '../../../pages/requisition/confirmation.modal';

defineSupportCode(({ When }) => {

    When(
        /^I confirm the authorize/,
        () => {
            ConfirmationModal.confirmAuthorize();
        }
    );
});
