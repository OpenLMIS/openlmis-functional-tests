Feature: Program Edit

    Background:
        Given I navigate to the login page
        And I have logged with username "administrator" and password "password"
        And I have navigated to the program list page

    Scenario: Administrator should be able to edit program date physical stock count completed
        When I click edit button for "Family Planning" program
        Then I should be brought to the program edit page

        When I select "Enable field for Date Physical Stock Count Completed" checkbox
        And I click on the "Save" button
        And I confirm saving program
        Then I should be brought to the program list page

        When I click edit button for "Family Planning" program
        Then I should be brought to the program edit page
        And checkbox with label "Enable field for Date Physical Stock Count Completed" should be checked

        When I select "Enable field for Date Physical Stock Count Completed" checkbox
        And I click on the "Save" button
        And I confirm saving program
        Then I should be brought to the program list page

        When I click edit button for "Family Planning" program
        Then I should be brought to the program edit page
        And checkbox with label "Enable field for Date Physical Stock Count Completed" should be unchecked
