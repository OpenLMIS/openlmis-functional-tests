import Page from '../../components/page';
import waitForVisible from '../../support/action/waitForVisible';
import Button from '../../components/button';
import Action from '../../components/action';
import Select from '../../components/select';
import getSelectDropdownSelectorInTable from '../../support/lib/getSelectDropdownSelectorInTable';
import scrollToSelector from '../../support/action/scrollToSelector';
import chooseSelectOptionInTable from '../../support/action/chooseSelectOptionInTable';



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

    isFacilityTypePresentInDropdown(facilityTypeName) {
        return browser.element(`//li[normalize-space(text())='${facilityTypeName}']`).isVisible();
    }

    isTagOptionPresent() {
        return browser.element('//table//select[@id="tag"]').isVisible();
    }

    selectOptionForTag(letter, option) {
        const selector = getSelectDropdownSelectorInTable([undefined, undefined, letter], "Additional Options") + 
            `//parent::select//option[text()="${option}"]`;
        //waitForVisible(selector);
        this.scrollToTags(); 
        browser.element(selector).click();
    }

    isOptionVisible(letter, option) {
        const selector = getSelectDropdownSelectorInTable([undefined, undefined, letter], "Additional Options") + 
            `//parent::select//option[text()="${option}"]`;
        //waitForVisible(selector);    
        this.scrollToTags(); 
        return browser.element(selector).isVisible();
    }

    scrollToTags(tag) {
        let selector = '[ng-model="column.tag"]';
        if (!!tag) {
            selector += `:eq(${tag})`;
        }
        browser.execute((selector) => $(selector).parent().focus(), selector);        
    }

    isOptionSelected(letter, option) {
        const selector = getSelectDropdownSelectorInTable([undefined, undefined, letter], "Additional Options") + 
            `//span[normalize-space(text())="${option}"]`;
        this.scrollToTags(); 
        waitForVisible(selector);
        return browser.element(selector).isVisible();
    }

    clearTagSelection(tagIndex) {
        new Action(() => {
            waitForVisible(`//table//select[@id="tag"][${tagIndex + 1}]/following-sibling::span//*[contains(@class, "select2-selection__clear")]`);
            browser
                .element(`//table//select[@id="tag"][${tagIndex + 1}]/following-sibling::span//*[contains(@class, "select2-selection__clear")]`)
                .click();
        }).execute();
    }

    isAllTagsPresent(tagCount) {
        this.scrollToTags();
        const tags = browser.elements('//table//select[@id="tag"]').value;
        // for (_ in tags) {
        //     this.clearTagSelection(0);
        // }

        // const letter = 'C';
        // const option = 'debit';
        // this.selectOptionForTag(letter, option);

        // waitForVisible('//td[text()="gffgf"]');
        return tags.length === tagCount;
    }

    isAllEmptyTagMessagesPresent(msgCount) {
        this.scrollToTags();
        const messages = browser.elements('//table//select[@id="tag"]//ancestor::td/div[contains(text(), "Column tag cannot be empty")]').value;
        console.log(msgCount);
        console.log(messages.length);
        console.log(messages.length === msgCount);
        return messages.length === msgCount;
    }

    clearAllTagSelections() {
        const tags = browser.elements('//table//select[@id="tag"]').value;
        for (let tag in tags) {
            this.scrollToTags(tag);
            this.clearTagSelection(0);
        }
    }

    

    getTagSelectSelector(index) {
        return `(//table//select[@id="tag"])[${index + 1}]//following-sibling::span//span[contains(@class, "select2-selection")]`;
    }
}

export default new RequisitionTemplatesPage();
