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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate5906/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualmachines/0/instanceView?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"placementGroupId\": \"ebf14b1d-6c7c-4c1d-a6f3-2614a4611b69\",\r\n  \"platformUpdateDomain\": 0,\r\n  \"platformFaultDomain\": 0,\r\n  \"vmAgent\": {\r\n    \"vmAgentVersion\": \"2.7.1198.788\",\r\n    \"statuses\": [\r\n      {\r\n        \"code\": \"ProvisioningState/succeeded\",\r\n        \"level\": \"Info\",\r\n        \"displayStatus\": \"Ready\",\r\n        \"message\": \"GuestAgent is running and accepting new configurations.\",\r\n        \"time\": \"2017-02-16T10:02:30+00:00\"\r\n      }\r\n    ],\r\n    \"extensionHandlers\": [\r\n      {\r\n        \"type\": \"Microsoft.Compute.BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"status\": {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Ready\",\r\n          \"message\": \"Plugin enabled (handler name: Microsoft.Compute.BGInfo, extension name: , version: 2.1).\"\r\n        }\r\n      },\r\n      {\r\n        \"type\": \"Microsoft.Compute.VMAccessAgent\",\r\n        \"typeHandlerVersion\": \"2.3\",\r\n        \"status\": {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Ready\"\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"disks\": [\r\n    {\r\n      \"name\": \"test-os-0-9b4eba16572846779861bd3e86b05555\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"time\": \"2017-02-16T10:01:32.9732583+00:00\"\r\n        }\r\n      ]\r\n    }\r\n  ],\r\n  \"extensions\": [\r\n    {\r\n      \"name\": \"test\",\r\n      \"type\": \"Microsoft.Compute.VMAccessAgent\",\r\n      \"typeHandlerVersion\": \"2.3\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"message\": \"Succesfully updated build-in Admin account and enabled Remote Desktop connection to the machine\"\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      \"name\": \"test1\",\r\n      \"type\": \"Microsoft.Compute.BGInfo\",\r\n      \"typeHandlerVersion\": \"2.1\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"message\": \"Plugin enabled (handler name: Microsoft.Compute.BGInfo, extension name: , version: 2.1).\"\r\n        }\r\n      ]\r\n    }\r\n  ],\r\n  \"statuses\": [\r\n    {\r\n      \"code\": \"ProvisioningState/succeeded\",\r\n      \"level\": \"Info\",\r\n      \"displayStatus\": \"Provisioning succeeded\",\r\n      \"time\": \"2017-02-16T10:02:31.2567404+00:00\"\r\n    },\r\n    {\r\n      \"code\": \"PowerState/running\",\r\n      \"level\": \"Info\",\r\n      \"displayStatus\": \"VM running\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2637',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': '58d6c357-a134-47f3-ad0e-a797cab258b2',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-correlation-request-id': '4aba9c76-1e6d-4913-91bb-12f0eec9eb3b',
  'x-ms-routing-request-id': 'EASTASIA:20170216T100236Z:4aba9c76-1e6d-4913-91bb-12f0eec9eb3b',
  date: 'Thu, 16 Feb 2017 10:02:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate5906/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualmachines/0/instanceView?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"placementGroupId\": \"ebf14b1d-6c7c-4c1d-a6f3-2614a4611b69\",\r\n  \"platformUpdateDomain\": 0,\r\n  \"platformFaultDomain\": 0,\r\n  \"vmAgent\": {\r\n    \"vmAgentVersion\": \"2.7.1198.788\",\r\n    \"statuses\": [\r\n      {\r\n        \"code\": \"ProvisioningState/succeeded\",\r\n        \"level\": \"Info\",\r\n        \"displayStatus\": \"Ready\",\r\n        \"message\": \"GuestAgent is running and accepting new configurations.\",\r\n        \"time\": \"2017-02-16T10:02:30+00:00\"\r\n      }\r\n    ],\r\n    \"extensionHandlers\": [\r\n      {\r\n        \"type\": \"Microsoft.Compute.BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"status\": {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Ready\",\r\n          \"message\": \"Plugin enabled (handler name: Microsoft.Compute.BGInfo, extension name: , version: 2.1).\"\r\n        }\r\n      },\r\n      {\r\n        \"type\": \"Microsoft.Compute.VMAccessAgent\",\r\n        \"typeHandlerVersion\": \"2.3\",\r\n        \"status\": {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Ready\"\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"disks\": [\r\n    {\r\n      \"name\": \"test-os-0-9b4eba16572846779861bd3e86b05555\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"time\": \"2017-02-16T10:01:32.9732583+00:00\"\r\n        }\r\n      ]\r\n    }\r\n  ],\r\n  \"extensions\": [\r\n    {\r\n      \"name\": \"test\",\r\n      \"type\": \"Microsoft.Compute.VMAccessAgent\",\r\n      \"typeHandlerVersion\": \"2.3\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"message\": \"Succesfully updated build-in Admin account and enabled Remote Desktop connection to the machine\"\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      \"name\": \"test1\",\r\n      \"type\": \"Microsoft.Compute.BGInfo\",\r\n      \"typeHandlerVersion\": \"2.1\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"message\": \"Plugin enabled (handler name: Microsoft.Compute.BGInfo, extension name: , version: 2.1).\"\r\n        }\r\n      ]\r\n    }\r\n  ],\r\n  \"statuses\": [\r\n    {\r\n      \"code\": \"ProvisioningState/succeeded\",\r\n      \"level\": \"Info\",\r\n      \"displayStatus\": \"Provisioning succeeded\",\r\n      \"time\": \"2017-02-16T10:02:31.2567404+00:00\"\r\n    },\r\n    {\r\n      \"code\": \"PowerState/running\",\r\n      \"level\": \"Info\",\r\n      \"displayStatus\": \"VM running\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2637',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': '58d6c357-a134-47f3-ad0e-a797cab258b2',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-correlation-request-id': '4aba9c76-1e6d-4913-91bb-12f0eec9eb3b',
  'x-ms-routing-request-id': 'EASTASIA:20170216T100236Z:4aba9c76-1e6d-4913-91bb-12f0eec9eb3b',
  date: 'Thu, 16 Feb 2017 10:02:36 GMT',
  connection: 'close' });
 return result; }]];