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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-probe/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-probe/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"5800816a-a0c4-4395-b20d-fbdd99d0cedc\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"36e0b141-87d4-47d0-968f-05b56fd1ff8d\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-probe/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"5800816a-a0c4-4395-b20d-fbdd99d0cedc\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-probe/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1381',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"5800816a-a0c4-4395-b20d-fbdd99d0cedc"',
  'x-ms-request-id': 'f7016f2a-dc98-41e3-932a-578201432579',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '681ae061-ffbd-4d25-8af6-71d4debcdf8f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T110010Z:681ae061-ffbd-4d25-8af6-71d4debcdf8f',
  date: 'Fri, 01 Sep 2017 11:00:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-probe/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-probe/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"5800816a-a0c4-4395-b20d-fbdd99d0cedc\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"36e0b141-87d4-47d0-968f-05b56fd1ff8d\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-probe/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"5800816a-a0c4-4395-b20d-fbdd99d0cedc\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-probe/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1381',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"5800816a-a0c4-4395-b20d-fbdd99d0cedc"',
  'x-ms-request-id': 'f7016f2a-dc98-41e3-932a-578201432579',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '681ae061-ffbd-4d25-8af6-71d4debcdf8f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T110010Z:681ae061-ffbd-4d25-8af6-71d4debcdf8f',
  date: 'Fri, 01 Sep 2017 11:00:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-probe/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-09-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"PortValueIsOutOfRange\",\r\n    \"message\": \"Resource PortOutOfRangeName has invalid value of Port (65536). The value must be between 1 and 65535.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '201',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '47a7a595-6b97-460d-ac0d-70b4f445b0fb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '23da3c39-99b0-47f6-86ad-f5ab1e355459',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T110011Z:23da3c39-99b0-47f6-86ad-f5ab1e355459',
  date: 'Fri, 01 Sep 2017 11:00:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-probe/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-09-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"PortValueIsOutOfRange\",\r\n    \"message\": \"Resource PortOutOfRangeName has invalid value of Port (65536). The value must be between 1 and 65535.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '201',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '47a7a595-6b97-460d-ac0d-70b4f445b0fb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '23da3c39-99b0-47f6-86ad-f5ab1e355459',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T110011Z:23da3c39-99b0-47f6-86ad-f5ab1e355459',
  date: 'Fri, 01 Sep 2017 11:00:11 GMT',
  connection: 'close' });
 return result; }]];
