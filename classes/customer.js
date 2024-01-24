class Customer {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.loyaltyPoints = 0;
  }
  updateName(newName) {
    this.name = newName;
  }

  updateAddress(newAddress) {
    this.address = newAddress;
  }

  updateLoyaltyPoints(newPoints) {
    this.loyaltyPoints += newPoints;
  }
}

module.exports = { Customer };
