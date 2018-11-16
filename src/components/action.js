import loadingModal from '../components/loading-modal';

/**
 * Represents a single action user can take on the UI. Adds waiting for the loading modal to fade.
 */
export default class Action {
    /**
     * Constructs and object of the Action class.
     * @param {Function} action  the function to be executed.
     */
    constructor(action) {
        this.action = action;
    }

    /**
     * Executes the actions and waits for the loading modal to close.
     */
    execute() {
        this.action();
        loadingModal.waitForHide();
    }
}
