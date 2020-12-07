import loadingModal from '../components/loading-modal';

/**
 * Represents a single action user can take on the UI. Adds waiting for the loading modal to fade.
 */
export default class Action {
    /**
     * Constructs and object of the Action class.
     *
     * @param {Function} action      the function to be executed.
     * @param {boolean}  waitForHide
     */
    constructor(action, waitForHide = true) {
        this.action = action;
        this.waitForHide = waitForHide;
    }

    /**
     * Executes the actions and waits for the loading modal to close.
     */
    execute() {
        this.action();
        if (this.waitForHide) {
            loadingModal.waitForHide();
        }
    }
}
