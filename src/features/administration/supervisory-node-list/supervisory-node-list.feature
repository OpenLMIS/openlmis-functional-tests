Feature: Supervisory Node List

    Scenario: Administrator should be able to view supervisory nodes
        Given I have logged with username "administrator" and password "password"
        When I go to the supervisory node list page
        Then I should be brought to the supervisory node list page

    Scenario: Administrator should be able to nagivate to view supervisory nodes
        When I navigate to supervisory node list page
        Then I should be brought to the supervisory node list page
