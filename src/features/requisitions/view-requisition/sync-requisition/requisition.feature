Feature: View Requisition

  Scenario: Storeroom Manager should be able to sync requisition with the server
    Given I have logged with username "srmanager2" and password "password"
    And I have navigated to the view requisition page for "Comfort Health Clinic" facility, "Family Planning" program and "Jul2017" period

    When I click on the "Sync with Server" button
    Then I should see a successful notification saying "Requisition has been synchronized!"
    
    When I clear the form
    And I set "Total received quantity" as "11" for "Levora" product
    And I set "Beginning balance" as "16" for "Levora" product
    And I skip remaining products
    And I click on the "Sync with Server" button
    Then I should see a successful notification saying "Requisition has been synchronized!"
    And I should be able to see the input value of "Beginning balance" column for "Levora" product equal to "16"
    And I should be able to see the input value of "Total received quantity" column for "Levora" product equal to "11"

    When I refresh page
    Then I should be able to see the input value of "Beginning balance" column for "Levora" product equal to "16"
    And I should be able to see the input value of "Total received quantity" column for "Levora" product equal to "11"
