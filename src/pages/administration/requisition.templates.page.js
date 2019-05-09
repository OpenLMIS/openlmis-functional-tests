import Page from '../../components/page';
import waitForVisible from '../../support/action/waitForVisible';
import Button from '../../components/button';
import Action from '../../components/action';
import getSelectDropdownSelectorInTable from '../../support/lib/getSelectDropdownSelectorInTable';



class RequisitionTemplatesPage extends Page {
    constructor() {
        super({
            header: 'Requisition Templates',
            uri: 'administration/templates',
            navParent: 'Administration',
            navChild: 'Requisition Templates',
        });
    }

    /**
     * Wait for program to be visible in the table.
     */
    waitForProgram(name) {
        waitForVisible(`//td[text()="${name}"]`);
    }

    /**
     * Click configure button for given program.
     */
    clickConfigureProgram(name) {
        const selector = `//td[normalize-space(text())="${name}"]/following-sibling::td/button[text()="Configure"]`;
        browser.scroll(selector);
        new Button(
            'Configure',
            selector).click();
    }

    /**
     * Click tab for given program.
     */
    openTemplateSettingsTab() {
        browser.execute(() => $('ul a:contains("Template Settings")').click());
    }

    /**
     * Check if the given facility type is present in the dropdown.
     */
    isFacilityTypePresentInDropdown(facilityTypeName) {
        return browser.element(`//li[normalize-space(text())='${facilityTypeName}']`).isVisible();
    }    

    /**
     * Check if the option is visible for the row marked with the letter 
     */
    isOptionVisible(letter, option) {
        const selector = this.getSelectOptionForTagSelector(letter, option);
        this.scrollToTags(); 
        return browser.element(selector).isVisible();
    }

    /**
     * Check if the option is selected for the row marked with the letter.
     */
    isOptionSelected(letter, option) {
        const selector = this.getSelectOptionForTagSelector(letter, option);
        this.scrollToTags(); 
        waitForVisible(selector);
        return browser.element(selector).isVisible();
    }    

    /**
     * Check if any tag option is present in the dropdown.
     */
    isTagOptionPresent() {
        return browser.element('//table//select[@id="tag"]').isVisible();
    }

    /**
     * Select the option for the row marked with the letter.
     */
    selectOptionForTag(letter, option) {
        const selector = this.getSelectOptionForTagSelector(letter, option);
        this.scrollToTags(); 
        browser.element(selector).click();
    }   

    /**
     * Clear tag selection by the tag index.  
     */
    clearTagSelection(tagIndex) {
        new Action(() => {
            waitForVisible(this.getTagClearSelector(tagIndex));
            browser
                .element(this.getTagClearSelector(tagIndex))
                .click();
        }).execute();
    }

    /**
     * Scroll to tags section. Opionally, to the tag by index.
     */
    scrollToTags(tagIndex) {
        let selector = '[ng-model="column.tag"]';
        if (!!tagIndex) {
            selector += `:eq(${tagIndex})`;
        }
        browser.execute((selector) => $(selector).parent().focus(), selector);
        browser.execute(() => window.scrollBy(0, 100));      
    }

    /**
     * Check if the expected number of tags is present.
     */
    isAllTagsPresent(tagCount) {
        this.scrollToTags();
        const tags = browser.elements('//table//select[@id="tag"]').value;
        return tags.length === tagCount;
    }

    /**
     * Check if the expected number of empty tag messages is present.
     */
    isAllEmptyTagMessagesPresent(msgCount) {
        this.scrollToTags();
        const messages = browser.elements(this.getEmptyTagMessageSelector()).value;
        return messages.length === msgCount;
    }

    /**
     * Clear all tag selections.
     */
    clearAllTagSelections() {
        const tags = browser.elements('//table//select[@id="tag"]').value;
        new Action(() => {
            for (let tag in tags) {
                this.scrollToTags(tag);
                this.clearTagSelection(0);
            }
        }, false).execute();
    }    

    /**
     * Get tag 'select' element selector by tag index.
     */
    getTagSelectSelector(tagIndex) {
        return `(//table//select[@id="tag"])[${tagIndex + 1}]//following-sibling::span//span[contains(@class, "select2-selection")]`;
    }

    /**
     * Get tag 'clear' element selector by tag index.
     */
    getTagClearSelector(tagIndex) {
        return `//table//select[@id="tag"][${tagIndex + 1}]/following-sibling::span//*[contains(@class, "select2-selection__clear")]`;
    }

    /**
     * Get empty message selector.
     */
    getEmptyTagMessageSelector() {
        return '//table//select[@id="tag"]//ancestor::td/div[contains(text(), "Column tag cannot be empty")]';
    }

    /**
     * Get selector of the select option for a tag in the row marked with the letter.
     */
    getSelectOptionForTagSelector(letter, option) {
        return getSelectDropdownSelectorInTable([undefined, undefined, letter], "Additional Options") + 
            `//parent::select//option[text()="${option}"]`;
    }
}

export default new RequisitionTemplatesPage();
