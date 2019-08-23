Feature: Supply Partner Edit

    Scenario: Administrator should not be able to change supply partner code
        Given I have logged with username "administrator" and password "password"
        And I have navigated to the supply partner list page
        And I created supply partner with code "FTSPE", name "FTSPE", and without associations

        When I select "FTSPE" supply partner for edition
        Then I should be brought to the supply partner edit page
        And The "Code" input should be disabled

    Scenario: Administrator should not be able to save supply partner without a name
        When I enter an empty value as "Name"
        And I click on the "Update Supply Partner" button
        Then I should get an error message
        And I click on the "Close" button

#      Scenario: Administrator should not be able to add association if other supply partner supplies the given product
#          When I click on the "Add Association" button
#          And I select "ARV" from the "Program" list
#          And I wait "0.5" seconds for UI adjustment
#          # The following two steps are temporary
#          # because there is only one option to
#          # select and by default the option is selected
#          And I select nothing from the "Supervisory Node" list
#          And I wait "0.5" seconds for UI adjustment
#          And I select "CHAZ Lilongwe sub point" from the "Supervisory Node" list
#          And I wait "0.5" seconds for UI adjustment
#          And I add "Lilongwe Health Center" facility to the association
#          And I add "ARV0004" product to the association
#          And I add "ARV0005" product to the association
#          And I add "ARV0006" product to the association
#          And I add "ARV0007" product to the association
#          And I add the association
#          And I enter "Functional Test Supply Partner Edit" as "Name"
#          And I click on the "Update Supply Partner" button
#          Then I should get an error message
#          And I click on the "Close" button

    Scenario: Administrator should be able to add a valid association
        When I select association with "ARV" program and "CHAZ Lilongwe sub point" supervisory node for edition
        And I remove "ARV0004" product from the association
        And I remove "ARV0006" product from the association
        And I confirm the association update
        And I click on the "Update Supply Partner" button
        Then I should be brought to the supply partner list page

        When I select "FTSPE" supply partner for edition
        Then I should be brought to the supply partner edit page
        And I should see association with "ARV" program and "CHAZ Lilongwe sub point" supervisory node

        When I view facilities for the association with "ARV" program and "CHAZ Lilongwe sub point" supervisory node
        Then I should see "Lilongwe Health Center" facility on the list
        And I click on the "Close" button

        When I view products for the association with "ARV" program and "CHAZ Lilongwe sub point" supervisory node
        Then I should see "ARV0005" product on the list
        Then I should see "ARV0007" product on the list
        And I click on the "Close" button

    Scenario: Administrator should be able to remove an association
        When I remove the association with "ARV" program and "CHAZ Lilongwe sub point" supervisory node
        And I click on the "Remove Association" button
        And I click on the "Update Supply Partner" button
        Then I should be brought to the supply partner list page

        When I select "FTSPE" supply partner for edition
        Then I should be brought to the supply partner edit page
        And I should not see association with "ARV" program and "CHAZ Lilongwe sub point" supervisory node
