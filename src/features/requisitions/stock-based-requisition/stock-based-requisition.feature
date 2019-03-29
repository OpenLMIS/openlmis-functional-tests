Feature: Stock based requisition: calculating Stock on Hand

    Scenario: User should be able to submit new Physical Inventory
        Given I have logged with username "divo2" and password "password"

        When I navigate to Physical Inventory page
        And I start a new Physical Inventory for "EPI" program
        Then I should be brought to the Physical Inventory grid screen

        When I click on the "Add Product" button
        And I select "Safety Box" from the "Product" list
        And I click on the "Add" button
        And I select "IPV" from the "Product" list
        And I click on the "Add" button
        And I select "PCV10" from the "Product" list
        And I click on the "Add" button
        And I set "Current Stock" as "150" for "safetybox" product code inside a modal
        And I set "Current Stock" as "150" for "ipv5" product code inside a modal
        And I set "Current Stock" as "150" for "pcv10" product code inside a modal
        And I click on the "Add 3 items to Physical Inventory" button
        Then I should see a product with "safetybox" code and "Safety Box - each" product name inside the table
        And I should see a product with "ipv5" code and "IPV - 5 dose,injection" product name inside the table
        And I should see a product with "pcv10" code and "PCV10 - 2 dose,injection" product name inside the table

        When I click on the "Submit" button
        Then I should see Choose Occurred date modal
        When I set "01/12/2016" date on physical inventory datepicker
        And I confirm Submit Physical Inventory modal
        Then I should see print modal
        When I skip printing the physical inventory
        Then I should see a successful notification saying "Physical inventory has successfully been submitted"

        When I navigate to Physical Inventory page
        And I start a new Physical Inventory for "EPI" program
        Then I should be brought to the Physical Inventory grid screen 

        When I set "Current Stock" as "150" for "Safety Box - each" product
        And I set "Current Stock" as "150" for "IPV - 5 dose,injection" product
        And I set "Current Stock" as "150" for "PCV10 - 2 dose,injection" product
        And I click on the "Submit" button
        And I set "01/04/2017" date on physical inventory datepicker
        And I confirm Submit Physical Inventory modal
        Then I should see print modal
        When I skip printing the physical inventory
        Then I should see a successful notification saying "Physical inventory has successfully been submitted"

    Scenario: User should see proper values in "Stock on Hand" column during initiating a requisition
        When I initiate a requisition for "EPI" program
        Then I should be able to see the value of "Stock on hand" column for "IPV" product equal to "150"
        And I should be able to see the value of "Stock on hand" column for "PCV10" product equal to "150"
        And I should be able to see the value of "Stock on hand" column for "Safety Box" product equal to "150"
        And I delete the requisition

    Scenario: User should see the same values in "Stock on Hand" and "Current stock" columns after adding a physical inventory with the date earlier than the beginning of the requisition's processing period
        When I navigate to Physical Inventory page
        And I start a new Physical Inventory for "EPI" program
        Then I should be brought to the Physical Inventory grid screen 

        When I set "Current Stock" as "180" for "Safety Box - each" product
        And I set "Current Stock" as "180" for "IPV - 5 dose,injection" product
        And I set "Current Stock" as "180" for "PCV10 - 2 dose,injection" product
        And I click on the "Submit" button
        And I set "31/12/2016" date on physical inventory datepicker
        And I confirm Submit Physical Inventory modal
        Then I should see print modal
        When I skip printing the physical inventory
        Then I should see a successful notification saying "Physical inventory has successfully been submitted"

        When I initiate a requisition for "EPI" program
        Then I should be able to see the value of "Stock on hand" column for "IPV" product equal to "180"
        And I should be able to see the value of "Stock on hand" column for "PCV10" product equal to "180"
        And I should be able to see the value of "Stock on hand" column for "Safety Box" product equal to "180"
        And I delete the requisition

    Scenario: User should see the same values in "Stock on Hand" column as values in "Current stock" from the physical inventory submitted with the date of 31/12/2016
        When I navigate to Physical Inventory page
        And I start a new Physical Inventory for "EPI" program
        Then I should be brought to the Physical Inventory grid screen 

        When I set "Current Stock" as "150" for "Safety Box - each" product
        And I set "Current Stock" as "150" for "IPV - 5 dose,injection" product
        And I set "Current Stock" as "150" for "PCV10 - 2 dose,injection" product
        And I click on the "Submit" button
        And I set "01/04/2017" date on physical inventory datepicker
        And I confirm Submit Physical Inventory modal
        Then I should see print modal
        When I skip printing the physical inventory
        Then I should see a successful notification saying "Physical inventory has successfully been submitted"

        When I initiate a requisition for "EPI" program
        Then I should be able to see the value of "Stock on hand" column for "IPV" product equal to "180"
        And I should be able to see the value of "Stock on hand" column for "PCV10" product equal to "180"
        And I should be able to see the value of "Stock on hand" column for "Safety Box" product equal to "180"
    
    Scenario: User should see the same value in "Beginning balance" column as in "Current stock" from the physical inventory submitted with the date of 31/12/2016
        When I proceed to requisition for "Depósito Distrital Lichinga" facility, "EPI" program, "2017Q1" period and "INITIATED" status
        Then I should not be able to edit "Beginning balance" column for "Safety Box" product
        And I should not be able to edit "Beginning balance" column for "IPV" product
        And I should not be able to edit "Beginning balance" column for "PCV10" product
        And I should be able to see the value of "Beginning balance" column for "IPV" product equal to "180"
        And I should be able to see the value of "Beginning balance" column for "PCV10" product equal to "180"
        And I should be able to see the value of "Beginning balance" column for "Safety Box" product equal to "180"

        When I click on the "Submit & Authorize" button
        And I confirm the submit
        Then I should see a successful notification saying "Requisition has been submitted!"

    Scenario: User should see correct value for "Beginning balance" column and should not be able to edit this value after authorization
        When I proceed to requisition for "Depósito Distrital Lichinga" facility, "EPI" program, "2017Q1" period and "AUTHORIZED" status
        Then I should not be able to edit "Beginning balance" column for "Safety Box" product
        And I should not be able to edit "Beginning balance" column for "IPV" product
        And I should not be able to edit "Beginning balance" column for "PCV10" product
        And I should be able to see the value of "Beginning balance" column for "IPV" product equal to "180"
        And I should be able to see the value of "Beginning balance" column for "PCV10" product equal to "180"
        And I should be able to see the value of "Beginning balance" column for "Safety Box" product equal to "180"