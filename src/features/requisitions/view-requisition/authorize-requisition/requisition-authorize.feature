Feature: Authorizing Requisitions

  Scenario: Store Manager should be able to authorize requisition for home facility
    Given I have logged with username "smanager1" and password "password"
    And I have navigated to a requisition for "Lilongwe Health Center" facility, "ARV" program, "Mar2017" period and "SUBMITTED" status

    When I set "Total stockout days" as "15" for "Abacavir 300mg Tables" product
    And I click on the "Authorize" button
    And I confirm the authorize
    Then I should see a successful notification saying "Requisition has been authorized!"
    And I should be brought to the view requisition screen

    When I select requisition for program "ARV" and period "Mar2017"
    Then I should be brought to the product grid screen
    And I should not see "Authorize" button