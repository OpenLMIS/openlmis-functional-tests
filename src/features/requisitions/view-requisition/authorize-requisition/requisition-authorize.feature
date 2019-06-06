Feature: Authorizing Requisitions

  Scenario: Store Manager should not be able to authorize the requisition with one required column omitted
    Given I have logged with username "smanager1" and password "password"
    And I have navigated to a requisition for "Lilongwe Health Center" facility, "ARV" program and "Mar2017" period

    When I set "Total received quantity" as empty for "ARV0001" product
    Then I should see the auto-saving spinner

    When I click on the "Authorize" button
    And I confirm the authorize
    Then I should get an error message

    When I click on the "Close" button
    Then I can set "Total received quantity" as "20" for "ARV0001" product

  Scenario: Store manager should not be able to authorize the requisition with Requested quantity explanation column omitted
    When I set "Requested quantity explanation" as empty for "ARV0001" product
    And I set "Requested quantity" as "10" for "ARV0001" product
    And I click on the "Authorize" button
    And I confirm the authorize
    Then I should get an error message

  Scenario: Store Manager should be able to authorize a requisition
    When I click on the "Close" button
    And I set "Requested quantity explanation" as "test" for "ARV0001" product
    And I click on the "Authorize" button
    And I confirm the authorize
    Then I should see a successful notification saying "Requisition has been authorized!"
    And I should be brought to the view requisition screen

    When I select requisition for program "ARV" and period "Mar2017"
    Then I should be brought to the product grid screen
    And I should not see "Authorize" button
