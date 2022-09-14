Feature: Forms

  Scenario: Checking if the forms are correct
    Given I access the Coodesh Beta page
    When I enter the login page
    And I login in an account
    And I go to the companies page
    Then I search for a company and see the results