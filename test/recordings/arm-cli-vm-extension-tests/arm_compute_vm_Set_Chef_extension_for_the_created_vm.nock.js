// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99',
    name: 'Pay-As-You-Go',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: 'abeb039a-5e53-40ee-b48f-0c99bdc99d15',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/resourceGroups/xplatTestGExtension5744/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"6d43571a-30d7-4feb-95c7-15857e316256\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n        \"offer\": \"WindowsServerEssentials\",\r\n        \"sku\": \"WindowsServerEssentials\",\r\n        \"version\": \"1.0.20131018\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"cli7d8e6def8fd481a0-os-1451457868815\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext8005.blob.core.windows.net/xplatstoragecntext3701/cli7d8e6def8fd481a0-os-1451457868815.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/resourceGroups/xplatTestGExtension5744/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext8005.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Azure.Diagnostics\",\r\n        \"type\": \"IaaSDiagnostics\",\r\n        \"typeHandlerVersion\": \"1.4\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {\"xmlCfg\":\"PFdhZENmZz48RGlhZ25vc3RpY01vbml0b3JDb25maWd1cmF0aW9uIG92ZXJhbGxRdW90YUluTUI9IjI1MDAwIj48UGVyZm9ybWFuY2VDb3VudGVycyBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSI+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFByb2Nlc3NvcihfVG90YWwpXCUgUHJvY2Vzc29yIFRpbWUiIHNhbXBsZVJhdGU9IlBUMU0iIHVuaXQ9InBlcmNlbnQiLz48L1BlcmZvcm1hbmNlQ291bnRlcnM+PFdpbmRvd3NFdmVudExvZyBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSI+PERhdGFTb3VyY2UgbmFtZT0iU3lzdGVtISoiLz48L1dpbmRvd3NFdmVudExvZz48TWV0cmljcyByZXNvdXJjZUlkPSIvc3Vic2NyaXB0aW9ucy9lMDBkMmIzZi0zYjk0LTRkZmMtYWU4ZS1jYTM0YzhiYTFhOTkvcmVzb3VyY2VHcm91cHMveHBsYXRUZXN0R0V4dGVuc2lvbjU3NDQvcHJvdmlkZXJzL01pY3Jvc29mdC5Db21wdXRlL3ZpcnR1YWxNYWNoaW5lcy94cGxhdHZtRXh0Ij48TWV0cmljQWdncmVnYXRpb24gc2NoZWR1bGVkVHJhbnNmZXJQZXJpb2Q9IlBUMUgiLz48TWV0cmljQWdncmVnYXRpb24gc2NoZWR1bGVkVHJhbnNmZXJQZXJpb2Q9IlBUMU0iLz48L01ldHJpY3M+PC9EaWFnbm9zdGljTW9uaXRvckNvbmZpZ3VyYXRpb24+PC9XYWRDZmc+\",\"storageAccount\":\"xplatstoragext8005\"},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/resourceGroups/xplatTestGExtension5744/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/IaaSDiagnostics\",\r\n      \"name\": \"IaaSDiagnostics\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\"\r\n    },\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"VMAccessAgent\",\r\n        \"typeHandlerVersion\": \"2.0\",\r\n        \"autoUpgradeMinorVersion\": false,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/resourceGroups/xplatTestGExtension5744/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/VMAccessAgent\",\r\n      \"name\": \"VMAccessAgent\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/resourceGroups/xplatTestGExtension5744/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3848',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_130953002483951077',
  'x-ms-request-id': '211aa415-ddd5-4a33-ba80-099757fed977',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '054f58c2-dd9c-4aa1-9bd6-480c099a39b4',
  'x-ms-routing-request-id': 'WESTUS:20151230T070318Z:054f58c2-dd9c-4aa1-9bd6-480c099a39b4',
  date: 'Wed, 30 Dec 2015 07:03:17 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/publishers/Chef.Bootstrap.WindowsAzure/artifacttypes/vmextension/types/ChefClient/versions?api-version=2015-06-15')
  .reply(200, "[\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"11.10.4\",\r\n    \"id\": \"/Subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/Providers/Microsoft.Compute/Locations/eastus/Publishers/Chef.Bootstrap.WindowsAzure/ArtifactTypes/VMExtension/Types/ChefClient/Versions/11.10.4\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"11.12.0.0\",\r\n    \"id\": \"/Subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/Providers/Microsoft.Compute/Locations/eastus/Publishers/Chef.Bootstrap.WindowsAzure/ArtifactTypes/VMExtension/Types/ChefClient/Versions/11.12.0.0\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"11.18.6.2\",\r\n    \"id\": \"/Subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/Providers/Microsoft.Compute/Locations/eastus/Publishers/Chef.Bootstrap.WindowsAzure/ArtifactTypes/VMExtension/Types/ChefClient/Versions/11.18.6.2\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"1207.12.3.0\",\r\n    \"id\": \"/Subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/Providers/Microsoft.Compute/Locations/eastus/Publishers/Chef.Bootstrap.WindowsAzure/ArtifactTypes/VMExtension/Types/ChefClient/Versions/1207.12.3.0\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"1210.12.100.1000\",\r\n    \"id\": \"/Subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/Providers/Microsoft.Compute/Locations/eastus/Publishers/Chef.Bootstrap.WindowsAzure/ArtifactTypes/VMExtension/Types/ChefClient/Versions/1210.12.100.1000\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"1210.12.4.1000\",\r\n    \"id\": \"/Subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/Providers/Microsoft.Compute/Locations/eastus/Publishers/Chef.Bootstrap.WindowsAzure/ArtifactTypes/VMExtension/Types/ChefClient/Versions/1210.12.4.1000\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1677',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'f049f7c6-4574-4cb8-9d04-88b439353ae4',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '304357ff-ceb0-4bff-970d-3016026ad14a',
  'x-ms-routing-request-id': 'WESTUS:20151230T070318Z:304357ff-ceb0-4bff-970d-3016026ad14a',
  date: 'Wed, 30 Dec 2015 07:03:18 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/resourceGroups/xplatTestGExtension5744/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/ChefClient?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Chef.Bootstrap.WindowsAzure\",\r\n    \"type\": \"ChefClient\",\r\n    \"typeHandlerVersion\": \"1210.12\",\r\n    \"autoUpgradeMinorVersion\": false,\r\n    \"settings\": {\"client_rb\":\"log_level        :info\\nlog_location     \\\"c:/chef/logs\\\"\\nchef_server_url  \\\"https://api.opscode.com/organizations/orgname\\\"\\nvalidation_client_name \\t\\\"orgname-validator\\\"\",\"autoUpdateClient\":\"false\",\"deleteChefConfig\":\"false\"},\r\n    \"provisioningState\": \"Creating\"\r\n  },\r\n  \"id\": \"/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/resourceGroups/xplatTestGExtension5744/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/ChefClient\",\r\n  \"name\": \"ChefClient\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '769',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/14eacdd1-94eb-4f49-ae31-326235a54b69?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_130953002483951077',
  'x-ms-request-id': '14eacdd1-94eb-4f49-ae31-326235a54b69',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': 'a2759d39-a214-4531-8b30-582a17d94391',
  'x-ms-routing-request-id': 'WESTUS:20151230T070321Z:a2759d39-a214-4531-8b30-582a17d94391',
  date: 'Wed, 30 Dec 2015 07:03:21 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/14eacdd1-94eb-4f49-ae31-326235a54b69?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"14eacdd1-94eb-4f49-ae31-326235a54b69\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-30T07:03:18.5512028+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_130953002483951077',
  'x-ms-request-id': 'e4719d74-42ae-44a8-8004-489c0667c4bc',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14930',
  'x-ms-correlation-request-id': 'cbcce0f8-05fd-4947-8f82-95bc0f684bd3',
  'x-ms-routing-request-id': 'WESTUS:20151230T070351Z:cbcce0f8-05fd-4947-8f82-95bc0f684bd3',
  date: 'Wed, 30 Dec 2015 07:03:51 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/14eacdd1-94eb-4f49-ae31-326235a54b69?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"14eacdd1-94eb-4f49-ae31-326235a54b69\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-30T07:03:18.5512028+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_130953002483951077',
  'x-ms-request-id': 'e929e06e-ba8a-4e4a-99bf-ff7d57912c81',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14929',
  'x-ms-correlation-request-id': '81d5123a-64c3-4eeb-8200-bd5f5b4392e0',
  'x-ms-routing-request-id': 'WESTUS:20151230T070421Z:81d5123a-64c3-4eeb-8200-bd5f5b4392e0',
  date: 'Wed, 30 Dec 2015 07:04:21 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/14eacdd1-94eb-4f49-ae31-326235a54b69?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"14eacdd1-94eb-4f49-ae31-326235a54b69\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-30T07:03:18.5512028+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_130953002483951077',
  'x-ms-request-id': '1447bb5e-d15c-40e5-9f2d-c8c0e08c5043',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14928',
  'x-ms-correlation-request-id': '9b6c5dff-acc9-41af-8e80-030c896e8f5d',
  'x-ms-routing-request-id': 'WESTUS:20151230T070451Z:9b6c5dff-acc9-41af-8e80-030c896e8f5d',
  date: 'Wed, 30 Dec 2015 07:04:51 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/14eacdd1-94eb-4f49-ae31-326235a54b69?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"14eacdd1-94eb-4f49-ae31-326235a54b69\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-30T07:03:18.5512028+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_130953002483951077',
  'x-ms-request-id': '122ffd7c-03f2-4824-8d44-280299c810eb',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14927',
  'x-ms-correlation-request-id': '815c9c4f-796a-4a75-9bc2-9df47a6616e1',
  'x-ms-routing-request-id': 'WESTUS:20151230T070521Z:815c9c4f-796a-4a75-9bc2-9df47a6616e1',
  date: 'Wed, 30 Dec 2015 07:05:21 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/14eacdd1-94eb-4f49-ae31-326235a54b69?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"14eacdd1-94eb-4f49-ae31-326235a54b69\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-30T07:03:18.5512028+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_130953002483951077',
  'x-ms-request-id': 'c928a4a1-f4a7-46da-b88f-f279e8470528',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14926',
  'x-ms-correlation-request-id': 'b9a98d14-4db4-4f27-b11b-f7f35477fa6a',
  'x-ms-routing-request-id': 'WESTUS:20151230T070552Z:b9a98d14-4db4-4f27-b11b-f7f35477fa6a',
  date: 'Wed, 30 Dec 2015 07:05:51 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/14eacdd1-94eb-4f49-ae31-326235a54b69?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"14eacdd1-94eb-4f49-ae31-326235a54b69\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-30T07:03:18.5512028+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_130953002483951077',
  'x-ms-request-id': '4f81e718-ff25-4479-996d-1c2e0c6907d3',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14925',
  'x-ms-correlation-request-id': '240fd99e-8e72-4767-b2bd-887b23f9ddcd',
  'x-ms-routing-request-id': 'WESTUS:20151230T070622Z:240fd99e-8e72-4767-b2bd-887b23f9ddcd',
  date: 'Wed, 30 Dec 2015 07:06:22 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/14eacdd1-94eb-4f49-ae31-326235a54b69?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"14eacdd1-94eb-4f49-ae31-326235a54b69\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-30T07:03:18.5512028+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_130953002483951077',
  'x-ms-request-id': 'c0ed0180-a09f-4ca4-8150-dad45dbc481d',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14924',
  'x-ms-correlation-request-id': 'b2934db7-47dd-4428-913d-dac8a873260d',
  'x-ms-routing-request-id': 'WESTUS:20151230T070652Z:b2934db7-47dd-4428-913d-dac8a873260d',
  date: 'Wed, 30 Dec 2015 07:06:51 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/14eacdd1-94eb-4f49-ae31-326235a54b69?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"14eacdd1-94eb-4f49-ae31-326235a54b69\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-30T07:03:18.5512028+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_130953002483951077',
  'x-ms-request-id': '78810aac-926d-4b1f-8b9f-254480d2ca7d',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14923',
  'x-ms-correlation-request-id': '650bcbad-8acc-49ae-b633-924d38cd654b',
  'x-ms-routing-request-id': 'WESTUS:20151230T070722Z:650bcbad-8acc-49ae-b633-924d38cd654b',
  date: 'Wed, 30 Dec 2015 07:07:22 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/14eacdd1-94eb-4f49-ae31-326235a54b69?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"14eacdd1-94eb-4f49-ae31-326235a54b69\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-30T07:03:18.5512028+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_130953002483951077',
  'x-ms-request-id': '62a0161e-a9f6-4661-9908-269413c41d9d',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14922',
  'x-ms-correlation-request-id': '03ef5994-af47-4519-9ea9-ba276aabb4ea',
  'x-ms-routing-request-id': 'WESTUS:20151230T070752Z:03ef5994-af47-4519-9ea9-ba276aabb4ea',
  date: 'Wed, 30 Dec 2015 07:07:52 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/14eacdd1-94eb-4f49-ae31-326235a54b69?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"14eacdd1-94eb-4f49-ae31-326235a54b69\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-30T07:03:18.5512028+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_130953002483951077',
  'x-ms-request-id': '567cf521-2f4c-4ba2-be3e-af09cbcc700d',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14921',
  'x-ms-correlation-request-id': '303ec727-d5bb-448a-a0e8-107eaf500420',
  'x-ms-routing-request-id': 'WESTUS:20151230T070823Z:303ec727-d5bb-448a-a0e8-107eaf500420',
  date: 'Wed, 30 Dec 2015 07:08:22 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/14eacdd1-94eb-4f49-ae31-326235a54b69?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"14eacdd1-94eb-4f49-ae31-326235a54b69\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-30T07:03:18.5512028+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_130953002483951077',
  'x-ms-request-id': '295b2ad8-1424-449a-9e78-600dffc6fda2',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14920',
  'x-ms-correlation-request-id': '286e00ca-69e9-4cc0-8f4c-a5515da91d81',
  'x-ms-routing-request-id': 'WESTUS:20151230T070853Z:286e00ca-69e9-4cc0-8f4c-a5515da91d81',
  date: 'Wed, 30 Dec 2015 07:08:52 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/14eacdd1-94eb-4f49-ae31-326235a54b69?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"14eacdd1-94eb-4f49-ae31-326235a54b69\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-30T07:03:18.5512028+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_130953002483951077',
  'x-ms-request-id': 'f7397207-2687-48a4-8c28-e65a017f2d41',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14919',
  'x-ms-correlation-request-id': '27721c3b-5509-4b1a-a868-b5fbab8d3911',
  'x-ms-routing-request-id': 'WESTUS:20151230T070923Z:27721c3b-5509-4b1a-a868-b5fbab8d3911',
  date: 'Wed, 30 Dec 2015 07:09:23 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/14eacdd1-94eb-4f49-ae31-326235a54b69?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"14eacdd1-94eb-4f49-ae31-326235a54b69\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-30T07:03:18.5512028+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_130953002483951077',
  'x-ms-request-id': 'cb2d12b5-b09a-45dd-a7a8-8082a7a84937',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14918',
  'x-ms-correlation-request-id': 'd835d31a-a6dd-4cc3-9738-5d4cedf9c947',
  'x-ms-routing-request-id': 'WESTUS:20151230T070953Z:d835d31a-a6dd-4cc3-9738-5d4cedf9c947',
  date: 'Wed, 30 Dec 2015 07:09:53 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/14eacdd1-94eb-4f49-ae31-326235a54b69?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"14eacdd1-94eb-4f49-ae31-326235a54b69\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-30T07:03:18.5512028+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_130953002483951077',
  'x-ms-request-id': '5929cacf-a9cc-4998-bf42-0054759cf5fd',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14917',
  'x-ms-correlation-request-id': 'e7583fde-5296-4c33-a21c-dc04ac9fe619',
  'x-ms-routing-request-id': 'WESTUS:20151230T071023Z:e7583fde-5296-4c33-a21c-dc04ac9fe619',
  date: 'Wed, 30 Dec 2015 07:10:22 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/14eacdd1-94eb-4f49-ae31-326235a54b69?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"14eacdd1-94eb-4f49-ae31-326235a54b69\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-30T07:03:18.5512028+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_130953002483951077',
  'x-ms-request-id': 'dde011c6-ebbb-4544-910e-653d18138fa7',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14916',
  'x-ms-correlation-request-id': 'f9c642b7-c2fe-42c8-b17a-f45ea7573662',
  'x-ms-routing-request-id': 'WESTUS:20151230T071053Z:f9c642b7-c2fe-42c8-b17a-f45ea7573662',
  date: 'Wed, 30 Dec 2015 07:10:53 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/14eacdd1-94eb-4f49-ae31-326235a54b69?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"14eacdd1-94eb-4f49-ae31-326235a54b69\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-30T07:03:18.5512028+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_130953002483951077',
  'x-ms-request-id': '9f35161e-9387-4d89-be57-1a073d7b39a4',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14915',
  'x-ms-correlation-request-id': '51e3b94a-853e-416d-a3db-f2eb06bcf131',
  'x-ms-routing-request-id': 'WESTUS:20151230T071124Z:51e3b94a-853e-416d-a3db-f2eb06bcf131',
  date: 'Wed, 30 Dec 2015 07:11:23 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/14eacdd1-94eb-4f49-ae31-326235a54b69?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"14eacdd1-94eb-4f49-ae31-326235a54b69\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-30T07:03:18.5512028+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_130953002483951077',
  'x-ms-request-id': 'efd028ae-149c-4f08-a2be-15100ba4a716',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14914',
  'x-ms-correlation-request-id': '47a8e01e-76b9-4baa-a1b8-af945cff1541',
  'x-ms-routing-request-id': 'WESTUS:20151230T071154Z:47a8e01e-76b9-4baa-a1b8-af945cff1541',
  date: 'Wed, 30 Dec 2015 07:11:53 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/14eacdd1-94eb-4f49-ae31-326235a54b69?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"14eacdd1-94eb-4f49-ae31-326235a54b69\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-30T07:03:18.5512028+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_130953002483951077',
  'x-ms-request-id': 'aacdddbb-d281-4e7a-86e0-5cb2b8eff908',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14913',
  'x-ms-correlation-request-id': '46bf9cc2-19c8-43b3-b891-14a3631f33d2',
  'x-ms-routing-request-id': 'WESTUS:20151230T071224Z:46bf9cc2-19c8-43b3-b891-14a3631f33d2',
  date: 'Wed, 30 Dec 2015 07:12:24 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/14eacdd1-94eb-4f49-ae31-326235a54b69?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"14eacdd1-94eb-4f49-ae31-326235a54b69\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-30T07:03:18.5512028+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_130953002483951077',
  'x-ms-request-id': '06eb434d-767e-4b4d-b684-60a5592ed05f',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14912',
  'x-ms-correlation-request-id': 'f3c29c8e-8cee-4181-a4ab-7d9d0c604877',
  'x-ms-routing-request-id': 'WESTUS:20151230T071254Z:f3c29c8e-8cee-4181-a4ab-7d9d0c604877',
  date: 'Wed, 30 Dec 2015 07:12:54 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/14eacdd1-94eb-4f49-ae31-326235a54b69?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"14eacdd1-94eb-4f49-ae31-326235a54b69\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2015-12-30T07:03:18.5512028+00:00\",\r\n  \"endTime\": \"2015-12-30T07:12:53.4545891+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_130953002483951077',
  'x-ms-request-id': 'b0b4b855-e287-4ee3-b56a-cd6a7da24673',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14911',
  'x-ms-correlation-request-id': 'e242d640-6c0d-4e6d-9bc1-a32c8b2acdc6',
  'x-ms-routing-request-id': 'WESTUS:20151230T071324Z:e242d640-6c0d-4e6d-9bc1-a32c8b2acdc6',
  date: 'Wed, 30 Dec 2015 07:13:23 GMT' });
 return result; }]];