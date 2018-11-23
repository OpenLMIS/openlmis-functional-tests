Feature: Supply Partner Add

    Scenario: Administrator should be able to add new supply partner
        Given I have logged with username "administrator" and password "password"
        Given I have navigated to the supply partner list page

        When I click on the "Add Supply Partner" button
        Then I should be brought to the supply partner creation page

        When I enter "FTSP1" as "Code"
        And I enter "Functional Test Supply Partner #1" as "Name"
        And I add supply partner
        And I don't want to add associations
        Then I should see a supply partner with "FTSP1" code, "Functional Test Supply Partner #1" name inside the table

    Scenario: Administrator should be able to add new supply partner and move to view page
        Given I have navigated to the supply partner list page

        When I click on the "Add Supply Partner" button
        Then I should be brought to the supply partner creation page

        When I enter "FTSP2" as "Code"
        And I enter "Functional Test Supply Partner #2" as "Name"
        And I add supply partner
        And I want to add associations
        Then I should be brought to the supply partner view page

    Scenario: Administrator should not be able to add new supply partner with existing code
        Given I have navigated to the supply partner list page

        When I click on the "Add Supply Partner" button
        Then I should be brought to the supply partner creation page

        When I enter "SP-CHAZ" as "Code"
        And I enter "Functional Test Supply Partner #3" as "Name"
        And I click on the "Add Supply Partner" button in modal
        Then I should get an error message
