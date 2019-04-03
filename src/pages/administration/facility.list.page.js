import Page from '../../components/page';
import scroll from '../../support/action/scroll';
import Checkbox from '../../components/checkbox';
import waitForVisible from '../../support/action/waitForVisible';

/**
 * Facility List Page object represents the related view in OpenLMIS UI.
 */
class FacilityListPage extends Page {

    constructor() {
        super({
            header: 'Facilities',
            uri: 'administration/facilities',
            navParent: 'Administration',
            navChild: 'Facilities',
        });
    }


       /**
        * Updates the value of the input for the given column and program.
        *
        * @param {String} program the name of the program
        * @param {String} value the value to be set for the specific input
        */
       setProgramCheckbox(value, program) {
           const id = this.getColumnId(program);
           const programCheckbox = browser.element(`//table/tbody/tr[contains(@class, 'ng-scope ng-isolate-scope')][${id + 1}]/td[@class='ng-scope'][1]//input`);

           if (programCheckbox.isSelected() && value === 'uncheck') {
                    programCheckbox.click();
            }

         if (!programCheckbox.isSelected() && value === 'check') {
                               programCheckbox.click();
              }

       }

       getColumnId(columnName) {
        return browser
            .execute(name => $(`tr:contains('${name}')`).index(), columnName)
            .value;
       }
}

export default new FacilityListPage();
