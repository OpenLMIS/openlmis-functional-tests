Feature: Approving and rejecting Requisitions

  Scenario: Storeroom manager should not be able to navigate to Approve Requisitions screen
    Given I have logged with username "srmanager4" and password "password"
    When I click on the "Requisitions" tab
    Then I should not see "Approve" tab under "Requisitions"

  Scenario: Storeroom manager should not be able to edit/approve/reject an authorized requisition
    Given I have submitted a requisition for "Family Planning" program
    And I have logged out
    And I have logged with username "smanager4" and password "password"
    And I have authorized a requisition for "Kankao Health Facility" facility, "Family Planning" program and "2017Q4" period
    And I have logged out
    And I have logged with username "srmanager4" and password "password"
    
    When I proceed to requisition for "Kankao Health Facility" facility, "Family Planning" program and "2017Q4" period
    Then I should not be able to edit the requisition
    And I should not see "Approve" button
    And I should not see "Reject" button 
    And I log out

  Scenario: District Store Manager should be able to approve requisition for home facility
    Given I have logged with username "dsrmanager" and password "password"

    When I navigate to approve requisitions screen
    Then I should be redirected to approve requisitions screen

    When I select requisition for "Family Planning" in the "Program" column and "2017Q4" in the "Period" column
    Then I should be brought to the product grid screen

    When I set "Approved quantity" as "0" for "Levora" product
    Then I should be able to see the Total requisition cost updated to "$0.00"

    When I set "Approved quantity" as "12" for "Levora" product
    Then I should be able to see the Total requisition cost updated to "$5.23"

    When I click on the "Approve" button
    And I confirm the approval
    Then I should see a successful notification saying "Requisition has been approved!"
    And I should be redirected to approve requisitions screen
    And I log out

  Scenario: District Store Manager should be able to reject requisition for home facility
    Given I have logged with username "srmanager4" and password "password"
    And I have submitted a requisition for "Family Planning" program
    And I have logged out
    And I have logged with username "smanager4" and password "password"
    And I have authorized a requisition for "Kankao Health Facility" facility, "Family Planning" program and "2018Q1" period
    And I have logged out
    And I have logged with username "dsrmanager" and password "password"

    When I navigate to approve requisitions screen
    Then I should be redirected to approve requisitions screen

    When I select requisition for "Family Planning" in the "Program" column and "2018Q1" in the "Period" column
    Then I should be brought to the product grid screen

    When I click on the "Reject" button
    And I confirm the reject
    Then I should see a successful notification saying "Requisition has been rejected!"
    And I should be redirected to approve requisitions screen
    And I log out

  Scenario: Storeroom Manager should be able to submit a rejected requisition with new values
    Given I have logged with username "srmanager4" and password "password"
    
    When I proceed to requisition for "Family Planning" program with "REJECTED" status
    And I set "Requested quantity" as "200" for "Levora" product
    Then I should be able to see the Total requisition cost updated to "$10.46"

    When I click on the "Submit" button
    And I confirm the submit
    Then I should see a successful notification saying "Requisition has been submitted!"
    And I log out

  Scenario: Store Manager should be able to see the correct Total requisition cost
    Given I have logged with username "smanager4" and password "password"
    When I proceed to requisition for "Family Planning" program with "SUBMITTED" status
    Then I should be able to see the Total requisition cost updated to "$10.46"