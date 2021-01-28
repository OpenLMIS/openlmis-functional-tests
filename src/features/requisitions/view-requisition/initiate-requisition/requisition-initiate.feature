Feature: Initiate Requisition

  Scenario: Storeroom Manager should be able to initiate requisition for home facility
    Given I navigate to the login page
    And I have logged with username "srmanager2" and password "password"

    When I go to initiate requisition screen
    Then I should be brought to the initiate requisition screen

    When I select "Family Planning" from the "Program" list
    And I wait "90" seconds for UI adjustment

    When I click on the "Search" button
    Then I should see periods table

    When I click on the "Proceed" button
    Then I should be redirected to requisition view screen
