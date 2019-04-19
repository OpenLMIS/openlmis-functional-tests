Feature: Requisition template add

  Scenario: Administrator should be able to enter the requisition template add modal
    Given I have logged with username "administrator" and password "password"
    And I have navigated to the requisition templates page

    When I click on the "Add Requisition Template" button
    Then I should be brought to the requisition template add modal

  Scenario: Administrator should get an error when required fields are empty
    When I click on the "Create Template" button
    Then I should get an error message
    And I click on the "Close" button
    And I should be able to see error messages saying that name and the program are required

    When I enter "Test template" as "Name"
    And I select "Family Planning" from the "Program" list
    Then I should be able to select facility type

    When I select "Warehouse" facility type from the dropdown
    Then I should be able to see "Warehouse" facility type in the table
    And I should not be able to see error message for the "Name" field
    And I should not be able to see error message for the "Program" field

  Scenario: Administrator should be able to cancel not-yet-saved requisition template
    When I click on the "Cancel" button
    Then I should be brought to the requisition templates page

    When I click on the "Add Requisition Template" button
    Then I should be brought to the requisition template add modal    

  Scenario: Administrator should get an error when entered template name is not unique
    When I enter "EPI" as "Name"
    And I select "EPI" from the "Program" list
    And I click on the "Create Template" button
    And I confirm adding new template
    Then I should get an error message
    And I click on the "Close" button

  Scenario: Administrator should be able to add new requisition template
    When I enter "Test template" as "Name"
    And I select "Family Planning" from the "Program" list
    Then I should be able to select facility type

    When I select "Warehouse" facility type from the dropdown
    Then I should be able to see "Warehouse" facility type in the table

    When I click on the "Create Template" button
    And I confirm adding new template
    Then I should be brought to the "Test template" template configuration page for "Family Planning" program
