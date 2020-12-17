Feature: Supply Partner List

    Scenario: Administrator should be able to view supply partners
        Given I navigate to the login page
        And I have logged with username "administrator" and password "password"
        When I go to the supply partner list page
        Then I should be brought to the supply partner list page

    Scenario: Administrator should be able to nagivate to view supply partners
        When I navigate to the supply partner list page
        Then I should be brought to the supply partner list page
