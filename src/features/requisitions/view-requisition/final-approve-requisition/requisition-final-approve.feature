Feature: Final approving and rejecting Requisitions

  Scenario: Program supervisor should be able to approve requisition with In_Approval status
    Given I navigate to the login page
    And I have logged with username "psupervisor" and password "password"

    When I proceed to requisition for "Lilongwe Health Center" facility, "ARV" program, "Apr2017" period and "In approval" status
    And I set "Approved quantity" as empty for "ARV0001" product
    Then I should see the auto-saving spinner

    When I click on the "Approve" button
    And I confirm the approval
    Then I should get an error message

    When I click on the "Close" button
    And I set "Approved quantity" as "30" for "ARV0001" product
    And I set "Remarks" as "ok" for "ARV0001" product
    And I click on the "Approve" button
    And I confirm the approval
    Then I should see a successful notification saying "Requisition has been approved!"

  Scenario: Program supervisor should be able to navigate to the requisition with Approved status
    When I proceed to requisition for "Lilongwe Health Center" facility, "ARV" program, "Apr2017" period and "Approved" status
    Then I should be brought to the product grid screen

  Scenario: Program supervisor should be able to reject requisition for home facility
    When I proceed to requisition for "Lilongwe Health Center" facility, "ARV" program, "May2017" period and "In approval" status
    And I click on the "Reject" button
    And I confirm the reject
    Then I should see a successful notification saying "Requisition has been rejected!"

  Scenario: Program supervisor should be able to navigate to the requisition with Rejected status
    When I proceed to requisition for "Lilongwe Health Center" facility, "ARV" program, "May2017" period and "Rejected" status
    Then I should be brought to the product grid screen
