Feature: Stock-based requisitions: Calc Order Qty ISA with empty Requested quantity column

    Scenario: Vsrmanager should be able to submit and authorize a requisition with empty Requested quantity column
        Given I have logged with username "vsrmanager1" and password "password"

        When I go to initiate requisition screen
        Then I should be brought to the initiate requisition screen

        When I select a "Cuamba, Cuamba" facility
        And I click on the "Search" button
        Then I should see periods table

        When I click on the "Proceed" button
        Then I should be redirected to requisition view screen

        When I click on the "Submit & Authorize" button
        And I confirm the submit
        Then I should see a successful notification saying "Requisition has been submitted!"
        And I log out

    Scenario: Divo should be able to approve the requisition with Approved quantity value equal to Order Qty ISA for every product
        Given I have logged with username "divo1" and password "password"

        When I navigate to approve requisitions screen
        And I select requisition for "EPI" program and "Feb2017" period for approve requisitions
        Then I should be brought to the product grid screen

        And I should be able to see the input value for "Approved quantity" column for "BCG" product equal to "Calc Order Qty ISA" column
        And I should be able to see the value for "Calc Order Qty ISA" equal to a difference between "Ideal Stock Amount" and "Stock on hand" columns for "BCG" product

        And I should be able to see the input value for "Approved quantity" column for "IPV" product equal to "Calc Order Qty ISA" column
        And I should be able to see the value for "Calc Order Qty ISA" equal to a difference between "Ideal Stock Amount" and "Stock on hand" columns for "IPV" product

        And I should be able to see the input value for "Approved quantity" column for "Measles" product equal to "Calc Order Qty ISA" column
        And I should be able to see the value for "Calc Order Qty ISA" equal to a difference between "Ideal Stock Amount" and "Stock on hand" columns for "Measles" product

        And I should be able to see the input value for "Approved quantity" column for "PCV10" product equal to "Calc Order Qty ISA" column
        And I should be able to see the value for "Calc Order Qty ISA" equal to a difference between "Ideal Stock Amount" and "Stock on hand" columns for "PCV10" product

        And I should be able to see the input value for "Approved quantity" column for "Pentavalent (1 dose)" product equal to "Calc Order Qty ISA" column
        And I should be able to see the value for "Calc Order Qty ISA" equal to a difference between "Ideal Stock Amount" and "Stock on hand" columns for "Pentavalent (1 dose)" product

        And I should be able to see the input value for "Approved quantity" column for "Pentavalent (10 dose)" product equal to "Calc Order Qty ISA" column
        And I should be able to see the value for "Calc Order Qty ISA" equal to a difference between "Ideal Stock Amount" and "Stock on hand" columns for "Pentavalent (10 dose)" product

        And I should be able to see the input value for "Approved quantity" column for "Polio (20 dose)" product equal to "Calc Order Qty ISA" column
        And I should be able to see the value for "Calc Order Qty ISA" equal to a difference between "Ideal Stock Amount" and "Stock on hand" columns for "Polio (20 dose)" product

        And I should be able to see the input value for "Approved quantity" column for "Rotavirus" product equal to "Calc Order Qty ISA" column
        And I should be able to see the value for "Calc Order Qty ISA" equal to a difference between "Ideal Stock Amount" and "Stock on hand" columns for "Rotavirus" product

        And I should be able to see the input value for "Approved quantity" column for "Safety Box" product equal to "Calc Order Qty ISA" column

        And I should be able to see the input value for "Approved quantity" column for "Syringe 0.05ml" product equal to "Calc Order Qty ISA" column
        And I should be able to see the value for "Calc Order Qty ISA" equal to a difference between "Ideal Stock Amount" and "Stock on hand" columns for "Syringe 0.05ml" product

        When I go to the "2" page
        And I wait "4" seconds for UI adjustment
        Then I should be able to see the input value for "Approved quantity" column for "Syringe 0.5ml" product equal to "Calc Order Qty ISA" column
        And I should be able to see the value for "Calc Order Qty ISA" equal to a difference between "Ideal Stock Amount" and "Stock on hand" columns for "Syringe 0.5ml" product

        And I should be able to see the input value for "Approved quantity" column for "Syringe 5ml" product equal to "Calc Order Qty ISA" column
        And I should be able to see the value for "Calc Order Qty ISA" equal to a difference between "Ideal Stock Amount" and "Stock on hand" columns for "Syringe 5ml" product

        And I should be able to see the input value for "Approved quantity" column for "VAT" product equal to "Calc Order Qty ISA" column
        And I should be able to see the value for "Calc Order Qty ISA" equal to a difference between "Ideal Stock Amount" and "Stock on hand" columns for "VAT" product

        When I go to the "1" page
        And I wait "4" seconds for UI adjustment
        And I set "Approved quantity" as "50" for "Safety Box" product
        And I click on the "Approve" button
        And I confirm the approval
        Then I should see a successful notification saying "Requisition has been approved!"