Feature: Requisition template edition

  Scenario: Administrator should be able to edit facility types in a requisiton template
    Given I navigate to the login page
    And I have logged with username "administrator" and password "password"
    And I have navigated to the requisition templates page

    When I select "Essential Meds" program for configuration
    Then I should be brought to the "Essential Meds" template configuration page for "Essential Meds" program

    When I navigate to template settings tab
    Then I should be brought to the template settings page

    When I scroll to bottom
    And I click on the remove button for "Provincial Store" facility type in the template settings table
    And I click on the "Save" button
    And I confirm saving the template configuration
    Then I should be brought to the requisition template page

    When I select "Essential Meds" program for configuration
    Then I should be brought to the "Essential Meds" template configuration page for "Essential Meds" program

    When I navigate to template settings tab
    Then I should be brought to the template settings page
    And I should not be able to see "Provincial Store" facility type in the template settings table

    When I select "Provincial Store" facility type from the dropdown on the template configuration page
    And I click on the "Save" button
    And I confirm saving the template configuration
    Then I should be brought to the requisition template page

    When I select "Essential Meds" program for configuration
    Then I should be brought to the "Essential Meds" template configuration page for "Essential Meds" program

    When I navigate to template settings tab
    Then I should be brought to the template settings page
    And I should be able to see "Provincial Store" facility type in the template settings table
    And I should not be able to see "Provincial Store" facility type in the template settings dropdown

  Scenario: Administrator shouldn't see tag options to select for Family Planning
    Given I have navigated to the requisition templates page

    When I select "Family Planning" program for configuration
    Then I should be brought to the "Family Planning" template configuration page for "Family Planning" program
    And I should not be able to see tag option in the table

  Scenario: Administrator shouldn't see tag options to select for Essential Meds
    Given I have navigated to the requisition templates page

    When I select "Essential Meds" program for configuration
    Then I should be brought to the "Essential Meds" template configuration page for "Essential Meds" program
    And I should not be able to see tag option in the table

  Scenario: Administrator should see tag options to select for Vaccine Stock-Based R&R Template
    Given I have navigated to the requisition templates page

    When I select "Vaccine Stock-Based R&R Template" program for configuration
    Then I should be brought to the "Vaccine Stock-Based R&R Template" template configuration page for "EPI" program
    And I should be able to see all "3" tags in the table

    When I clear all tag selections
    Then I should see option "adjustment" in rows "B,C,D"
    And I should see option "consumed" in rows "B,C,D"
    And I should see option "credit" in rows "B,C,D"
    And I should see option "debit" in rows "B,C,D"
    And I should see option "transfer" in rows "B,C,D"
    And I should see option "received" in rows "B,C,D"

  Scenario: Administrator should see tag options to select for EPI
    Given I have navigated to the requisition templates page

    When I select "EPI" program for configuration
    Then I should be brought to the "EPI" template configuration page for "EPI" program
    And I should be able to see all "3" tags in the table

    When I clear all tag selections
    Then I should see option "adjustment" in rows "B,C,D"
    And I should see option "consumed" in rows "B,C,D"
    And I should see option "credit" in rows "B,C,D"
    And I should see option "debit" in rows "B,C,D"
    And I should see option "transfer" in rows "B,C,D"
    And I should see option "received" in rows "B,C,D"

  Scenario: Administrator should not be allowed to set the same tag options twice
    Given I have navigated to the requisition templates page

    When I select "EPI" program for configuration
    Then I should be brought to the "EPI" template configuration page for "EPI" program

    When I clear all tag selections
    And I set tag in row "B" to be "adjustment"
    Then I should not see option "adjustment" in rows "C,D"

  Scenario: Administrator should see "Column tag cannot be empty" error messages if no tag is selected
    Given I have navigated to the requisition templates page

    When I select "EPI" program for configuration
    Then I should be brought to the "EPI" template configuration page for "EPI" program

    When I clear all tag selections
    Then I should see all "3" empty tag error messages

  Scenario: Administrator should not be allowed to save requisition template with empty tag fields
    Given I have navigated to the requisition templates page

    When I select "EPI" program for configuration
    Then I should be brought to the "EPI" template configuration page for "EPI" program

    When I clear all tag selections
    And I click on the "Save" button
    Then I should see an error notification saying "Requisition Template is invalid"
    And I log out

  Scenario: Administrator should be allowed to save requisition template with tag change
    Given I have logged with username "administrator" and password "password"
    And I have navigated to the requisition templates page

    When I select "EPI" program for configuration
    Then I should be brought to the "EPI" template configuration page for "EPI" program

    When I set tag in row "B" to be "credit"
    And I set tag in row "C" to be "debit"
    And I set tag in row "D" to be "transfer"
    And I click on the "Save" button
    And I confirm saving the template configuration
    Then I should be brought to the requisition template page
    And I should see a successful notification saying "Template saved successfully!"

    When I select "EPI" program for configuration
    Then I should be brought to the "EPI" template configuration page for "EPI" program
    And I should see tag "credit" in row "B"
    And I should see tag "debit" in row "C"
    And I should see tag "transfer" in row "D"

    When I set tag in row "B" to be "received"
    And I set tag in row "C" to be "consumed"
    And I set tag in row "D" to be "adjustment"
    And I click on the "Save" button
    And I confirm saving the template configuration
    Then I should be brought to the requisition template page
    And I should see a successful notification saying "Template saved successfully!"
    And I log out

  Scenario: Administrator should not be allowed to select facility types which are already selected in the related template
    Given I have logged with username "administrator" and password "password"
    And I have navigated to the requisition templates page

    When I select "Vaccine Stock-Based R&R Template" program for configuration
    Then I should be brought to the "Vaccine Stock-Based R&R Template" template configuration page for "EPI" program

    When I navigate to template settings tab
    Then I should be brought to the template settings page
    And I should not be able to see "Provincial Store" facility type in the template settings dropdown
    And I should not be able to see "District Store" facility type in the template settings dropdown

  Scenario: Administrator should not be allowed to select facility types which are already selected in the related template
    Given I have navigated to the requisition templates page

    When I select "Vaccine Stock-Based R&R Template" program for configuration
    Then I should be brought to the "Vaccine Stock-Based R&R Template" template configuration page for "EPI" program

    When I navigate to template settings tab
    Then I should be brought to the template settings page
    And I should not be able to see "Provincial Store" facility type in the template settings dropdown
    And I should not be able to see "District Store" facility type in the template settings dropdown

  Scenario: Administrator should be allowed to modify requisition template
    Given I have navigated to the requisition templates page

    When I select "Vaccine Stock-Based R&R Template" program for configuration
    Then I should be brought to the "Vaccine Stock-Based R&R Template" template configuration page for "EPI" program

    When I navigate to template settings tab
    Then I should be brought to the template settings page

    When I select "Warehouse" facility type from the dropdown on the template configuration page
    And I select "FHIR's facility type" facility type from the dropdown on the template configuration page
    And I select "District Hospital" facility type from the dropdown on the template configuration page
    And I enter "testTemplateName" as "Template Name"
    And I click on the "Save" button
    And I confirm saving the template configuration
    Then I should be brought to the requisition template page

    When I select "testTemplateName" program for configuration
    Then I should be brought to the "testTemplateName" template configuration page for "EPI" program

    When I navigate to template settings tab
    Then I should be brought to the template settings page

    When I scroll to bottom
    And I click on the remove button for "Warehouse" facility type in the template settings table
    And I click on the remove button for "FHIR's facility type" facility type in the template settings table
    And I click on the remove button for "District Hospital" facility type in the template settings table
    And I enter "Vaccine Stock-Based R&R Template" as "Template Name"
    And I click on the "Save" button
    And I confirm saving the template configuration
    Then I should be brought to the requisition template page
