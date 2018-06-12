const elasticsearch = require('elasticsearch');
const customers = require('./Clients.json');

const client = new elasticsearch.Client({
  hosts: ['http://localhost:9200']
});


let bulk = [];

customers.forEach(city => {
  bulk.push({
    index: {
      _index: "super-mario-clients",
      _type: "client_list"
    }
  })
  bulk.push(customer)
})

client.bulk({
  body: bulk
}, (err, response) => {
  err ? console.log('Failed Bulk operation on the Elasticsearch: '.red, err) : console.log('Successfully imported %s '.green, customers.lenght)
})