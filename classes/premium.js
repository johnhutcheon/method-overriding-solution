const { Customer } = require("./customer");

class PremiumCustomer extends Customer {
  constructor(name, address) {
    super(name, address);
    this.loyaltyPointsModifier = 1.5;
  }

  updateLoyaltyPoints(newPoints) {
    if (newPoints > 0) {
      this.loyaltyPoints += this.loyaltyPointsModifier * newPoints;
    } else {
      this.loyaltyPoints += newPoints;
    }
  }
}

module.exports = { PremiumCustomer };
