// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewaysName?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/localNetworkGateways/localNetworkGatewaysName' under resource group 'xplat-test-local-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '02686384-5798-4c59-a5d3-15a3039e8ce3',
  'x-ms-correlation-request-id': '02686384-5798-4c59-a5d3-15a3039e8ce3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T112550Z:02686384-5798-4c59-a5d3-15a3039e8ce3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 11:25:49 GMT',
  connection: 'close',
  'content-length': '191' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewaysName?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/localNetworkGateways/localNetworkGatewaysName' under resource group 'xplat-test-local-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '02686384-5798-4c59-a5d3-15a3039e8ce3',
  'x-ms-correlation-request-id': '02686384-5798-4c59-a5d3-15a3039e8ce3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T112550Z:02686384-5798-4c59-a5d3-15a3039e8ce3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 11:25:49 GMT',
  connection: 'close',
  'content-length': '191' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewaysName?api-version=2016-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"localNetworkGatewaysName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewaysName\",\r\n  \"etag\": \"W/\\\"d7feb922-801b-4516-ac0f-55adce672777\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"9907c453-ad89-4515-b49e-d2e43c9657b0\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.42\",\r\n    \"bgpSettings\": {\r\n      \"asn\": 125,\r\n      \"bgpPeeringAddress\": \"11.0.0.11\",\r\n      \"peerWeight\": 15\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '732',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '3053bec2-bdc8-43b3-a431-95ecc0535af0',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/3053bec2-bdc8-43b3-a431-95ecc0535af0?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '09174031-aacb-459d-be1c-3ff7cfd2710c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T112554Z:09174031-aacb-459d-be1c-3ff7cfd2710c',
  date: 'Mon, 13 Mar 2017 11:25:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewaysName?api-version=2016-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"localNetworkGatewaysName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewaysName\",\r\n  \"etag\": \"W/\\\"d7feb922-801b-4516-ac0f-55adce672777\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"9907c453-ad89-4515-b49e-d2e43c9657b0\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.42\",\r\n    \"bgpSettings\": {\r\n      \"asn\": 125,\r\n      \"bgpPeeringAddress\": \"11.0.0.11\",\r\n      \"peerWeight\": 15\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '732',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '3053bec2-bdc8-43b3-a431-95ecc0535af0',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/3053bec2-bdc8-43b3-a431-95ecc0535af0?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '09174031-aacb-459d-be1c-3ff7cfd2710c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T112554Z:09174031-aacb-459d-be1c-3ff7cfd2710c',
  date: 'Mon, 13 Mar 2017 11:25:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/3053bec2-bdc8-43b3-a431-95ecc0535af0?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd197df27-a4cf-4a12-b84a-68a94ec20488',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '27400ce3-656d-41a5-be49-53e814aee501',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T112626Z:27400ce3-656d-41a5-be49-53e814aee501',
  date: 'Mon, 13 Mar 2017 11:26:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/3053bec2-bdc8-43b3-a431-95ecc0535af0?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd197df27-a4cf-4a12-b84a-68a94ec20488',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '27400ce3-656d-41a5-be49-53e814aee501',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T112626Z:27400ce3-656d-41a5-be49-53e814aee501',
  date: 'Mon, 13 Mar 2017 11:26:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewaysName?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"localNetworkGatewaysName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewaysName\",\r\n  \"etag\": \"W/\\\"82a899d8-bce4-4003-800f-cb0d15e45333\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9907c453-ad89-4515-b49e-d2e43c9657b0\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.42\",\r\n    \"bgpSettings\": {\r\n      \"asn\": 125,\r\n      \"bgpPeeringAddress\": \"11.0.0.11\",\r\n      \"peerWeight\": 15\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '733',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"82a899d8-bce4-4003-800f-cb0d15e45333"',
  'x-ms-request-id': '1ac07da5-c89e-4951-b0af-6e3a91241c48',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'c4726bc8-2fe8-4b26-bf2d-68fc19535ba5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T112627Z:c4726bc8-2fe8-4b26-bf2d-68fc19535ba5',
  date: 'Mon, 13 Mar 2017 11:26:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewaysName?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"localNetworkGatewaysName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewaysName\",\r\n  \"etag\": \"W/\\\"82a899d8-bce4-4003-800f-cb0d15e45333\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9907c453-ad89-4515-b49e-d2e43c9657b0\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.42\",\r\n    \"bgpSettings\": {\r\n      \"asn\": 125,\r\n      \"bgpPeeringAddress\": \"11.0.0.11\",\r\n      \"peerWeight\": 15\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '733',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"82a899d8-bce4-4003-800f-cb0d15e45333"',
  'x-ms-request-id': '1ac07da5-c89e-4951-b0af-6e3a91241c48',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'c4726bc8-2fe8-4b26-bf2d-68fc19535ba5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T112627Z:c4726bc8-2fe8-4b26-bf2d-68fc19535ba5',
  date: 'Mon, 13 Mar 2017 11:26:26 GMT',
  connection: 'close' });
 return result; }]];