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
    registeredProviders: ['mobileservice', 'website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections?api-version=2017-09-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"test-vpn-connection\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection\",\r\n      \"etag\": \"W/\\\"a11fcc2d-cb00-4883-a4b1-4e093f8d3d19\\\"\",\r\n      \"type\": \"Microsoft.Network/connections\",\r\n      \"location\": \"eastus\",\r\n      \"tags\": {\r\n        \"tag1\": \"aaa\",\r\n        \"tag2\": \"bbb\",\r\n        \"tag3\": \"ccc\"\r\n      },\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"455cd08f-bbf4-4e37-b524-79ef0e66273a\",\r\n        \"virtualNetworkGateway1\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1\"\r\n        },\r\n        \"virtualNetworkGateway2\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2\"\r\n        },\r\n        \"connectionType\": \"Vnet2Vnet\",\r\n        \"routingWeight\": 33,\r\n        \"enableBgp\": true,\r\n        \"ingressBytesTransferred\": 0,\r\n        \"egressBytesTransferred\": 0\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1259',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7182f3d3-33a0-48ff-8ad8-ba730a0cc1fa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14823',
  'x-ms-correlation-request-id': 'b0a7bd29-a1d3-4c7b-85f6-af3d0f270428',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101828Z:b0a7bd29-a1d3-4c7b-85f6-af3d0f270428',
  date: 'Thu, 19 Jan 2017 10:18:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections?api-version=2017-09-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"test-vpn-connection\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection\",\r\n      \"etag\": \"W/\\\"a11fcc2d-cb00-4883-a4b1-4e093f8d3d19\\\"\",\r\n      \"type\": \"Microsoft.Network/connections\",\r\n      \"location\": \"eastus\",\r\n      \"tags\": {\r\n        \"tag1\": \"aaa\",\r\n        \"tag2\": \"bbb\",\r\n        \"tag3\": \"ccc\"\r\n      },\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"455cd08f-bbf4-4e37-b524-79ef0e66273a\",\r\n        \"virtualNetworkGateway1\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1\"\r\n        },\r\n        \"virtualNetworkGateway2\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2\"\r\n        },\r\n        \"connectionType\": \"Vnet2Vnet\",\r\n        \"routingWeight\": 33,\r\n        \"enableBgp\": true,\r\n        \"ingressBytesTransferred\": 0,\r\n        \"egressBytesTransferred\": 0\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1259',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7182f3d3-33a0-48ff-8ad8-ba730a0cc1fa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14823',
  'x-ms-correlation-request-id': 'b0a7bd29-a1d3-4c7b-85f6-af3d0f270428',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101828Z:b0a7bd29-a1d3-4c7b-85f6-af3d0f270428',
  date: 'Thu, 19 Jan 2017 10:18:28 GMT',
  connection: 'close' });
 return result; }]];
