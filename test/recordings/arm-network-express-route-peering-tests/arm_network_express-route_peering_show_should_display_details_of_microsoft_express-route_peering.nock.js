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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/MicrosoftPeering?api-version=2016-12-01')
  .reply(200, "{\r\n  \"name\": \"MicrosoftPeering\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/MicrosoftPeering\",\r\n  \"etag\": \"W/\\\"7b1d15c4-ca97-4ac8-9732-bb447f838ad5\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringType\": \"MicrosoftPeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 120,\r\n    \"primaryPeerAddressPrefix\": \"123.0.0.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"123.0.0.4/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 220,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"lastModifiedBy\": \"Customer\",\r\n    \"microsoftPeeringConfig\": {\r\n      \"advertisedPublicPrefixes\": [\r\n        \"123.1.0.0/24\"\r\n      ],\r\n      \"advertisedPublicPrefixesState\": \"ValidationNeeded\",\r\n      \"customerASN\": 32,\r\n      \"routingRegistryName\": \"LACNIC\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1004',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4a69212b-7caf-4c5e-a7e3-b34f05e4856d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-correlation-request-id': 'b18cb80a-e39c-42c6-9ff8-5181089c9e63',
  'x-ms-routing-request-id': 'WESTEUROPE:20170222T130418Z:b18cb80a-e39c-42c6-9ff8-5181089c9e63',
  date: 'Wed, 22 Feb 2017 13:04:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/MicrosoftPeering?api-version=2016-12-01')
  .reply(200, "{\r\n  \"name\": \"MicrosoftPeering\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/MicrosoftPeering\",\r\n  \"etag\": \"W/\\\"7b1d15c4-ca97-4ac8-9732-bb447f838ad5\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringType\": \"MicrosoftPeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 120,\r\n    \"primaryPeerAddressPrefix\": \"123.0.0.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"123.0.0.4/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 220,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"lastModifiedBy\": \"Customer\",\r\n    \"microsoftPeeringConfig\": {\r\n      \"advertisedPublicPrefixes\": [\r\n        \"123.1.0.0/24\"\r\n      ],\r\n      \"advertisedPublicPrefixesState\": \"ValidationNeeded\",\r\n      \"customerASN\": 32,\r\n      \"routingRegistryName\": \"LACNIC\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1004',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4a69212b-7caf-4c5e-a7e3-b34f05e4856d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-correlation-request-id': 'b18cb80a-e39c-42c6-9ff8-5181089c9e63',
  'x-ms-routing-request-id': 'WESTEUROPE:20170222T130418Z:b18cb80a-e39c-42c6-9ff8-5181089c9e63',
  date: 'Wed, 22 Feb 2017 13:04:18 GMT',
  connection: 'close' });
 return result; }]];