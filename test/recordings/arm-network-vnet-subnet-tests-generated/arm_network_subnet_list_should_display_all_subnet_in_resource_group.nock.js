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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets?api-version=2017-08-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"subnetName\",\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\",\r\n      \"etag\": \"W/\\\"55132fbe-ef40-43e8-b7a6-8f884901032d\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"addressPrefix\": \"10.0.0.0/24\",\r\n        \"networkSecurityGroup\": {\r\n          \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\"\r\n        },\r\n        \"routeTable\": {\r\n          \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '847',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2143fd85-6db2-4408-a709-383a28562f25',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'a90f8f10-ad41-4557-98fb-8c71953730cb',
  'x-ms-routing-request-id': 'WESTEUROPE:20170821T111438Z:a90f8f10-ad41-4557-98fb-8c71953730cb',
  date: 'Mon, 21 Aug 2017 11:14:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets?api-version=2017-08-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"subnetName\",\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\",\r\n      \"etag\": \"W/\\\"55132fbe-ef40-43e8-b7a6-8f884901032d\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"addressPrefix\": \"10.0.0.0/24\",\r\n        \"networkSecurityGroup\": {\r\n          \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\"\r\n        },\r\n        \"routeTable\": {\r\n          \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '847',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2143fd85-6db2-4408-a709-383a28562f25',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'a90f8f10-ad41-4557-98fb-8c71953730cb',
  'x-ms-routing-request-id': 'WESTEUROPE:20170821T111438Z:a90f8f10-ad41-4557-98fb-8c71953730cb',
  date: 'Mon, 21 Aug 2017 11:14:37 GMT',
  connection: 'close' });
 return result; }]];