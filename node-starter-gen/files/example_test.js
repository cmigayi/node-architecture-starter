const customer = require('../data/customer');
const chai = require('chai');
const expect = chai.expect;

describe("customer", function(){
  beforeEach(function(){
    customer.customerCustomerId = 1;
    customer.customerDateTime = "3/01/2020";
  });
  it("customerId: setter and getter", function(){
    expect(customer.customer_id).to.equal(1);
    expect(customer.customer_id).not.to.equal(2);
  });
  it("dateTime: setter and getter", function(){
    expect(customer.date_time).to.equal("3/01/2020");
    expect(customer.date_time).not.to.equal("4/01/2021");
  });
});
