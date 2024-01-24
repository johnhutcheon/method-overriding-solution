const { Customer } = require("../classes/customer");

describe("Customer", () => {
  test("instance of Customer class has name property", () => {
    const testCustomer = new Customer("Rich", "10 King Street");
    expect(testCustomer.name).toBe("Rich");
  });
  test("instance of Customer class has address property", () => {
    const testCustomer = new Customer("Rich", "10 King Street");
    expect(testCustomer.address).toBe("10 King Street");
  });
  test("instance of Customer class has loyaltyPoints property, initially set to zero", () => {
    const testCustomer = new Customer("Rich", "10 King Street");
    expect(testCustomer.loyaltyPoints).toBe(0);
  });
  test("instance of Customer class has updateName method that overwrites current name", () => {
    const testCustomer = new Customer("Rich", "10 King Street");
    testCustomer.updateName("John");
    expect(testCustomer.name).toBe("John");
  });
  test("instance of Customer class has updateAddress method that overwrites current address", () => {
    const testCustomer = new Customer("John", "10 King Road");
    testCustomer.updateAddress("12 Queen Street");
    expect(testCustomer.address).toBe("12 Queen Street");
  });
  test("instance of Customer class has updateLoyaltyPoints method that overwrites current loyaltyPoints", () => {
    const testCustomer = new Customer("John", "10 King Road");
    testCustomer.updateLoyaltyPoints(7);
    expect(testCustomer.loyaltyPoints).toBe(7);
  });
});
