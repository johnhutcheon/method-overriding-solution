const { PremiumCustomer } = require("../classes/premium");

describe("PremiumCustomer", () => {
  test("an instance of PremiumCustomer will have a loyaltyPointsModifier property", () => {
    const testPremium = new PremiumCustomer("John", "10 King Road");
    expect(testPremium.loyaltyPointsModifier).toBe(1.5);
  });
  test("an instance of PremiumCustomer will have an updateLoyaltyPoints method that increases loyalty points by 1.5 if points are increasing", () => {
    const testPremium = new PremiumCustomer("John", "10 King Road");
    testPremium.updateLoyaltyPoints(1);
    expect(testPremium.loyaltyPoints).toBe(1.5);
  });
  test("an instance of PremiumCustomer will have an updateLoyaltyPoints method that updates loyalty points as normal if points are decreasing", () => {
    const testPremium = new PremiumCustomer("John", "10 King Road");
    testPremium.updateLoyaltyPoints(-1);
    expect(testPremium.loyaltyPoints).toBe(-1);
  });
});
