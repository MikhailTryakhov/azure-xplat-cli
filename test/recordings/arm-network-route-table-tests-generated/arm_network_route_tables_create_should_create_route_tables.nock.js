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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-08-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/routeTables/routeTableName' under resource group 'xplat-test-route-table' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '5b3b8ce9-0a7f-4081-a830-0d700e227c6d',
  'x-ms-correlation-request-id': '5b3b8ce9-0a7f-4081-a830-0d700e227c6d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T101640Z:5b3b8ce9-0a7f-4081-a830-0d700e227c6d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Sep 2017 10:16:39 GMT',
  connection: 'close',
  'content-length': '170' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-08-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/routeTables/routeTableName' under resource group 'xplat-test-route-table' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '5b3b8ce9-0a7f-4081-a830-0d700e227c6d',
  'x-ms-correlation-request-id': '5b3b8ce9-0a7f-4081-a830-0d700e227c6d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T101640Z:5b3b8ce9-0a7f-4081-a830-0d700e227c6d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Sep 2017 10:16:39 GMT',
  connection: 'close',
  'content-length': '170' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-08-01', '*')
  .reply(201, "{\r\n  \"name\": \"routeTableName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName\",\r\n  \"etag\": \"W/\\\"de6b8640-2904-4f5d-a774-86982d3fb324\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"6eabcbfa-27d2-43a0-92f8-88ba60e6f4c0\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '457',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '3786e035-fd52-4839-a5e9-cd38f57d3f6f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/3786e035-fd52-4839-a5e9-cd38f57d3f6f?api-version=2017-08-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '5d6a869a-5fcf-4ffa-bfa0-39b4c30b1e48',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T101644Z:5d6a869a-5fcf-4ffa-bfa0-39b4c30b1e48',
  date: 'Fri, 01 Sep 2017 10:16:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-08-01', '*')
  .reply(201, "{\r\n  \"name\": \"routeTableName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName\",\r\n  \"etag\": \"W/\\\"de6b8640-2904-4f5d-a774-86982d3fb324\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"6eabcbfa-27d2-43a0-92f8-88ba60e6f4c0\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '457',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '3786e035-fd52-4839-a5e9-cd38f57d3f6f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/3786e035-fd52-4839-a5e9-cd38f57d3f6f?api-version=2017-08-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '5d6a869a-5fcf-4ffa-bfa0-39b4c30b1e48',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T101644Z:5d6a869a-5fcf-4ffa-bfa0-39b4c30b1e48',
  date: 'Fri, 01 Sep 2017 10:16:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/3786e035-fd52-4839-a5e9-cd38f57d3f6f?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '38d149a7-4e56-45f0-8ed2-4080fe708c70',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'd0e5bff1-65f9-447c-a3ac-47a19acb3566',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T101716Z:d0e5bff1-65f9-447c-a3ac-47a19acb3566',
  date: 'Fri, 01 Sep 2017 10:17:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/3786e035-fd52-4839-a5e9-cd38f57d3f6f?api-version=2017-08-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '38d149a7-4e56-45f0-8ed2-4080fe708c70',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'd0e5bff1-65f9-447c-a3ac-47a19acb3566',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T101716Z:d0e5bff1-65f9-447c-a3ac-47a19acb3566',
  date: 'Fri, 01 Sep 2017 10:17:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"routeTableName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName\",\r\n  \"etag\": \"W/\\\"c7cbcd2d-9ab9-4470-9178-446c297c35fb\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6eabcbfa-27d2-43a0-92f8-88ba60e6f4c0\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '458',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c7cbcd2d-9ab9-4470-9178-446c297c35fb"',
  'x-ms-request-id': '1ad8f316-6e98-4215-8aaa-3c3101a547c2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '2710bb3d-dfe6-43ce-b76a-57647295f16b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T101717Z:2710bb3d-dfe6-43ce-b76a-57647295f16b',
  date: 'Fri, 01 Sep 2017 10:17:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-08-01')
  .reply(200, "{\r\n  \"name\": \"routeTableName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName\",\r\n  \"etag\": \"W/\\\"c7cbcd2d-9ab9-4470-9178-446c297c35fb\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6eabcbfa-27d2-43a0-92f8-88ba60e6f4c0\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '458',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c7cbcd2d-9ab9-4470-9178-446c297c35fb"',
  'x-ms-request-id': '1ad8f316-6e98-4215-8aaa-3c3101a547c2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '2710bb3d-dfe6-43ce-b76a-57647295f16b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T101717Z:2710bb3d-dfe6-43ce-b76a-57647295f16b',
  date: 'Fri, 01 Sep 2017 10:17:17 GMT',
  connection: 'close' });
 return result; }]];