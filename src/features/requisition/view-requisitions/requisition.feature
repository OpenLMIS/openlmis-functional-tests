Feature: Requisition

  Scenario: Storeroom Manager should be able to see offline requisition
    Given I have logged with username "srmanager2" and password "password"

    When I go to view requisition screen
    Then I should be brought to the view requisition screen

    When I search for my requisitions
    Then I should see requisition table

    When I select requisition for program "Family Planning" and period "Apr2017"
    Then I should be brought to the product grid screen

    When I enable offline mode
    Then the offline mode should be enabled

    When I go to view requisition screen
    Then I should be brought to the view requisition screen

    When I search for my requisitions
    Then I should see requisition table

    When I select requisition for program "Family Planning" and period "Apr2017"
    Then I should be brought to the product grid screen

    When I disable offline mode
    Then the offline mode should be disabled

    When I logout
    Then I should be brought to the login page