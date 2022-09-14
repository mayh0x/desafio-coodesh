Feature: Home Page

  Scenario: Checking if the homepage loads correctly
    Given I access the Coodesh Beta page
    When I accept cookies
    Then the home page loads its components correctly