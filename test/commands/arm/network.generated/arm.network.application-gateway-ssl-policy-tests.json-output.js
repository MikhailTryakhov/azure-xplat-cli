﻿/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

'use strict';

var should = require('should');
var util = require('util');
var _ = require('underscore');

var CLITest = require('../../../framework/arm-cli-test');
var utils = require('../../../../lib/util/utils');
var tagUtils = require('../../../../lib/commands/arm/tag/tagUtils');
var testUtils = require('../../../util/util');

var networkTestUtil = new (require('../../../util/networkTestUtil'))();

var generatorUtils = require('../../../../lib/util/generatorUtils');
var profile = require('../../../../lib/util/profile');

var testPrefix = 'arm-network-application-gateway-ssl-policy-tests-generated',
  groupName = 'xplat-test-ssl-policy',
  location;
var index = 0;

var sslPolicy = {
  disabledSslProtocolsNew: 'TLSv1_0,TLSv1_1',
  policyType: 'Custom',
  policyTypeNew: '',
  cipherSuites: 'TLS_RSA_WITH_AES_256_CBC_SHA256',
  cipherSuitesNew: '',
  minProtocolVersion: 'TLSv1_0',
  minProtocolVersionNew: '',
  name: 'sslPolicyName'
};

sslPolicy.virtualNetworkName = 'virtualNetworkName';
sslPolicy.subnetName = 'subnetName';
sslPolicy.publicIPAddressName = 'publicIPAddressName';
sslPolicy.applicationGatewayName = 'applicationGatewayName';

var subnet = {
  addressPrefix: '10.0.0.0/16',
  virtualNetworkName: 'virtualNetworkName',
  name: 'subnetName'
};

var virtualNetwork = {
  location: 'westus',
  name: 'virtualNetworkName'
};

var applicationGateway = {
  backendAddresses: '10.0.0.0',
  location: 'westus',
  virtualNetworkName: 'virtualNetworkName',
  subnetName: 'subnetName',
  publicIPAddressName: 'publicIPAddressName',
  name: 'applicationGatewayName'
};

var publicIPAddress = {
  location: 'westus',
  name: 'publicIPAddressName'
};

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'westus'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;
    var hour = 60 * 60000;
    var testTimeout = hour;

    before(function (done) {
      this.timeout(testTimeout);
      suite = new CLITest(this, testPrefix, requiredEnvironment);
      suite.setupSuite(function () {
        location = sslPolicy.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        sslPolicy.location = location;
        sslPolicy.name = suite.isMocked ? sslPolicy.name : suite.generateId(sslPolicy.name, null);
        sslPolicy.group = groupName;
        if (!suite.isPlayback()) {
          networkTestUtil.createGroup(groupName, location, suite, function () {
            var cmd = 'network vnet create -g {1} -n {name} --location {location} --json'.formatArgs(virtualNetwork, groupName);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              if (!testUtils.assertExitStatus(result, done)) return;
              var cmd = 'network vnet subnet create -g {1} -n {name} --address-prefix {addressPrefix} --vnet-name {virtualNetworkName} --json'.formatArgs(subnet, groupName);
              testUtils.executeCommand(suite, retry, cmd, function (result) {
                if (!testUtils.assertExitStatus(result, done)) return;
                var cmd = 'network public-ip create -g {1} -n {name} --location {location} --json'.formatArgs(publicIPAddress, groupName);
                testUtils.executeCommand(suite, retry, cmd, function (result) {
                  if (!testUtils.assertExitStatus(result, done)) return;
                  var cmd = 'network application-gateway create -g {1} -n {name} --servers {backendAddresses} --location {location} --vnet-name {virtualNetworkName} --subnet-name {subnetName} --public-ip-name {publicIPAddressName} --json'.formatArgs(applicationGateway, groupName);
                  testUtils.executeCommand(suite, retry, cmd, function (result) {
                    if (!testUtils.assertExitStatus(result, done)) return;
                    done();
                  });
                });
              });
            });
          });
        } else {
          done();
        }
      });
    });
    after(function (done) {
      this.timeout(testTimeout);
      networkTestUtil.deleteGroup(groupName, suite, function () {
        suite.teardownSuite(done);
      });
    });
    beforeEach(function (done) {
      suite.setupTest(done);
    });
    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('ssl policy', function () {
      this.timeout(testTimeout);
      it('create should create ssl policy', function (done) {
        var cmd = 'network application-gateway ssl-policy create -g {group} --policy-type {policyType} --cipher-suites {cipherSuites} --min-protocol-version {minProtocolVersion} --gateway-name {applicationGatewayName} --json'.formatArgs(sslPolicy);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.policyType.toLowerCase().should.equal(sslPolicy.policyType.toLowerCase());
          sslPolicy.cipherSuites.split(',').forEach(function (item) { output.cipherSuites.should.containEql(item) });
          output.minProtocolVersion.toLowerCase().should.equal(sslPolicy.minProtocolVersion.toLowerCase());
          done();
        });
      });
      it('show should display ssl policy details', function (done) {
        var cmd = 'network application-gateway ssl-policy show -g {group} --gateway-name {applicationGatewayName} --json'.formatArgs(sslPolicy);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.policyType.toLowerCase().should.equal(sslPolicy.policyType.toLowerCase());
          sslPolicy.cipherSuites.split(',').forEach(function (item) { output.cipherSuites.should.containEql(item) });
          output.minProtocolVersion.toLowerCase().should.equal(sslPolicy.minProtocolVersion.toLowerCase());
          done();
        });
      });
      it('set should update ssl policy', function (done) {
        var cmd = 'network application-gateway ssl-policy set -g {group} --disable-ssl-protocols {disabledSslProtocolsNew} --policy-type {policyTypeNew} --cipher-suites {cipherSuitesNew} --min-protocol-version {minProtocolVersionNew} --gateway-name {applicationGatewayName} --json'.formatArgs(sslPolicy);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          sslPolicy.disabledSslProtocolsNew.split(',').forEach(function (item) { output.disabledSslProtocols.should.containEql(item) });
          should.not.exist(output.policyType);
          should.not.exist(output.cipherSuites);
          should.not.exist(output.minProtocolVersion);
          done();
        });
      });
      it('delete should delete ssl policy', function (done) {
        var cmd = 'network application-gateway ssl-policy delete -g {group} --gateway-name {applicationGatewayName} --quiet --json'.formatArgs(sslPolicy);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network application-gateway ssl-policy show -g {group} --gateway-name {applicationGatewayName} --json'.formatArgs(sslPolicy);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text || '{}');
            output.should.be.empty;
            done();
          });
        });
      });
    });
  });
});
