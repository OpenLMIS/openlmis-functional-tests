Feature: Converting requisitions to orders

    Scenario: Administrator should be able to convert one requisition to order
        Given I have logged with username "administrator" and password "password"

        When I navigate to Convert Requisitions to Order screen
        Then I should be brought to Convert Requisitions to Order screen

        When I click on the "Convert to Order" button
        Then I should see an error notification saying "Please select at least one requisition for converting to order."

        When I click on the supplying depot for "Essential Meds" program and "2017Q2" period
        Then I should see only "Balaka District Warehouse" supplying depot on the dropdown list

        When I unselect the supplying depot for requisition for "Essential Meds" program and "2017Q2" period
        And I select the requisition for "Essential Meds" program and "2017Q2" period to convert to order
        And I click on the "Convert to Order" button
        Then I should see an error notification saying "Supplying depot not selected"
        
        When I select "Balaka District Warehouse" as the supplying depot for "Essential Meds" program and "2017Q2" period
        And I click on the "Convert to Order" button
        And I confirm the convert
        Then I should see a successful notification saying "The requisition(s) have been successfully converted to an order(s)"

    Scenario: Administrator should be able to convert multiple requisitions to orders
        When I select all requisitions to convert to order
        And I unselect the supplying depot for requisition for "Family Planning" program and "2017Q3" period
        And I unselect the supplying depot for requisition for "ARV" program and "Jan2017" period
        And I click on the "Convert to Order" button
        Then I should see an error notification saying "Supplying depot not selected"

        When I select "Lilongwe District Warehouse" as the supplying depot for "ARV" program and "Jan2017" period
        And I select "Ntcheu District Warehouse" as the supplying depot for "Family Planning" program and "2017Q3" period
        And I click on the "Convert to Order" button
        And I confirm the convert
        Then I should see a successful notification saying "The requisition(s) have been successfully converted to an order(s)"

    Scenario: Administrator should be able to see already converted requisitions as orders
        When I navigate to View Orders screen
        Then I should be brought to View Orders screen

        When I search for "Balaka District Warehouse" supplying facility
        Then I should see order for "Essential Meds" program and "2017Q2" period inside the table

        When I search for "Lilongwe District Warehouse" supplying facility
        Then I should see order for "ARV" program and "Jan2017" period inside the table

        When I search for "Ntcheu District Warehouse" supplying facility
        Then I should see order for "Family Planning" program and "2017Q3" period inside the table









