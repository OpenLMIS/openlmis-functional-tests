Feature: User List

    Scenario: Administrator should be able to view users
        Given I have logged with username "administrator" and password "password"
        When I go to the user list page
        Then I should be brought to the user list page

    Scenario: Administrator should be able to nagivate to view users
        When I navigate to user list page
        Then I should be brought to the user list page

    Scenario: Administrator should be able to sort list by username
        When I go to the "1" page
        And I sort list by "Username"
        Then I should see sorted user list by "Username"

        When I go to the "2" page
        Then I should see sorted user list by "Username"

        When I go to the "3" page
        Then I should see sorted user list by "Username"

        When I go to the "4" page
        Then I should see sorted user list by "Username"

        When I go to the "5" page
        Then I should see sorted user list by "Username"

    Scenario: Administrator should be able to sort list by first name
        When I go to the "1" page
        And I sort list by "First name"
        Then I should see sorted user list by "First name"

        When I go to the "2" page
        Then I should see sorted user list by "First name"

        When I go to the "3" page
        Then I should see sorted user list by "First name"

        When I go to the "4" page
        Then I should see sorted user list by "First name"

        When I go to the "5" page
        Then I should see sorted user list by "First name"

    Scenario: Administrator should be able to sort list by last name
        When I go to the "1" page
        And I sort list by "Last name"
        Then I should see sorted user list by "Last name"

        When I go to the "2" page
        Then I should see sorted user list by "Last name"

        When I go to the "3" page
        Then I should see sorted user list by "Last name"

        When I go to the "4" page
        Then I should see sorted user list by "Last name"

        When I go to the "5" page
        Then I should see sorted user list by "Last name"
