Feature: User List

    Scenario: Administrator should be able to view users
        Given I have logged with username "administrator" and password "password"
        When I go to the user list page
        Then I should be brought to the user list page

    Scenario: Administrator should be able to nagivate to view users
        When I navigate to user list page
        Then I should be brought to the user list page
