Feature: Facility Supported Program

     Scenario: Administrator should remove supported program from Store Manager
        Given I have logged with username "administrator" and password "password"

        When I go to the facility list page
        Then I should be brought to the facility list page

        When I click on the "Filter" button without waiting for loading modal
        And I enter "Comfort Health Clinic" as "Facility name"
        And I click on the "Search" button
        Then I should be brought to the facility list page

        When I click on the "Edit" button
        And I click on the "Associated Programs" tab
        And I uncheck Essential Med checkbox
        And I click on the "Save Programs" button
        Then I should be brought to the facility list page
        And I log out

     Scenario: Store manager should not be able to select Essential Meds Program on requisition initiation since it is not supported program on his/her facility
        Given I have logged with username "srmanager2" and password "password"

        When I go to initiate requisition screen
        Then I should be brought to the initiate requisition screen
        When I select "My Facility" checkbox
        Then I should not see Essential Meds Program on the Program list
        And I log out

     Scenario: Administrator should add supported program from Store Manager
        Given I have logged with username "administrator" and password "password"

        When I go to the facility list page
        Then I should be brought to the facility list page

        When I click on the "Filter" button without waiting for loading modal
        And I enter "Comfort Health Clinic" as "Facility name"
        And I click on the "Search" button
        Then I should be brought to the facility list page

        When I click on the "Edit" button
        And I click on the "Associated Programs" tab
        And I check Essential Med checkbox
        And I click on the "Save Programs" button
        Then I should be brought to the facility list page
        And I log out

     Scenario: Store manager should be able to select Essential Meds Program on requisition initiation since it is supported program on his/her facility
        Given I have logged with username "srmanager2" and password "password"

        When I go to initiate requisition screen
        Then I should be brought to the initiate requisition screen
        When I select "My Facility" checkbox
        And  I select "Essential Meds" from the "Program" list
        Then I log out
