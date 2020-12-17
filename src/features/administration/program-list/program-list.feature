Feature: Program List

    Scenario: Administrator should be able to view programs
        Given I navigate to the login page
        And I have logged with username "administrator" and password "password"
        When I go to the program list page
        Then I should be brought to the program list page

    Scenario: Administrator should be able to nagivate to view programs
        When I navigate to the program list page
        Then I should be brought to the program list page
