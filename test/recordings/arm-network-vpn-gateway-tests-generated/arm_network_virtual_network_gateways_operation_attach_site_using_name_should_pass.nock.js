// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '9532a63e-f2eb-4649-bb23-5ed01077ce80',
    name: 'franks-official-test-sub',
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
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/attachSiteUsingIdName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"attachSiteUsingIdName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/attachSiteUsingIdName\",\r\n  \"etag\": \"W/\\\"4e971510-65de-41e0-a25b-7bda72f4ab86\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"ad3880ac-93c4-4539-b79c-fa48f80ff7a5\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/attachSiteUsingIdName/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"4e971510-65de-41e0-a25b-7bda72f4ab86\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Basic\",\r\n      \"tier\": \"Basic\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"bgpSettings\": {\r\n      \"asn\": 65515,\r\n      \"bgpPeeringAddress\": \"10.0.255.254\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '158b49b3-50ba-4615-b902-dc07d8f2eada',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '91d13e93-2727-49b8-849c-c24db8d83512',
  'x-ms-routing-request-id': 'WESTEUROPE:20170727T135558Z:91d13e93-2727-49b8-849c-c24db8d83512',
  date: 'Thu, 27 Jul 2017 13:55:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/attachSiteUsingIdName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"attachSiteUsingIdName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/attachSiteUsingIdName\",\r\n  \"etag\": \"W/\\\"4e971510-65de-41e0-a25b-7bda72f4ab86\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"ad3880ac-93c4-4539-b79c-fa48f80ff7a5\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/attachSiteUsingIdName/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"4e971510-65de-41e0-a25b-7bda72f4ab86\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Basic\",\r\n      \"tier\": \"Basic\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"bgpSettings\": {\r\n      \"asn\": 65515,\r\n      \"bgpPeeringAddress\": \"10.0.255.254\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '158b49b3-50ba-4615-b902-dc07d8f2eada',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '91d13e93-2727-49b8-849c-c24db8d83512',
  'x-ms-routing-request-id': 'WESTEUROPE:20170727T135558Z:91d13e93-2727-49b8-849c-c24db8d83512',
  date: 'Thu, 27 Jul 2017 13:55:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewayName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"localNetworkGatewayName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewayName\",\r\n  \"etag\": \"W/\\\"4c412aaf-d6b1-48ae-b1f5-16ed3967a2e7\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"b8a30289-a120-4ad5-a000-505b3beab01c\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": []\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.42\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '585',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"4c412aaf-d6b1-48ae-b1f5-16ed3967a2e7"',
  'x-ms-request-id': '69d7db42-410d-4518-8687-8cc8368a51d0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14966',
  'x-ms-correlation-request-id': '0cb2d51b-3af7-4d23-8969-2732cef60619',
  'x-ms-routing-request-id': 'WESTEUROPE:20170727T135559Z:0cb2d51b-3af7-4d23-8969-2732cef60619',
  date: 'Thu, 27 Jul 2017 13:55:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewayName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"localNetworkGatewayName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewayName\",\r\n  \"etag\": \"W/\\\"4c412aaf-d6b1-48ae-b1f5-16ed3967a2e7\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"b8a30289-a120-4ad5-a000-505b3beab01c\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": []\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.42\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '585',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"4c412aaf-d6b1-48ae-b1f5-16ed3967a2e7"',
  'x-ms-request-id': '69d7db42-410d-4518-8687-8cc8368a51d0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14966',
  'x-ms-correlation-request-id': '0cb2d51b-3af7-4d23-8969-2732cef60619',
  'x-ms-routing-request-id': 'WESTEUROPE:20170727T135559Z:0cb2d51b-3af7-4d23-8969-2732cef60619',
  date: 'Thu, 27 Jul 2017 13:55:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/attachSiteUsingIdName?api-version=2017-06-01', '*')
  .reply(200, "{\r\n  \"name\": \"attachSiteUsingIdName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/attachSiteUsingIdName\",\r\n  \"etag\": \"W/\\\"bfc48992-f9f2-41f4-93cb-eacc480966b9\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"ad3880ac-93c4-4539-b79c-fa48f80ff7a5\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/attachSiteUsingIdName/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"bfc48992-f9f2-41f4-93cb-eacc480966b9\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Basic\",\r\n      \"tier\": \"Basic\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientProtocols\": [],\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": []\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 65515,\r\n      \"bgpPeeringAddress\": \"10.0.255.254\",\r\n      \"peerWeight\": 0\r\n    },\r\n    \"gatewayDefaultSite\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewayName\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2120',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '2f1fc3cf-d4b3-4ceb-974e-bad42db68995',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/2f1fc3cf-d4b3-4ceb-974e-bad42db68995?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'b30f8d43-567c-44c8-80ef-0054e93b4d11',
  'x-ms-routing-request-id': 'WESTEUROPE:20170727T135600Z:b30f8d43-567c-44c8-80ef-0054e93b4d11',
  date: 'Thu, 27 Jul 2017 13:56:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/attachSiteUsingIdName?api-version=2017-06-01', '*')
  .reply(200, "{\r\n  \"name\": \"attachSiteUsingIdName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/attachSiteUsingIdName\",\r\n  \"etag\": \"W/\\\"bfc48992-f9f2-41f4-93cb-eacc480966b9\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"ad3880ac-93c4-4539-b79c-fa48f80ff7a5\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/attachSiteUsingIdName/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"bfc48992-f9f2-41f4-93cb-eacc480966b9\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Basic\",\r\n      \"tier\": \"Basic\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientProtocols\": [],\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": []\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 65515,\r\n      \"bgpPeeringAddress\": \"10.0.255.254\",\r\n      \"peerWeight\": 0\r\n    },\r\n    \"gatewayDefaultSite\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewayName\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2120',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '2f1fc3cf-d4b3-4ceb-974e-bad42db68995',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/2f1fc3cf-d4b3-4ceb-974e-bad42db68995?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'b30f8d43-567c-44c8-80ef-0054e93b4d11',
  'x-ms-routing-request-id': 'WESTEUROPE:20170727T135600Z:b30f8d43-567c-44c8-80ef-0054e93b4d11',
  date: 'Thu, 27 Jul 2017 13:56:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/2f1fc3cf-d4b3-4ceb-974e-bad42db68995?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '47f3d31a-c4c8-46db-a2c1-c635a7682091',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14972',
  'x-ms-correlation-request-id': '2125e44a-7218-4d04-904e-40e118f3185a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170727T135632Z:2125e44a-7218-4d04-904e-40e118f3185a',
  date: 'Thu, 27 Jul 2017 13:56:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/2f1fc3cf-d4b3-4ceb-974e-bad42db68995?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '47f3d31a-c4c8-46db-a2c1-c635a7682091',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14972',
  'x-ms-correlation-request-id': '2125e44a-7218-4d04-904e-40e118f3185a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170727T135632Z:2125e44a-7218-4d04-904e-40e118f3185a',
  date: 'Thu, 27 Jul 2017 13:56:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/2f1fc3cf-d4b3-4ceb-974e-bad42db68995?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '033800f0-6ac7-4e05-9272-8300fb7ef661',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '6ed9d626-8fd0-4047-9fd4-6d2e0c531f03',
  'x-ms-routing-request-id': 'WESTEUROPE:20170727T135702Z:6ed9d626-8fd0-4047-9fd4-6d2e0c531f03',
  date: 'Thu, 27 Jul 2017 13:57:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/2f1fc3cf-d4b3-4ceb-974e-bad42db68995?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '033800f0-6ac7-4e05-9272-8300fb7ef661',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '6ed9d626-8fd0-4047-9fd4-6d2e0c531f03',
  'x-ms-routing-request-id': 'WESTEUROPE:20170727T135702Z:6ed9d626-8fd0-4047-9fd4-6d2e0c531f03',
  date: 'Thu, 27 Jul 2017 13:57:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/attachSiteUsingIdName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"attachSiteUsingIdName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/attachSiteUsingIdName\",\r\n  \"etag\": \"W/\\\"319a204e-a3c4-413f-85aa-371a1856bd1c\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"ad3880ac-93c4-4539-b79c-fa48f80ff7a5\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/attachSiteUsingIdName/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"319a204e-a3c4-413f-85aa-371a1856bd1c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Basic\",\r\n      \"tier\": \"Basic\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"bgpSettings\": {\r\n      \"asn\": 65515,\r\n      \"bgpPeeringAddress\": \"10.0.255.254\",\r\n      \"peerWeight\": 0\r\n    },\r\n    \"gatewayDefaultSite\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewayName\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1966',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b060deb3-c341-4fd2-a233-b6a2152b6c12',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '6562a1c3-a35b-4d30-98a4-71e2714025a5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170727T135703Z:6562a1c3-a35b-4d30-98a4-71e2714025a5',
  date: 'Thu, 27 Jul 2017 13:57:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/attachSiteUsingIdName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"attachSiteUsingIdName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/attachSiteUsingIdName\",\r\n  \"etag\": \"W/\\\"319a204e-a3c4-413f-85aa-371a1856bd1c\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"ad3880ac-93c4-4539-b79c-fa48f80ff7a5\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/attachSiteUsingIdName/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"319a204e-a3c4-413f-85aa-371a1856bd1c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Basic\",\r\n      \"tier\": \"Basic\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"bgpSettings\": {\r\n      \"asn\": 65515,\r\n      \"bgpPeeringAddress\": \"10.0.255.254\",\r\n      \"peerWeight\": 0\r\n    },\r\n    \"gatewayDefaultSite\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewayName\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1966',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b060deb3-c341-4fd2-a233-b6a2152b6c12',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '6562a1c3-a35b-4d30-98a4-71e2714025a5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170727T135703Z:6562a1c3-a35b-4d30-98a4-71e2714025a5',
  date: 'Thu, 27 Jul 2017 13:57:03 GMT',
  connection: 'close' });
 return result; }]];