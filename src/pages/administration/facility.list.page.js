import Page from '../../components/page';
import scroll from '../../support/action/scroll';

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


    uncheckEssentialMedProgram (){
         scroll('bottom');
         browser.element("//table/tbody/tr[@class='ng-scope ng-isolate-scope'][1]/td[@class='ng-scope'][1]/label[@class='checkbox']").click();
     }


    checkEssentialMedProgram (){
         scroll('bottom');
         browser.element("//table/tbody/tr[@class='ng-scope ng-isolate-scope'][2]/td[@class='ng-scope'][1]/label[@class='checkbox']").click();
     }

    noEssentialMedProgram (){
         var programRemoved = browser.element("//option[normalize-space(text())='Essential Meds']").isExisting();
         return !programRemoved;
     }

}

export default new FacilityListPage();
