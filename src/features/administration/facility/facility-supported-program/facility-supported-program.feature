Feature: Facility supported programs

     Scenario: Administrator should remove the supported program from the Storeroom Manager's facility
        Given I navigate to the login page
        And I have logged with username "administrator" and password "password"

        When I go to the facility list page
        Then I should be brought to the facility list page

        When I click on the "Filter" button without waiting for loading modal
        And I enter "Comfort Health Clinic" as "Facility name"
        And I click on the "Search" button
        Then I should be brought to the facility list page

        When I click on the "Edit" button
        And I click on the "Associated Programs" tab
        And I "uncheck" program "Essential Meds" checkbox
        And I click on the "Save Programs" button
        Then I should be brought to the facility list page
        And I log out


     Scenario: Storeroom Manager should not be able to select the Essential Meds program on the requisition initiate screen since it's not supported in his facility
        Given I have logged with username "srmanager2" and password "password"

        When I go to initiate requisition screen
        Then I should be brought to the initiate requisition screen
        When I refresh page
        And I select "My Facility" checkbox
        Then I should not be able to see "Essential Meds" option on the dropdown list
        And I log out

     Scenario: Administrator should be able to add a supported program to the Storeroom Manager's facility
        Given I have logged with username "administrator" and password "password"

        When I go to the facility list page
        Then I should be brought to the facility list page

        When I click on the "Filter" button without waiting for loading modal
        And I enter "Comfort Health Clinic" as "Facility name"
        And I click on the "Search" button
        Then I should be brought to the facility list page

        When I click on the "Edit" button
        And I click on the "Associated Programs" tab
        And I "check" program "Essential Meds" checkbox
        And I click on the "Save Programs" button
        Then I should be brought to the facility list page
        And I log out

     Scenario: Storeroom Manager should be able to select the Essential Meds program on the requisition initiate screen since it is supported in his facility
        Given I have logged with username "srmanager2" and password "password"

        When I go to initiate requisition screen
        Then I should be brought to the initiate requisition screen
        When I refresh page
        And  I select "Essential Meds" from the "Program" list
        Then I log out

