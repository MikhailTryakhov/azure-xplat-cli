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
  process.env['AZURE_ARM_IOTHUB_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733?api-version=2016-02-03', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733\",\"name\":\"xplattestiothub6733\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"2c224e7e-3ef5-431d-a57b-e71f4662e3a6\",\"resourcegroup\":\"xplattestadlsrg01\",\"properties\":{\"state\":\"Activating\",\"provisioningState\":\"Accepted\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '836',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733/operationResults/ZmYzMmQ5MjUtZmQwYS00ODNmLWEzZWEtNmI2YTNlOTdmZmY2?api-version=2016-02-03&asyncinfo',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '4999',
  'x-ms-request-id': '1b25a51b-db46-4bfc-952d-a509e58fe3d8',
  'x-ms-correlation-request-id': '1b25a51b-db46-4bfc-952d-a509e58fe3d8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170410T123250Z:1b25a51b-db46-4bfc-952d-a509e58fe3d8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 10 Apr 2017 12:32:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733?api-version=2016-02-03', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733\",\"name\":\"xplattestiothub6733\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"2c224e7e-3ef5-431d-a57b-e71f4662e3a6\",\"resourcegroup\":\"xplattestadlsrg01\",\"properties\":{\"state\":\"Activating\",\"provisioningState\":\"Accepted\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '836',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733/operationResults/ZmYzMmQ5MjUtZmQwYS00ODNmLWEzZWEtNmI2YTNlOTdmZmY2?api-version=2016-02-03&asyncinfo',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '4999',
  'x-ms-request-id': '1b25a51b-db46-4bfc-952d-a509e58fe3d8',
  'x-ms-correlation-request-id': '1b25a51b-db46-4bfc-952d-a509e58fe3d8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170410T123250Z:1b25a51b-db46-4bfc-952d-a509e58fe3d8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 10 Apr 2017 12:32:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733/operationResults/ZmYzMmQ5MjUtZmQwYS00ODNmLWEzZWEtNmI2YTNlOTdmZmY2?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': 'a68322ca-21be-46be-8d57-4a36b79f6f7e',
  'x-ms-correlation-request-id': 'a68322ca-21be-46be-8d57-4a36b79f6f7e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170410T123321Z:a68322ca-21be-46be-8d57-4a36b79f6f7e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 10 Apr 2017 12:33:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733/operationResults/ZmYzMmQ5MjUtZmQwYS00ODNmLWEzZWEtNmI2YTNlOTdmZmY2?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': 'a68322ca-21be-46be-8d57-4a36b79f6f7e',
  'x-ms-correlation-request-id': 'a68322ca-21be-46be-8d57-4a36b79f6f7e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170410T123321Z:a68322ca-21be-46be-8d57-4a36b79f6f7e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 10 Apr 2017 12:33:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733/operationResults/ZmYzMmQ5MjUtZmQwYS00ODNmLWEzZWEtNmI2YTNlOTdmZmY2?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '6ae3af8a-792d-4dc1-95b4-398b034e7c44',
  'x-ms-correlation-request-id': '6ae3af8a-792d-4dc1-95b4-398b034e7c44',
  'x-ms-routing-request-id': 'WESTEUROPE:20170410T123352Z:6ae3af8a-792d-4dc1-95b4-398b034e7c44',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 10 Apr 2017 12:33:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733/operationResults/ZmYzMmQ5MjUtZmQwYS00ODNmLWEzZWEtNmI2YTNlOTdmZmY2?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '6ae3af8a-792d-4dc1-95b4-398b034e7c44',
  'x-ms-correlation-request-id': '6ae3af8a-792d-4dc1-95b4-398b034e7c44',
  'x-ms-routing-request-id': 'WESTEUROPE:20170410T123352Z:6ae3af8a-792d-4dc1-95b4-398b034e7c44',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 10 Apr 2017 12:33:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733/operationResults/ZmYzMmQ5MjUtZmQwYS00ODNmLWEzZWEtNmI2YTNlOTdmZmY2?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '5cd40eac-3507-48c8-9647-21cba0b3334a',
  'x-ms-correlation-request-id': '5cd40eac-3507-48c8-9647-21cba0b3334a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170410T123423Z:5cd40eac-3507-48c8-9647-21cba0b3334a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 10 Apr 2017 12:34:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733/operationResults/ZmYzMmQ5MjUtZmQwYS00ODNmLWEzZWEtNmI2YTNlOTdmZmY2?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '5cd40eac-3507-48c8-9647-21cba0b3334a',
  'x-ms-correlation-request-id': '5cd40eac-3507-48c8-9647-21cba0b3334a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170410T123423Z:5cd40eac-3507-48c8-9647-21cba0b3334a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 10 Apr 2017 12:34:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733/operationResults/ZmYzMmQ5MjUtZmQwYS00ODNmLWEzZWEtNmI2YTNlOTdmZmY2?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': '874de313-a98f-4145-bc55-44b53d28305f',
  'x-ms-correlation-request-id': '874de313-a98f-4145-bc55-44b53d28305f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170410T123454Z:874de313-a98f-4145-bc55-44b53d28305f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 10 Apr 2017 12:34:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733/operationResults/ZmYzMmQ5MjUtZmQwYS00ODNmLWEzZWEtNmI2YTNlOTdmZmY2?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': '874de313-a98f-4145-bc55-44b53d28305f',
  'x-ms-correlation-request-id': '874de313-a98f-4145-bc55-44b53d28305f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170410T123454Z:874de313-a98f-4145-bc55-44b53d28305f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 10 Apr 2017 12:34:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733/operationResults/ZmYzMmQ5MjUtZmQwYS00ODNmLWEzZWEtNmI2YTNlOTdmZmY2?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': 'a43906ac-da39-4405-9f98-e54a26845886',
  'x-ms-correlation-request-id': 'a43906ac-da39-4405-9f98-e54a26845886',
  'x-ms-routing-request-id': 'WESTEUROPE:20170410T123525Z:a43906ac-da39-4405-9f98-e54a26845886',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 10 Apr 2017 12:35:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733/operationResults/ZmYzMmQ5MjUtZmQwYS00ODNmLWEzZWEtNmI2YTNlOTdmZmY2?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': 'a43906ac-da39-4405-9f98-e54a26845886',
  'x-ms-correlation-request-id': 'a43906ac-da39-4405-9f98-e54a26845886',
  'x-ms-routing-request-id': 'WESTEUROPE:20170410T123525Z:a43906ac-da39-4405-9f98-e54a26845886',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 10 Apr 2017 12:35:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733/operationResults/ZmYzMmQ5MjUtZmQwYS00ODNmLWEzZWEtNmI2YTNlOTdmZmY2?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': 'cbf87ddf-25a4-4dce-bfb5-542d5ead9e7a',
  'x-ms-correlation-request-id': 'cbf87ddf-25a4-4dce-bfb5-542d5ead9e7a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170410T123556Z:cbf87ddf-25a4-4dce-bfb5-542d5ead9e7a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 10 Apr 2017 12:35:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733/operationResults/ZmYzMmQ5MjUtZmQwYS00ODNmLWEzZWEtNmI2YTNlOTdmZmY2?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': 'cbf87ddf-25a4-4dce-bfb5-542d5ead9e7a',
  'x-ms-correlation-request-id': 'cbf87ddf-25a4-4dce-bfb5-542d5ead9e7a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170410T123556Z:cbf87ddf-25a4-4dce-bfb5-542d5ead9e7a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 10 Apr 2017 12:35:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733/operationResults/ZmYzMmQ5MjUtZmQwYS00ODNmLWEzZWEtNmI2YTNlOTdmZmY2?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': '514dcc77-7e0c-4240-b4a1-f031987f05f0',
  'x-ms-correlation-request-id': '514dcc77-7e0c-4240-b4a1-f031987f05f0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170410T123627Z:514dcc77-7e0c-4240-b4a1-f031987f05f0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 10 Apr 2017 12:36:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733/operationResults/ZmYzMmQ5MjUtZmQwYS00ODNmLWEzZWEtNmI2YTNlOTdmZmY2?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': '514dcc77-7e0c-4240-b4a1-f031987f05f0',
  'x-ms-correlation-request-id': '514dcc77-7e0c-4240-b4a1-f031987f05f0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170410T123627Z:514dcc77-7e0c-4240-b4a1-f031987f05f0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 10 Apr 2017 12:36:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733/operationResults/ZmYzMmQ5MjUtZmQwYS00ODNmLWEzZWEtNmI2YTNlOTdmZmY2?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '5c83d280-636a-468f-a8e8-35d525b90fd4',
  'x-ms-correlation-request-id': '5c83d280-636a-468f-a8e8-35d525b90fd4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170410T123658Z:5c83d280-636a-468f-a8e8-35d525b90fd4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 10 Apr 2017 12:36:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733/operationResults/ZmYzMmQ5MjUtZmQwYS00ODNmLWEzZWEtNmI2YTNlOTdmZmY2?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '5c83d280-636a-468f-a8e8-35d525b90fd4',
  'x-ms-correlation-request-id': '5c83d280-636a-468f-a8e8-35d525b90fd4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170410T123658Z:5c83d280-636a-468f-a8e8-35d525b90fd4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 10 Apr 2017 12:36:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733/operationResults/ZmYzMmQ5MjUtZmQwYS00ODNmLWEzZWEtNmI2YTNlOTdmZmY2?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': 'bad99b46-2657-4c40-bd38-c139e388d57c',
  'x-ms-correlation-request-id': 'bad99b46-2657-4c40-bd38-c139e388d57c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170410T123728Z:bad99b46-2657-4c40-bd38-c139e388d57c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 10 Apr 2017 12:37:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733/operationResults/ZmYzMmQ5MjUtZmQwYS00ODNmLWEzZWEtNmI2YTNlOTdmZmY2?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': 'bad99b46-2657-4c40-bd38-c139e388d57c',
  'x-ms-correlation-request-id': 'bad99b46-2657-4c40-bd38-c139e388d57c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170410T123728Z:bad99b46-2657-4c40-bd38-c139e388d57c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 10 Apr 2017 12:37:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733/operationResults/ZmYzMmQ5MjUtZmQwYS00ODNmLWEzZWEtNmI2YTNlOTdmZmY2?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': 'ba55c7e0-6b4a-414b-8415-6819db99fcbd',
  'x-ms-correlation-request-id': 'ba55c7e0-6b4a-414b-8415-6819db99fcbd',
  'x-ms-routing-request-id': 'WESTEUROPE:20170410T123759Z:ba55c7e0-6b4a-414b-8415-6819db99fcbd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 10 Apr 2017 12:37:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733/operationResults/ZmYzMmQ5MjUtZmQwYS00ODNmLWEzZWEtNmI2YTNlOTdmZmY2?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': 'ba55c7e0-6b4a-414b-8415-6819db99fcbd',
  'x-ms-correlation-request-id': 'ba55c7e0-6b4a-414b-8415-6819db99fcbd',
  'x-ms-routing-request-id': 'WESTEUROPE:20170410T123759Z:ba55c7e0-6b4a-414b-8415-6819db99fcbd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 10 Apr 2017 12:37:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733\",\"name\":\"xplattestiothub6733\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"2c224e7e-3ef5-431d-a57b-e71f4662e3a6\",\"resourcegroup\":\"xplattestadlsrg01\",\"etag\":\"AAAAAADVQek=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"ipFilterRules\":[],\"hostName\":\"xplattestiothub6733.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub6733\",\"endpoint\":\"sb://iothub-ns-xplattesti-143569-e31eb9e3c8.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub6733-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-143569-e31eb9e3c8.servicebus.windows.net/\"}},\"routing\":{\"endpoints\":{\"serviceBusQueues\":[],\"serviceBusTopics\":[],\"eventHubs\":[]},\"routes\":[],\"fallbackRoute\":{\"name\":\"$fallback\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"events\"],\"isEnabled\":true}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\",\"Routes\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1865',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': 'a19dfe71-904f-41a8-899f-07e9ef5d8e2b',
  'x-ms-correlation-request-id': 'a19dfe71-904f-41a8-899f-07e9ef5d8e2b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170410T123800Z:a19dfe71-904f-41a8-899f-07e9ef5d8e2b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 10 Apr 2017 12:37:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733\",\"name\":\"xplattestiothub6733\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"2c224e7e-3ef5-431d-a57b-e71f4662e3a6\",\"resourcegroup\":\"xplattestadlsrg01\",\"etag\":\"AAAAAADVQek=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"ipFilterRules\":[],\"hostName\":\"xplattestiothub6733.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub6733\",\"endpoint\":\"sb://iothub-ns-xplattesti-143569-e31eb9e3c8.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub6733-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-143569-e31eb9e3c8.servicebus.windows.net/\"}},\"routing\":{\"endpoints\":{\"serviceBusQueues\":[],\"serviceBusTopics\":[],\"eventHubs\":[]},\"routes\":[],\"fallbackRoute\":{\"name\":\"$fallback\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"events\"],\"isEnabled\":true}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\",\"Routes\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1865',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': 'a19dfe71-904f-41a8-899f-07e9ef5d8e2b',
  'x-ms-correlation-request-id': 'a19dfe71-904f-41a8-899f-07e9ef5d8e2b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170410T123800Z:a19dfe71-904f-41a8-899f-07e9ef5d8e2b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 10 Apr 2017 12:37:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733\",\"name\":\"xplattestiothub6733\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"2c224e7e-3ef5-431d-a57b-e71f4662e3a6\",\"resourcegroup\":\"xplattestadlsrg01\",\"etag\":\"AAAAAADVQek=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"ipFilterRules\":[],\"hostName\":\"xplattestiothub6733.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub6733\",\"endpoint\":\"sb://iothub-ns-xplattesti-143569-e31eb9e3c8.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub6733-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-143569-e31eb9e3c8.servicebus.windows.net/\"}},\"routing\":{\"endpoints\":{\"serviceBusQueues\":[],\"serviceBusTopics\":[],\"eventHubs\":[]},\"routes\":[],\"fallbackRoute\":{\"name\":\"$fallback\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"events\"],\"isEnabled\":true}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\",\"Routes\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1865',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': '8a0f0e50-2087-4207-8f04-12496835bfeb',
  'x-ms-correlation-request-id': '8a0f0e50-2087-4207-8f04-12496835bfeb',
  'x-ms-routing-request-id': 'WESTEUROPE:20170410T123802Z:8a0f0e50-2087-4207-8f04-12496835bfeb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 10 Apr 2017 12:38:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrg01/providers/Microsoft.Devices/IotHubs/xplattestiothub6733\",\"name\":\"xplattestiothub6733\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"2c224e7e-3ef5-431d-a57b-e71f4662e3a6\",\"resourcegroup\":\"xplattestadlsrg01\",\"etag\":\"AAAAAADVQek=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"ipFilterRules\":[],\"hostName\":\"xplattestiothub6733.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub6733\",\"endpoint\":\"sb://iothub-ns-xplattesti-143569-e31eb9e3c8.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub6733-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-143569-e31eb9e3c8.servicebus.windows.net/\"}},\"routing\":{\"endpoints\":{\"serviceBusQueues\":[],\"serviceBusTopics\":[],\"eventHubs\":[]},\"routes\":[],\"fallbackRoute\":{\"name\":\"$fallback\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"events\"],\"isEnabled\":true}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\",\"Routes\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1865',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': '8a0f0e50-2087-4207-8f04-12496835bfeb',
  'x-ms-correlation-request-id': '8a0f0e50-2087-4207-8f04-12496835bfeb',
  'x-ms-routing-request-id': 'WESTEUROPE:20170410T123802Z:8a0f0e50-2087-4207-8f04-12496835bfeb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 10 Apr 2017 12:38:01 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xplattestiothub6733'];};