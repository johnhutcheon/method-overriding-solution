const { Customer } = require("./customer");

class BusinessCustomer extends Customer {
  constructor(name, address, company) {
    super(name, address);
    this.company = company;
    this.companyDiscount = 0.5;
  }
  updateLoyaltyPoints(newPoints) {
    if (newPoints < 0) {
      this.loyaltyPoints += this.companyDiscount * newPoints;
    } else {
      this.loyaltyPoints += newPoints;
    }
  }
}

module.exports = { BusinessCustomer };

const business = new BusinessCustomer("john", "a street");

business.updateLoyaltyPoints(1);

console.log(business);
