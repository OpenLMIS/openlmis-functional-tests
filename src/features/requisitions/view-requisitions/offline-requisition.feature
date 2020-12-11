Feature: Offline mode requisition

  Scenario: Storeroom Manager should be able to see offline requisition
    Given I have logged with username "srmanager2" and password "password"
    And I have initiated a requisition for "Family Planning" program

    When I go to view requisition screen
    Then I should be brought to the view requisition screen

    When I search for my requisitions in "Comfort Health Clinic" facility
    Then I should see requisition table

    When I select requisition for program "Family Planning" and period "Apr2017"
    Then I should be brought to the product grid screen

#    When I enable offline mode
#    Then the offline indicator should be visible

    When I navigate to view requisition screen
    Then I should be brought to the view requisition screen

    When I search for my requisitions in "Comfort Health Clinic" facility
    Then I should see requisition table

    When I select requisition for program "Family Planning" and period "Apr2017"
    Then I should be brought to the product grid screen

#    When I disable offline mode
#    Then the offline indicator should not be visible
    And I delete the requisition

    When I logout
    Then I should be brought to the login page
