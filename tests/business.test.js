const { BusinessCustomer } = require("../classes/business");

describe("BusinessCustomer", () => {
  test("an instance of BusinessCustomer will have a company property", () => {
    const testBusiness = new BusinessCustomer(
      "John",
      "10 King Road",
      "Northcoders"
    );
    expect(testBusiness.company).toBe("Northcoders");
  });
  test("an instance of BusinessCustomer will have a companyDiscount property initially set to 0.5", () => {
    const testBusiness = new BusinessCustomer("John", "10 King Road");
    expect(testBusiness.companyDiscount).toBe(0.5);
  });
  test("an instance of BusinessCustomer will have an updateLoyaltyPoints method that applies companyDiscount if points are decreasing", () => {
    const testBusiness = new BusinessCustomer("John", "10 King Road");
    testBusiness.updateLoyaltyPoints(-1);
    expect(testBusiness.loyaltyPoints).toBe(-0.5);
  });
  test("an instance of BusinessCustomer will have an updateLoyaltyPoints method that updates loyalty points as normal if points are increasing", () => {
    const testBusiness = new BusinessCustomer("John", "10 King Road");
    testBusiness.updateLoyaltyPoints(1);
    expect(testBusiness.loyaltyPoints).toBe(1);
  });
});
