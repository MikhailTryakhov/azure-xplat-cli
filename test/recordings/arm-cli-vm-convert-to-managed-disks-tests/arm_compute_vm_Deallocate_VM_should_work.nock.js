// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'ce4a7590-4722-4bcf-a2c6-e473e9f11778',
    name: 'Azure Storage DM Test',
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
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTestGVMConvert7239/providers/Microsoft.Compute/virtualMachines/xplatvmStSp5490?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"ead24ac5-be0a-4ab8-8d8d-47230d4edd57\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"16.04.0-LTS\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli8e04a3530765afd7-os-1487233207793\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplattstoragestsp1506.blob.core.windows.net/xplatteststoragecntstsp1846/cli8e04a3530765afd7-os-1487233207793.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmStSp5490\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\nHhHqofKrj938HHlBNpC5/LVh3w==\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTestGVMConvert7239/providers/Microsoft.Network/networkInterfaces/xplattestnicStSp8716\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplattstoragestsp1506.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTestGVMConvert7239/providers/Microsoft.Compute/virtualMachines/xplatvmStSp5490\",\r\n  \"name\": \"xplatvmStSp5490\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3261',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b23ceb60-6840-49b9-8277-180b46eaebe3_131316274155432550',
  'x-ms-request-id': '82aa3afa-c972-4cc9-b8a5-2e5471f6730a',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': 'be2ba0e9-9f6b-4572-b1b4-ead2eba3722c',
  'x-ms-routing-request-id': 'EASTASIA:20170216T082445Z:be2ba0e9-9f6b-4572-b1b4-ead2eba3722c',
  date: 'Thu, 16 Feb 2017 08:24:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTestGVMConvert7239/providers/Microsoft.Compute/virtualMachines/xplatvmStSp5490?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"ead24ac5-be0a-4ab8-8d8d-47230d4edd57\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"16.04.0-LTS\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli8e04a3530765afd7-os-1487233207793\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplattstoragestsp1506.blob.core.windows.net/xplatteststoragecntstsp1846/cli8e04a3530765afd7-os-1487233207793.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmStSp5490\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\nHhHqofKrj938HHlBNpC5/LVh3w==\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTestGVMConvert7239/providers/Microsoft.Network/networkInterfaces/xplattestnicStSp8716\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplattstoragestsp1506.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTestGVMConvert7239/providers/Microsoft.Compute/virtualMachines/xplatvmStSp5490\",\r\n  \"name\": \"xplatvmStSp5490\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3261',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b23ceb60-6840-49b9-8277-180b46eaebe3_131316274155432550',
  'x-ms-request-id': '82aa3afa-c972-4cc9-b8a5-2e5471f6730a',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': 'be2ba0e9-9f6b-4572-b1b4-ead2eba3722c',
  'x-ms-routing-request-id': 'EASTASIA:20170216T082445Z:be2ba0e9-9f6b-4572-b1b4-ead2eba3722c',
  date: 'Thu, 16 Feb 2017 08:24:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTestGVMConvert7239/providers/Microsoft.Compute/virtualMachines/xplatvmStSp5490/deallocate?api-version=2016-04-30-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/eastus/operations/46ad61b3-27bb-4914-915c-92dae2dd113d?monitor=true&api-version=2016-04-30-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/eastus/operations/46ad61b3-27bb-4914-915c-92dae2dd113d?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b23ceb60-6840-49b9-8277-180b46eaebe3_131316274155432550',
  'x-ms-request-id': '46ad61b3-27bb-4914-915c-92dae2dd113d',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '6e3e3316-6ea0-4099-8eef-f0a77b6f6cd1',
  'x-ms-routing-request-id': 'EASTASIA:20170216T082445Z:6e3e3316-6ea0-4099-8eef-f0a77b6f6cd1',
  date: 'Thu, 16 Feb 2017 08:24:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTestGVMConvert7239/providers/Microsoft.Compute/virtualMachines/xplatvmStSp5490/deallocate?api-version=2016-04-30-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/eastus/operations/46ad61b3-27bb-4914-915c-92dae2dd113d?monitor=true&api-version=2016-04-30-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/eastus/operations/46ad61b3-27bb-4914-915c-92dae2dd113d?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b23ceb60-6840-49b9-8277-180b46eaebe3_131316274155432550',
  'x-ms-request-id': '46ad61b3-27bb-4914-915c-92dae2dd113d',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '6e3e3316-6ea0-4099-8eef-f0a77b6f6cd1',
  'x-ms-routing-request-id': 'EASTASIA:20170216T082445Z:6e3e3316-6ea0-4099-8eef-f0a77b6f6cd1',
  date: 'Thu, 16 Feb 2017 08:24:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/eastus/operations/46ad61b3-27bb-4914-915c-92dae2dd113d?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-16T08:24:44.3927433+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"46ad61b3-27bb-4914-915c-92dae2dd113d\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b23ceb60-6840-49b9-8277-180b46eaebe3_131316274155432550',
  'x-ms-request-id': 'baec4b1f-2709-4be7-93c3-28738675e3c7',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '67ac7b64-415f-4209-b1fa-e6410adfe82d',
  'x-ms-routing-request-id': 'EASTASIA:20170216T082516Z:67ac7b64-415f-4209-b1fa-e6410adfe82d',
  date: 'Thu, 16 Feb 2017 08:25:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/eastus/operations/46ad61b3-27bb-4914-915c-92dae2dd113d?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-16T08:24:44.3927433+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"46ad61b3-27bb-4914-915c-92dae2dd113d\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b23ceb60-6840-49b9-8277-180b46eaebe3_131316274155432550',
  'x-ms-request-id': 'baec4b1f-2709-4be7-93c3-28738675e3c7',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '67ac7b64-415f-4209-b1fa-e6410adfe82d',
  'x-ms-routing-request-id': 'EASTASIA:20170216T082516Z:67ac7b64-415f-4209-b1fa-e6410adfe82d',
  date: 'Thu, 16 Feb 2017 08:25:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/eastus/operations/46ad61b3-27bb-4914-915c-92dae2dd113d?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-16T08:24:44.3927433+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"46ad61b3-27bb-4914-915c-92dae2dd113d\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b23ceb60-6840-49b9-8277-180b46eaebe3_131316274155432550',
  'x-ms-request-id': '1046dc5d-4ee1-4918-af1f-840656dde744',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-correlation-request-id': '72a5112f-db94-42ba-852e-79fe1fc14f28',
  'x-ms-routing-request-id': 'EASTASIA:20170216T082547Z:72a5112f-db94-42ba-852e-79fe1fc14f28',
  date: 'Thu, 16 Feb 2017 08:25:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/eastus/operations/46ad61b3-27bb-4914-915c-92dae2dd113d?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-16T08:24:44.3927433+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"46ad61b3-27bb-4914-915c-92dae2dd113d\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b23ceb60-6840-49b9-8277-180b46eaebe3_131316274155432550',
  'x-ms-request-id': '1046dc5d-4ee1-4918-af1f-840656dde744',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-correlation-request-id': '72a5112f-db94-42ba-852e-79fe1fc14f28',
  'x-ms-routing-request-id': 'EASTASIA:20170216T082547Z:72a5112f-db94-42ba-852e-79fe1fc14f28',
  date: 'Thu, 16 Feb 2017 08:25:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/eastus/operations/46ad61b3-27bb-4914-915c-92dae2dd113d?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-16T08:24:44.3927433+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"46ad61b3-27bb-4914-915c-92dae2dd113d\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b23ceb60-6840-49b9-8277-180b46eaebe3_131316274155432550',
  'x-ms-request-id': '7812e651-96de-4e57-9fe7-2d84bb5d0c97',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': 'cdd0eac8-6948-4fc1-a5ba-7dcbb24a9777',
  'x-ms-routing-request-id': 'EASTASIA:20170216T082618Z:cdd0eac8-6948-4fc1-a5ba-7dcbb24a9777',
  date: 'Thu, 16 Feb 2017 08:26:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/eastus/operations/46ad61b3-27bb-4914-915c-92dae2dd113d?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-16T08:24:44.3927433+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"46ad61b3-27bb-4914-915c-92dae2dd113d\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b23ceb60-6840-49b9-8277-180b46eaebe3_131316274155432550',
  'x-ms-request-id': '7812e651-96de-4e57-9fe7-2d84bb5d0c97',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': 'cdd0eac8-6948-4fc1-a5ba-7dcbb24a9777',
  'x-ms-routing-request-id': 'EASTASIA:20170216T082618Z:cdd0eac8-6948-4fc1-a5ba-7dcbb24a9777',
  date: 'Thu, 16 Feb 2017 08:26:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/eastus/operations/46ad61b3-27bb-4914-915c-92dae2dd113d?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-16T08:24:44.3927433+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"46ad61b3-27bb-4914-915c-92dae2dd113d\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b23ceb60-6840-49b9-8277-180b46eaebe3_131316274155432550',
  'x-ms-request-id': 'b43c3ab5-0f8f-4d96-912a-416679fc647d',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14978',
  'x-ms-correlation-request-id': 'e33fe050-ada1-4f80-99b5-389917b96852',
  'x-ms-routing-request-id': 'EASTASIA:20170216T082649Z:e33fe050-ada1-4f80-99b5-389917b96852',
  date: 'Thu, 16 Feb 2017 08:26:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/eastus/operations/46ad61b3-27bb-4914-915c-92dae2dd113d?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-16T08:24:44.3927433+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"46ad61b3-27bb-4914-915c-92dae2dd113d\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b23ceb60-6840-49b9-8277-180b46eaebe3_131316274155432550',
  'x-ms-request-id': 'b43c3ab5-0f8f-4d96-912a-416679fc647d',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14978',
  'x-ms-correlation-request-id': 'e33fe050-ada1-4f80-99b5-389917b96852',
  'x-ms-routing-request-id': 'EASTASIA:20170216T082649Z:e33fe050-ada1-4f80-99b5-389917b96852',
  date: 'Thu, 16 Feb 2017 08:26:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/eastus/operations/46ad61b3-27bb-4914-915c-92dae2dd113d?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-16T08:24:44.3927433+00:00\",\r\n  \"endTime\": \"2017-02-16T08:26:55.5068109+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"46ad61b3-27bb-4914-915c-92dae2dd113d\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b23ceb60-6840-49b9-8277-180b46eaebe3_131316274155432550',
  'x-ms-request-id': '5c12aa1a-cde3-4d9c-9cbf-5e1e1d9a4ed3',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-correlation-request-id': '9deacfa1-36c3-42b9-be82-d3392d4ab966',
  'x-ms-routing-request-id': 'EASTASIA:20170216T082720Z:9deacfa1-36c3-42b9-be82-d3392d4ab966',
  date: 'Thu, 16 Feb 2017 08:27:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/eastus/operations/46ad61b3-27bb-4914-915c-92dae2dd113d?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-16T08:24:44.3927433+00:00\",\r\n  \"endTime\": \"2017-02-16T08:26:55.5068109+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"46ad61b3-27bb-4914-915c-92dae2dd113d\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'b23ceb60-6840-49b9-8277-180b46eaebe3_131316274155432550',
  'x-ms-request-id': '5c12aa1a-cde3-4d9c-9cbf-5e1e1d9a4ed3',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-correlation-request-id': '9deacfa1-36c3-42b9-be82-d3392d4ab966',
  'x-ms-routing-request-id': 'EASTASIA:20170216T082720Z:9deacfa1-36c3-42b9-be82-d3392d4ab966',
  date: 'Thu, 16 Feb 2017 08:27:19 GMT',
  connection: 'close' });
 return result; }]];