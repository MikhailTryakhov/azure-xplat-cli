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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westcentralus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers?api-version=2017-09-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"networkWatcherName\",\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName\",\r\n      \"etag\": \"W/\\\"e8870548-3302-489e-9d22-ff79a213141f\\\"\",\r\n      \"type\": \"Microsoft.Network/networkWatchers\",\r\n      \"location\": \"westcentralus\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"runningOperationIds\": []\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '498',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ce4dc754-1794-49d2-b4a7-240371d59212',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '71599440-93a8-4f10-88c2-b3b73a1fd25b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170815T110924Z:71599440-93a8-4f10-88c2-b3b73a1fd25b',
  date: 'Tue, 15 Aug 2017 11:09:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers?api-version=2017-09-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"networkWatcherName\",\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName\",\r\n      \"etag\": \"W/\\\"e8870548-3302-489e-9d22-ff79a213141f\\\"\",\r\n      \"type\": \"Microsoft.Network/networkWatchers\",\r\n      \"location\": \"westcentralus\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"runningOperationIds\": []\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '498',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ce4dc754-1794-49d2-b4a7-240371d59212',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '71599440-93a8-4f10-88c2-b3b73a1fd25b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170815T110924Z:71599440-93a8-4f10-88c2-b3b73a1fd25b',
  date: 'Tue, 15 Aug 2017 11:09:23 GMT',
  connection: 'close' });
 return result; }]];
