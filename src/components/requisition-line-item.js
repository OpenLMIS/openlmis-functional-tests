/**
 * Represents a requisition line item.
 */
export default class RequisitionLineItem {
    /**
     * Constructs and object of the RequisitionLineItem class.
     *
     * @param {string} selector the selector for the line item
     * @param {string} product the product code
     */
    constructor(product, selector = `//tr/td[normalize-space(text())='${product}']`) {
        this.selector = selector;
    }
}