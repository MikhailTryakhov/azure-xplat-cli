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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkInterfaces/networkInterfaceName' under resource group 'xplat-test-nic' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'fff03777-3b1c-4243-bdbe-58ca665eb4b0',
  'x-ms-correlation-request-id': 'fff03777-3b1c-4243-bdbe-58ca665eb4b0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T133909Z:fff03777-3b1c-4243-bdbe-58ca665eb4b0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 07 Jul 2017 13:39:09 GMT',
  connection: 'close',
  'content-length': '174' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkInterfaces/networkInterfaceName' under resource group 'xplat-test-nic' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'fff03777-3b1c-4243-bdbe-58ca665eb4b0',
  'x-ms-correlation-request-id': 'fff03777-3b1c-4243-bdbe-58ca665eb4b0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T133909Z:fff03777-3b1c-4243-bdbe-58ca665eb4b0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 07 Jul 2017 13:39:09 GMT',
  connection: 'close',
  'content-length': '174' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"subnetName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\",\r\n  \"etag\": \"W/\\\"30090078-eff3-423d-a22c-9dc68661faad\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '361',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"30090078-eff3-423d-a22c-9dc68661faad"',
  'x-ms-request-id': 'd0927d8d-352b-479c-b2ee-2207a9496997',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '37c1ba8d-2077-4803-b484-6d4a07de9e59',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T133910Z:37c1ba8d-2077-4803-b484-6d4a07de9e59',
  date: 'Fri, 07 Jul 2017 13:39:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"subnetName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\",\r\n  \"etag\": \"W/\\\"30090078-eff3-423d-a22c-9dc68661faad\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '361',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"30090078-eff3-423d-a22c-9dc68661faad"',
  'x-ms-request-id': 'd0927d8d-352b-479c-b2ee-2207a9496997',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '37c1ba8d-2077-4803-b484-6d4a07de9e59',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T133910Z:37c1ba8d-2077-4803-b484-6d4a07de9e59',
  date: 'Fri, 07 Jul 2017 13:39:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"8e9dd89d-5f92-4f41-9312-8819cd4778b9\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"334d3e06-108d-4b95-85aa-a58bccaf1770\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '568',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"8e9dd89d-5f92-4f41-9312-8819cd4778b9"',
  'x-ms-request-id': 'c527e0fa-b7a0-48e7-89bb-268f693d4734',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '83b4f4b6-c903-40a9-a618-b3b5aeafc0af',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T133912Z:83b4f4b6-c903-40a9-a618-b3b5aeafc0af',
  date: 'Fri, 07 Jul 2017 13:39:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"8e9dd89d-5f92-4f41-9312-8819cd4778b9\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"334d3e06-108d-4b95-85aa-a58bccaf1770\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '568',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"8e9dd89d-5f92-4f41-9312-8819cd4778b9"',
  'x-ms-request-id': 'c527e0fa-b7a0-48e7-89bb-268f693d4734',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '83b4f4b6-c903-40a9-a618-b3b5aeafc0af',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T133912Z:83b4f4b6-c903-40a9-a618-b3b5aeafc0af',
  date: 'Fri, 07 Jul 2017 13:39:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"69cbcd23-f1d5-4387-ac44-8727f04621cb\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"39f13623-12cb-41b3-9915-833851af36f2\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"createipconf\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/createipconf\",\r\n        \"etag\": \"W/\\\"69cbcd23-f1d5-4387-ac44-8727f04621cb\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.42\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-foo\",\r\n      \"internalFqdn\": \"internal-dns-foo.h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\",\r\n      \"internalDomainNameSuffix\": \"h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1889',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6b41bc41-522c-4f26-baab-7ab4abee2f35',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/6b41bc41-522c-4f26-baab-7ab4abee2f35?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'fa86f2d5-89ea-4f7e-9d42-9b2a8b4e791a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T133917Z:fa86f2d5-89ea-4f7e-9d42-9b2a8b4e791a',
  date: 'Fri, 07 Jul 2017 13:39:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"69cbcd23-f1d5-4387-ac44-8727f04621cb\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"39f13623-12cb-41b3-9915-833851af36f2\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"createipconf\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/createipconf\",\r\n        \"etag\": \"W/\\\"69cbcd23-f1d5-4387-ac44-8727f04621cb\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.42\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-foo\",\r\n      \"internalFqdn\": \"internal-dns-foo.h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\",\r\n      \"internalDomainNameSuffix\": \"h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1889',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6b41bc41-522c-4f26-baab-7ab4abee2f35',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/6b41bc41-522c-4f26-baab-7ab4abee2f35?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'fa86f2d5-89ea-4f7e-9d42-9b2a8b4e791a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T133917Z:fa86f2d5-89ea-4f7e-9d42-9b2a8b4e791a',
  date: 'Fri, 07 Jul 2017 13:39:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"69cbcd23-f1d5-4387-ac44-8727f04621cb\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"39f13623-12cb-41b3-9915-833851af36f2\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"createipconf\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/createipconf\",\r\n        \"etag\": \"W/\\\"69cbcd23-f1d5-4387-ac44-8727f04621cb\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.42\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-foo\",\r\n      \"internalFqdn\": \"internal-dns-foo.h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\",\r\n      \"internalDomainNameSuffix\": \"h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1889',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"69cbcd23-f1d5-4387-ac44-8727f04621cb"',
  'x-ms-request-id': '04228719-0e24-4e72-924d-a707939176bf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '9b8fbcaf-b8c3-4fda-9fc9-b4c050a07258',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T133918Z:9b8fbcaf-b8c3-4fda-9fc9-b4c050a07258',
  date: 'Fri, 07 Jul 2017 13:39:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"69cbcd23-f1d5-4387-ac44-8727f04621cb\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"39f13623-12cb-41b3-9915-833851af36f2\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"createipconf\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/createipconf\",\r\n        \"etag\": \"W/\\\"69cbcd23-f1d5-4387-ac44-8727f04621cb\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.42\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-foo\",\r\n      \"internalFqdn\": \"internal-dns-foo.h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\",\r\n      \"internalDomainNameSuffix\": \"h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1889',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"69cbcd23-f1d5-4387-ac44-8727f04621cb"',
  'x-ms-request-id': '04228719-0e24-4e72-924d-a707939176bf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '9b8fbcaf-b8c3-4fda-9fc9-b4c050a07258',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T133918Z:9b8fbcaf-b8c3-4fda-9fc9-b4c050a07258',
  date: 'Fri, 07 Jul 2017 13:39:18 GMT',
  connection: 'close' });
 return result; }]];
