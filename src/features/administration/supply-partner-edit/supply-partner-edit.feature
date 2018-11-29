Feature: Supply Partner Edit

    Scenario: Administrator should be able to edit supply partner
        Given I have logged with username "administrator" and password "password"
        And I have navigated to the supply partner list page
        And I created supply partner with code "FTSPE" and name "FTSPE"

        When I select "FTSPE" supply partner for edition
        Then I should be brought to the supply partner edit page
        And The "Code" input should be disabled

        When I enter an empty value as "Name"
        And I click on the "Update Supply Partner" button
        Then I should get an error message
        And I click on the "Close" button
