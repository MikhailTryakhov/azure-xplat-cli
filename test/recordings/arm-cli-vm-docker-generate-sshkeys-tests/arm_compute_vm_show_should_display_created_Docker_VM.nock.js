// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
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
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMDockerSSH/providers/Microsoft.Compute/virtualMachines/xplatvmdockssh?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"Canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"14.04.1-LTS\",\r\n        \"version\": \"14.04.201409090\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli3d37c6c0e1bab61d-os-1439813449565\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstdockssh3118.blob.core.windows.net/xplatscntdockssh9299/cli3d37c6c0e1bab61d-os-1439813449565.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmdockssh\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIICjTCCAXmgAwIBAgIBATAJBgcqhkjOPQQBMAAwIhgPMjAxNTA4MTcxMjAwNDla\\r\\nGA8yMDI1MDgxNzEyMDA0OVowGTELMAkGA1UEBhMCVVMxCjAIBgNVBAoMAWIwggEh\\r\\nMA0GCSqGSIb3DQEBAQUAA4IBDgAwggEJAoIBAFUwSaa3pav+3PPbKExmh+5xCigZ\\r\\nBPDjAlxoUIgVAn4/s/C4ZKpeoZnfg9LyWZoVzwMa26xZ2PT/C9RE+TcNyIw+0bj9\\r\\noy11RqZk6S3py8vWna1vtFwLEaC6+xHO7cwf7mL4/vy4/FRCA0dKSKB/FyQYKTGb\\r\\nqwmAOdLRJk2l0masZc3drV9oFa88v2qBXHt1TGwAot7hSd3K/yD/6hCtV20FBmWz\\r\\nh9tSOS+qI2XB/rYb3qcfuUXCY/sGsZTEZvZq4wvnFtwOs+V0hGidiH6Jd00yMkUv\\r\\nRs3VguHCx5ogdttLMLVp+VAcnK7HDAUJVWFF3LDfABtJ39TqiipzanW7He0CAwEA\\r\\nATAJBgcqhkjOPQQBA4IBAQA4yn7KkHLRqMvPdFMKc1fSFRvHR6TUFiv390gapdGt\\r\\naL7yjzqHbSK+6wxqZGmlWo1CE+VHCYibV6MB5qRC5WNPnOfDrwH+W0P6QYpDFgYO\\r\\nBwLEh3wvLtBGhnRzRQ+/v3CPmn82A58XX47GYE2AQt4Lar77bTSB38NGZgr1nTeM\\r\\nWqtNYrmHaOI961Vli/WzLVGHFEsiUmQpCi3N/fQiRLV7PksokM4lrW6SRVMSXl26\\r\\nSRtGsau6oGYIAYPfi7Cp409WHzhjNtjwQgE6kydYruXEOoZ4DcxENPcfTTdu4LCN\\r\\n/K9WzC64sOdyGnD/hsRywoWgca4OlFKJSo2IMchH0BmE\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMDockerSSH/providers/Microsoft.Network/networkInterfaces/xplatnicdockssh\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Azure.Extensions\",\r\n        \"type\": \"DockerExtension\",\r\n        \"typeHandlerVersion\": \"1.0\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {\"docker\":{\"port\":\"2376\"}},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMDockerSSH/providers/Microsoft.Compute/virtualMachines/xplatvmdockssh/extensions/DockerExtension\",\r\n      \"name\": \"DockerExtension\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMDockerSSH/providers/Microsoft.Compute/virtualMachines/xplatvmdockssh\",\r\n  \"name\": \"xplatvmdockssh\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3194',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'c37dca37-9c43-4151-b86b-477e6d65ea27_130833786464858178',
  'x-ms-request-id': '5bde6f78-cdc5-440e-ab04-b52ad4625250',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '18e29306-a55a-4fac-8dd3-c42e0c4d1ebf',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150817T121956Z:18e29306-a55a-4fac-8dd3-c42e0c4d1ebf',
  date: 'Mon, 17 Aug 2015 12:19:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMDockerSSH/providers/Microsoft.Compute/virtualMachines/xplatvmdockssh?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"Canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"14.04.1-LTS\",\r\n        \"version\": \"14.04.201409090\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli3d37c6c0e1bab61d-os-1439813449565\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstdockssh3118.blob.core.windows.net/xplatscntdockssh9299/cli3d37c6c0e1bab61d-os-1439813449565.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmdockssh\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIICjTCCAXmgAwIBAgIBATAJBgcqhkjOPQQBMAAwIhgPMjAxNTA4MTcxMjAwNDla\\r\\nGA8yMDI1MDgxNzEyMDA0OVowGTELMAkGA1UEBhMCVVMxCjAIBgNVBAoMAWIwggEh\\r\\nMA0GCSqGSIb3DQEBAQUAA4IBDgAwggEJAoIBAFUwSaa3pav+3PPbKExmh+5xCigZ\\r\\nBPDjAlxoUIgVAn4/s/C4ZKpeoZnfg9LyWZoVzwMa26xZ2PT/C9RE+TcNyIw+0bj9\\r\\noy11RqZk6S3py8vWna1vtFwLEaC6+xHO7cwf7mL4/vy4/FRCA0dKSKB/FyQYKTGb\\r\\nqwmAOdLRJk2l0masZc3drV9oFa88v2qBXHt1TGwAot7hSd3K/yD/6hCtV20FBmWz\\r\\nh9tSOS+qI2XB/rYb3qcfuUXCY/sGsZTEZvZq4wvnFtwOs+V0hGidiH6Jd00yMkUv\\r\\nRs3VguHCx5ogdttLMLVp+VAcnK7HDAUJVWFF3LDfABtJ39TqiipzanW7He0CAwEA\\r\\nATAJBgcqhkjOPQQBA4IBAQA4yn7KkHLRqMvPdFMKc1fSFRvHR6TUFiv390gapdGt\\r\\naL7yjzqHbSK+6wxqZGmlWo1CE+VHCYibV6MB5qRC5WNPnOfDrwH+W0P6QYpDFgYO\\r\\nBwLEh3wvLtBGhnRzRQ+/v3CPmn82A58XX47GYE2AQt4Lar77bTSB38NGZgr1nTeM\\r\\nWqtNYrmHaOI961Vli/WzLVGHFEsiUmQpCi3N/fQiRLV7PksokM4lrW6SRVMSXl26\\r\\nSRtGsau6oGYIAYPfi7Cp409WHzhjNtjwQgE6kydYruXEOoZ4DcxENPcfTTdu4LCN\\r\\n/K9WzC64sOdyGnD/hsRywoWgca4OlFKJSo2IMchH0BmE\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMDockerSSH/providers/Microsoft.Network/networkInterfaces/xplatnicdockssh\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Azure.Extensions\",\r\n        \"type\": \"DockerExtension\",\r\n        \"typeHandlerVersion\": \"1.0\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {\"docker\":{\"port\":\"2376\"}},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMDockerSSH/providers/Microsoft.Compute/virtualMachines/xplatvmdockssh/extensions/DockerExtension\",\r\n      \"name\": \"DockerExtension\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMDockerSSH/providers/Microsoft.Compute/virtualMachines/xplatvmdockssh\",\r\n  \"name\": \"xplatvmdockssh\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3194',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'c37dca37-9c43-4151-b86b-477e6d65ea27_130833786464858178',
  'x-ms-request-id': '5bde6f78-cdc5-440e-ab04-b52ad4625250',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '18e29306-a55a-4fac-8dd3-c42e0c4d1ebf',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150817T121956Z:18e29306-a55a-4fac-8dd3-c42e0c4d1ebf',
  date: 'Mon, 17 Aug 2015 12:19:56 GMT',
  connection: 'close' });
 return result; }]];