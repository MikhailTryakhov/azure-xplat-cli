// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus/virtualNetworkAvailableEndpointServices?api-version=2017-08-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"Microsoft.Storage\",\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/virtualNetworkEndpointServices/Microsoft.Storage\",\r\n      \"type\": \"Microsoft.Network/virtualNetworkEndpointServices\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '284',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ffc80742-fc4b-4669-b1fa-1b21f7a95558',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '8dfdabd7-0e42-4946-8dfb-5a68014b8fa1',
  'x-ms-routing-request-id': 'WESTEUROPE:20170821T084522Z:8dfdabd7-0e42-4946-8dfb-5a68014b8fa1',
  date: 'Mon, 21 Aug 2017 08:45:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus/virtualNetworkAvailableEndpointServices?api-version=2017-08-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"Microsoft.Storage\",\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/virtualNetworkEndpointServices/Microsoft.Storage\",\r\n      \"type\": \"Microsoft.Network/virtualNetworkEndpointServices\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '284',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ffc80742-fc4b-4669-b1fa-1b21f7a95558',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '8dfdabd7-0e42-4946-8dfb-5a68014b8fa1',
  'x-ms-routing-request-id': 'WESTEUROPE:20170821T084522Z:8dfdabd7-0e42-4946-8dfb-5a68014b8fa1',
  date: 'Mon, 21 Aug 2017 08:45:21 GMT',
  connection: 'close' });
 return result; }]];