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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/applicationGatewayAvailableSslOptions/default?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"default\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups//providers/Microsoft.Network/ApplicationGatewayAvailableSslOptions/default\",\r\n  \"type\": \"Microsoft.Network/ApplicationGatewayAvailableSslOptions\",\r\n  \"properties\": {\r\n    \"predefinedPolicies\": [\r\n      {\r\n        \"name\": \"AppGwSslPolicy20150501\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups//providers/Microsoft.Network/ApplicationGatewayAvailableSslOptions/default/ApplicationGatewaySslPredefinedPolicy/AppGwSslPolicy20150501\",\r\n        \"properties\": {\r\n          \"cipherSuites\": [\r\n            \"TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384\",\r\n            \"TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256\",\r\n            \"TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA\",\r\n            \"TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA\",\r\n            \"TLS_DHE_RSA_WITH_AES_256_GCM_SHA384\",\r\n            \"TLS_DHE_RSA_WITH_AES_128_GCM_SHA256\",\r\n            \"TLS_DHE_RSA_WITH_AES_256_CBC_SHA\",\r\n            \"TLS_DHE_RSA_WITH_AES_128_CBC_SHA\",\r\n            \"TLS_RSA_WITH_AES_256_GCM_SHA384\",\r\n            \"TLS_RSA_WITH_AES_128_GCM_SHA256\",\r\n            \"TLS_RSA_WITH_AES_256_CBC_SHA256\",\r\n            \"TLS_RSA_WITH_AES_128_CBC_SHA256\",\r\n            \"TLS_RSA_WITH_AES_256_CBC_SHA\",\r\n            \"TLS_RSA_WITH_AES_128_CBC_SHA\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA\",\r\n            \"TLS_DHE_DSS_WITH_AES_256_CBC_SHA256\",\r\n            \"TLS_DHE_DSS_WITH_AES_128_CBC_SHA256\",\r\n            \"TLS_DHE_DSS_WITH_AES_256_CBC_SHA\",\r\n            \"TLS_DHE_DSS_WITH_AES_128_CBC_SHA\",\r\n            \"TLS_RSA_WITH_3DES_EDE_CBC_SHA\",\r\n            \"TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA\"\r\n          ],\r\n          \"minProtocolVersion\": \"TLSv1_0\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AppGwSslPolicy20170401\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups//providers/Microsoft.Network/ApplicationGatewayAvailableSslOptions/default/ApplicationGatewaySslPredefinedPolicy/AppGwSslPolicy20170401\",\r\n        \"properties\": {\r\n          \"cipherSuites\": [\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384\",\r\n            \"TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA\",\r\n            \"TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA\",\r\n            \"TLS_RSA_WITH_AES_256_GCM_SHA384\",\r\n            \"TLS_RSA_WITH_AES_128_GCM_SHA256\",\r\n            \"TLS_RSA_WITH_AES_256_CBC_SHA256\",\r\n            \"TLS_RSA_WITH_AES_128_CBC_SHA256\",\r\n            \"TLS_RSA_WITH_AES_256_CBC_SHA\",\r\n            \"TLS_RSA_WITH_AES_128_CBC_SHA\"\r\n          ],\r\n          \"minProtocolVersion\": \"TLSv1_0\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AppGwSslPolicy20170401S\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups//providers/Microsoft.Network/ApplicationGatewayAvailableSslOptions/default/ApplicationGatewaySslPredefinedPolicy/AppGwSslPolicy20170401S\",\r\n        \"properties\": {\r\n          \"cipherSuites\": [\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384\",\r\n            \"TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA\",\r\n            \"TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA\",\r\n            \"TLS_RSA_WITH_AES_256_GCM_SHA384\",\r\n            \"TLS_RSA_WITH_AES_128_GCM_SHA256\",\r\n            \"TLS_RSA_WITH_AES_256_CBC_SHA256\",\r\n            \"TLS_RSA_WITH_AES_128_CBC_SHA256\",\r\n            \"TLS_RSA_WITH_AES_256_CBC_SHA\",\r\n            \"TLS_RSA_WITH_AES_128_CBC_SHA\"\r\n          ],\r\n          \"minProtocolVersion\": \"TLSv1_2\"\r\n        }\r\n      }\r\n    ],\r\n    \"defaultPolicy\": \"AppGwSslPolicy20150501\",\r\n    \"availableCipherSuites\": [\r\n      \"TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384\",\r\n      \"TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256\",\r\n      \"TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA\",\r\n      \"TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA\",\r\n      \"TLS_DHE_RSA_WITH_AES_256_GCM_SHA384\",\r\n      \"TLS_DHE_RSA_WITH_AES_128_GCM_SHA256\",\r\n      \"TLS_DHE_RSA_WITH_AES_256_CBC_SHA\",\r\n      \"TLS_DHE_RSA_WITH_AES_128_CBC_SHA\",\r\n      \"TLS_RSA_WITH_AES_256_GCM_SHA384\",\r\n      \"TLS_RSA_WITH_AES_128_GCM_SHA256\",\r\n      \"TLS_RSA_WITH_AES_256_CBC_SHA256\",\r\n      \"TLS_RSA_WITH_AES_128_CBC_SHA256\",\r\n      \"TLS_RSA_WITH_AES_256_CBC_SHA\",\r\n      \"TLS_RSA_WITH_AES_128_CBC_SHA\",\r\n      \"TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384\",\r\n      \"TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256\",\r\n      \"TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384\",\r\n      \"TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256\",\r\n      \"TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA\",\r\n      \"TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA\",\r\n      \"TLS_DHE_DSS_WITH_AES_256_CBC_SHA256\",\r\n      \"TLS_DHE_DSS_WITH_AES_128_CBC_SHA256\",\r\n      \"TLS_DHE_DSS_WITH_AES_256_CBC_SHA\",\r\n      \"TLS_DHE_DSS_WITH_AES_128_CBC_SHA\",\r\n      \"TLS_RSA_WITH_3DES_EDE_CBC_SHA\",\r\n      \"TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA\"\r\n    ],\r\n    \"availableProtocols\": [\r\n      \"TLSv1_0\",\r\n      \"TLSv1_1\",\r\n      \"TLSv1_2\"\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5616',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a78d3d49-42d9-4919-93c3-5bcac872bb2f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': 'c5a0e343-f30f-4b9c-bb42-c96d3e2e8095',
  'x-ms-routing-request-id': 'WESTEUROPE:20170705T065012Z:c5a0e343-f30f-4b9c-bb42-c96d3e2e8095',
  date: 'Wed, 05 Jul 2017 06:50:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/applicationGatewayAvailableSslOptions/default?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"default\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups//providers/Microsoft.Network/ApplicationGatewayAvailableSslOptions/default\",\r\n  \"type\": \"Microsoft.Network/ApplicationGatewayAvailableSslOptions\",\r\n  \"properties\": {\r\n    \"predefinedPolicies\": [\r\n      {\r\n        \"name\": \"AppGwSslPolicy20150501\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups//providers/Microsoft.Network/ApplicationGatewayAvailableSslOptions/default/ApplicationGatewaySslPredefinedPolicy/AppGwSslPolicy20150501\",\r\n        \"properties\": {\r\n          \"cipherSuites\": [\r\n            \"TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384\",\r\n            \"TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256\",\r\n            \"TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA\",\r\n            \"TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA\",\r\n            \"TLS_DHE_RSA_WITH_AES_256_GCM_SHA384\",\r\n            \"TLS_DHE_RSA_WITH_AES_128_GCM_SHA256\",\r\n            \"TLS_DHE_RSA_WITH_AES_256_CBC_SHA\",\r\n            \"TLS_DHE_RSA_WITH_AES_128_CBC_SHA\",\r\n            \"TLS_RSA_WITH_AES_256_GCM_SHA384\",\r\n            \"TLS_RSA_WITH_AES_128_GCM_SHA256\",\r\n            \"TLS_RSA_WITH_AES_256_CBC_SHA256\",\r\n            \"TLS_RSA_WITH_AES_128_CBC_SHA256\",\r\n            \"TLS_RSA_WITH_AES_256_CBC_SHA\",\r\n            \"TLS_RSA_WITH_AES_128_CBC_SHA\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA\",\r\n            \"TLS_DHE_DSS_WITH_AES_256_CBC_SHA256\",\r\n            \"TLS_DHE_DSS_WITH_AES_128_CBC_SHA256\",\r\n            \"TLS_DHE_DSS_WITH_AES_256_CBC_SHA\",\r\n            \"TLS_DHE_DSS_WITH_AES_128_CBC_SHA\",\r\n            \"TLS_RSA_WITH_3DES_EDE_CBC_SHA\",\r\n            \"TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA\"\r\n          ],\r\n          \"minProtocolVersion\": \"TLSv1_0\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AppGwSslPolicy20170401\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups//providers/Microsoft.Network/ApplicationGatewayAvailableSslOptions/default/ApplicationGatewaySslPredefinedPolicy/AppGwSslPolicy20170401\",\r\n        \"properties\": {\r\n          \"cipherSuites\": [\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384\",\r\n            \"TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA\",\r\n            \"TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA\",\r\n            \"TLS_RSA_WITH_AES_256_GCM_SHA384\",\r\n            \"TLS_RSA_WITH_AES_128_GCM_SHA256\",\r\n            \"TLS_RSA_WITH_AES_256_CBC_SHA256\",\r\n            \"TLS_RSA_WITH_AES_128_CBC_SHA256\",\r\n            \"TLS_RSA_WITH_AES_256_CBC_SHA\",\r\n            \"TLS_RSA_WITH_AES_128_CBC_SHA\"\r\n          ],\r\n          \"minProtocolVersion\": \"TLSv1_0\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AppGwSslPolicy20170401S\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups//providers/Microsoft.Network/ApplicationGatewayAvailableSslOptions/default/ApplicationGatewaySslPredefinedPolicy/AppGwSslPolicy20170401S\",\r\n        \"properties\": {\r\n          \"cipherSuites\": [\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256\",\r\n            \"TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384\",\r\n            \"TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA\",\r\n            \"TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA\",\r\n            \"TLS_RSA_WITH_AES_256_GCM_SHA384\",\r\n            \"TLS_RSA_WITH_AES_128_GCM_SHA256\",\r\n            \"TLS_RSA_WITH_AES_256_CBC_SHA256\",\r\n            \"TLS_RSA_WITH_AES_128_CBC_SHA256\",\r\n            \"TLS_RSA_WITH_AES_256_CBC_SHA\",\r\n            \"TLS_RSA_WITH_AES_128_CBC_SHA\"\r\n          ],\r\n          \"minProtocolVersion\": \"TLSv1_2\"\r\n        }\r\n      }\r\n    ],\r\n    \"defaultPolicy\": \"AppGwSslPolicy20150501\",\r\n    \"availableCipherSuites\": [\r\n      \"TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384\",\r\n      \"TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256\",\r\n      \"TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA\",\r\n      \"TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA\",\r\n      \"TLS_DHE_RSA_WITH_AES_256_GCM_SHA384\",\r\n      \"TLS_DHE_RSA_WITH_AES_128_GCM_SHA256\",\r\n      \"TLS_DHE_RSA_WITH_AES_256_CBC_SHA\",\r\n      \"TLS_DHE_RSA_WITH_AES_128_CBC_SHA\",\r\n      \"TLS_RSA_WITH_AES_256_GCM_SHA384\",\r\n      \"TLS_RSA_WITH_AES_128_GCM_SHA256\",\r\n      \"TLS_RSA_WITH_AES_256_CBC_SHA256\",\r\n      \"TLS_RSA_WITH_AES_128_CBC_SHA256\",\r\n      \"TLS_RSA_WITH_AES_256_CBC_SHA\",\r\n      \"TLS_RSA_WITH_AES_128_CBC_SHA\",\r\n      \"TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384\",\r\n      \"TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256\",\r\n      \"TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384\",\r\n      \"TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256\",\r\n      \"TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA\",\r\n      \"TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA\",\r\n      \"TLS_DHE_DSS_WITH_AES_256_CBC_SHA256\",\r\n      \"TLS_DHE_DSS_WITH_AES_128_CBC_SHA256\",\r\n      \"TLS_DHE_DSS_WITH_AES_256_CBC_SHA\",\r\n      \"TLS_DHE_DSS_WITH_AES_128_CBC_SHA\",\r\n      \"TLS_RSA_WITH_3DES_EDE_CBC_SHA\",\r\n      \"TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA\"\r\n    ],\r\n    \"availableProtocols\": [\r\n      \"TLSv1_0\",\r\n      \"TLSv1_1\",\r\n      \"TLSv1_2\"\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5616',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a78d3d49-42d9-4919-93c3-5bcac872bb2f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': 'c5a0e343-f30f-4b9c-bb42-c96d3e2e8095',
  'x-ms-routing-request-id': 'WESTEUROPE:20170705T065012Z:c5a0e343-f30f-4b9c-bb42-c96d3e2e8095',
  date: 'Wed, 05 Jul 2017 06:50:11 GMT',
  connection: 'close' });
 return result; }]];
