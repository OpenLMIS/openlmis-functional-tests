import getRequisitionStatusMessageSelector from '../support/lib/getRequisitionStatusMessageSelector';

/**
 * Represents a single requisition status message element in the OpenLMIS System.
 */
export default class RequisitionStatusMessage {

    /**
     * Creates an instance of the RequisitionStatusMessage class.
     *
     * @param {string} header the header of the requisition status message
     * @param {string} authorAndDate the author with craeated date
     * @param {string} selector the requisition status message selector
     */     
    constructor(header, authorAndDate, comment, selector = getRequisitionStatusMessageSelector(header, authorAndDate, comment)) {
        this.selector = selector;
    }

}
