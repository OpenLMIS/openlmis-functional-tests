/**
 * Wait for the given element to become present within the DOM
 * @param  {String}   selector  Element selector
 * @param  {Boolean}  falseCase When it's true, expects selector does not match any elements
 */
export default (selector, falseCase) => {
    /**
     * Maximum number of milliseconds to wait for
     * @type {Number}
     */
    const ms = 50000;

    $(selector).waitForExist({ timeout: ms, reverse: !!falseCase });
};
