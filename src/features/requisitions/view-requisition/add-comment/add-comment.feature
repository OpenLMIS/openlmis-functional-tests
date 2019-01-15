Feature: Adding comment to requisition

  Scenario: Storeroom Manager should be able to add a comment to initiated requisition
    Given I have logged with username "srmanager4" and password "password"
    And I have initiated a requisition for "Family Planning" program
    And I have completed all required fields of the requisition

    When I click the Add Comment button
    Then I should see the text area to enter the requisition comment

    When I enter "submit" as a comment
    And I click on the "Submit" button
    And I confirm the submit
    Then I should see a successful notification saying "Requisition has been submitted!"
    And I log out

  Scenario: Store Manager should be able to see comment added when submitting requisition
    Given I have logged with username "smanager4" and password "password"
    
    When I proceed to requisition for "Family Planning" program with "SUBMITTED" status
    Then I should see the "submit" comment for "Submitted" status added today by "Chimango Tebulo"
    And I should not be able to edit saved requisition comment

    When I open requisition history modal
    Then I should see the "submit" comment for "Submitted" status added today by "Chimango Tebulo" in the history
    And I should be able to close the modal

    When I click the Add Comment button
    Then I should see the text area to enter the requisition comment

    When I enter "authorize" as a comment
    And I click on the "Authorize" button
    And I confirm the authorize
    Then I should see a successful notification saying "Requisition has been authorized!"
    And I log out

  Scenario: District Store Manager should be able to see comment added when authorizing requisition
    Given I have logged with username "dsrmanager" and password "password"

    When I navigate to approve requisitions screen
    Then I should be redirected to approve requisitions screen
    And I should see a requisition for "Family Planning" program, "2017Q4" period inside the table

    When I select requisition for "Family Planning" program and "2017Q4" period for approve requisitions
    Then I should be brought to the product grid screen
    And I should see the "authorize" comment for "Authorized" status added today by "Diego Sibale"
    And I should not be able to edit saved requisition comment

    When I open requisition history modal
    Then I should see the "submit" comment for "Submitted" status added today by "Chimango Tebulo" in the history
    And I should see the "authorize" comment for "Authorized" status added today by "Diego Sibale" in the history
    And I should be able to close the modal

    When I click the Add Comment button
    Then I should see the text area to enter the requisition comment

    When I enter "reject" as a comment
    And I click on the "Reject" button
    And I confirm the reject
    Then I should see a successful notification saying "Requisition has been rejected!"
    And I should be redirected to approve requisitions screen
    And I log out

  Scenario: Storeroom Manager should be able to see comment added when rejecting requisition
    Given I have logged with username "srmanager4" and password "password"
    
    When I proceed to requisition for "Family Planning" program with "REJECTED" status
    Then I should see the "reject" comment for "Rejected" status added today by "Blessings Kalagho"
    And I should not be able to edit saved requisition comment

    When I open requisition history modal
    Then I should see the "submit" comment for "Submitted" status added today by "Chimango Tebulo" in the history
    And I should see the "authorize" comment for "Authorized" status added today by "Diego Sibale" in the history
    And I should see the "reject" comment for "Rejected" status added today by "Blessings Kalagho" in the history
    And I should be able to close the modal

    When I click the Add Comment button
    Then I should see the text area to enter the requisition comment

    When I enter "re-submit" as a comment
    And I click on the "Submit" button
    And I confirm the submit
    Then I should see a successful notification saying "Requisition has been submitted!"
    And I log out

  Scenario: Store Manager should be able to see comment added when re-submitting requisition
    Given I have logged with username "smanager4" and password "password"
    
    When I proceed to requisition for "Family Planning" program with "SUBMITTED" status
    Then I should see the "re-submit" comment for "Submitted" status added today by "Chimango Tebulo"
    And I should not be able to edit saved requisition comment

    When I open requisition history modal
    Then I should see the "submit" comment for "Submitted" status added today by "Chimango Tebulo" in the history
    And I should see the "authorize" comment for "Authorized" status added today by "Diego Sibale" in the history
    And I should see the "reject" comment for "Rejected" status added today by "Blessings Kalagho" in the history
    And I should see the "re-submit" comment for "Submitted" status added today by "Chimango Tebulo" in the history
    And I should be able to close the modal

    When I click the Add Comment button
    Then I should see the text area to enter the requisition comment

    When I enter "re-authorize" as a comment
    And I click on the "Authorize" button
    And I confirm the authorize
    Then I should see a successful notification saying "Requisition has been authorized!"
    And I log out    

  Scenario: District Store Manager should be able to see comment added when re-authorizing requisition
    Given I have logged with username "dsrmanager" and password "password"

    When I navigate to approve requisitions screen
    Then I should be redirected to approve requisitions screen
    And I should see a requisition for "Family Planning" program, "2017Q4" period inside the table

    When I select requisition for "Family Planning" program and "2017Q4" period for approve requisitions
    Then I should be brought to the product grid screen
    And I should see the "re-authorize" comment for "Authorized" status added today by "Diego Sibale"
    And I should not be able to edit saved requisition comment

    When I open requisition history modal
    Then I should see the "submit" comment for "Submitted" status added today by "Chimango Tebulo" in the history
    And I should see the "authorize" comment for "Authorized" status added today by "Diego Sibale" in the history
    And I should see the "reject" comment for "Rejected" status added today by "Blessings Kalagho" in the history
    And I should see the "re-submit" comment for "Submitted" status added today by "Chimango Tebulo" in the history
    And I should see the "re-authorize" comment for "Authorized" status added today by "Diego Sibale" in the history
    And I should be able to close the modal

    When I click the Add Comment button
    Then I should see the text area to enter the requisition comment

    When I enter "approve" as a comment
    And I set "Approved quantity" as "7" for "Levora" product
    And I click on the "Approve" button
    And I confirm the approval
    Then I should see a successful notification saying "Requisition has been approved!"
    And I should be redirected to approve requisitions screen
    And I log out

  Scenario: District Store Manager should be able to see comment added when approving requisition
    Given I have logged with username "psupervisor" and password "password"

    When I navigate to approve requisitions screen
    Then I should be redirected to approve requisitions screen
    And I should see a requisition for "Family Planning" program, "2017Q4" period inside the table

    When I select requisition for "Family Planning" program and "2017Q4" period for approve requisitions
    Then I should be brought to the product grid screen
    And I should see the "approve" comment for "In approval" status added today by "Blessings Kalagho"
    And I should not be able to edit saved requisition comment

    When I open requisition history modal
    Then I should see the "submit" comment for "Submitted" status added today by "Chimango Tebulo" in the history
    And I should see the "authorize" comment for "Authorized" status added today by "Diego Sibale" in the history
    And I should see the "reject" comment for "Rejected" status added today by "Blessings Kalagho" in the history
    And I should see the "re-submit" comment for "Submitted" status added today by "Chimango Tebulo" in the history
    And I should see the "re-authorize" comment for "Authorized" status added today by "Diego Sibale" in the history
    And I should see the "approve" comment for "In approval" status added today by "Blessings Kalagho" in the history
    And I should be able to close the modal

    When I click the Add Comment button
    Then I should see the text area to enter the requisition comment

    When I enter "final approve" as a comment
    And I set "Approved quantity" as "7" for "Levora" product
    And I click on the "Approve" button
    And I confirm the approval
    Then I should see a successful notification saying "Requisition has been approved!"
    And I should be redirected to approve requisitions screen
    And I log out