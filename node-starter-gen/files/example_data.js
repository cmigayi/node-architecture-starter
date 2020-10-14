var customer = {
  customer_id: 0,
  date_time: ""
};

// Define setters
Object.defineProperty(customer, "customerCustomerId", {
  set: function(customer_id){this.customer_id = customer_id;}
});
Object.defineProperty(customer, "customerDateTime", {
  set: function(date_time){this.date_time = date_time;}
});

module.exports = customer;
