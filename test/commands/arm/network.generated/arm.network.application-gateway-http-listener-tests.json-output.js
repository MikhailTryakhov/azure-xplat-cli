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

var testPrefix = 'arm-network-application-gateway-http-listener-tests-generated',
  groupName = 'xplat-test-http-listener',
  location;
var index = 0;

var httpListeners = {
  protocol: 'Http',
  protocolNew: 'Https',
  hostName: 'fabrica.com',
  hostNameNew: 'updated.com',
  sslCertificateNameNew: 'cert01',
  name: 'httpListenerName'
};

httpListeners.virtualNetworkName = 'virtualNetworkName';
httpListeners.subnetName = 'subnetName';
httpListeners.publicIPAddressName = 'publicIPAddressName';
httpListeners.applicationGatewayName = 'applicationGatewayName';
httpListeners.frontendIPConfigurationName = 'frontendIPConfigurationName';
httpListeners.frontendPortName = 'frontendPortName';

var subnet = {
  addressPrefix: '10.0.0.0/16',
  virtualNetworkName: 'virtualNetworkName',
  name: 'subnetName'
};

var publicIPAddress = {
  location: 'westus',
  name: 'publicIPAddressName'
};

var applicationGateway = {
  backendAddresses: '10.0.0.0',
  location: 'westus',
  virtualNetworkName: 'virtualNetworkName',
  subnetName: 'subnetName',
  publicIPAddressName: 'publicIPAddressName',
  name: 'applicationGatewayName'
};

var virtualNetwork = {
  location: 'westus',
  name: 'virtualNetworkName'
};

var frontendPort = {
  port: '4242',
  applicationGatewayName: 'applicationGatewayName',
  name: 'frontendPortName'
};

var frontendIPConfiguration = {
  applicationGatewayName: 'applicationGatewayName',
  virtualNetworkName: 'virtualNetworkName',
  subnetName: 'subnetName',
  name: 'frontendIPConfigurationName'
};

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'westus'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;
    var hour = 60 * 60000;
    var testTimeout = 3 * hour;

    before(function (done) {
      this.timeout(testTimeout);
      suite = new CLITest(this, testPrefix, requiredEnvironment);
      suite.setupSuite(function () {
        location = httpListeners.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        httpListeners.location = location;
        httpListeners.name = suite.isMocked ? httpListeners.name : suite.generateId(httpListeners.name, null);
        httpListeners.group = groupName;
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
                  var cmd = 'network application-gateway create -g {1} -n {name} --servers {backendAddresses} --location {location} --vnet-name {virtualNetworkName} --subnet-name {subnetName} --public-ip-name {publicIPAddressName} --cert-file test/data/sslCert.pfx --cert-password pswd --json'.formatArgs(applicationGateway, groupName);
                  testUtils.executeCommand(suite, retry, cmd, function (result) {
                    if (!testUtils.assertExitStatus(result, done)) return;
                    var cmd = 'network application-gateway frontend-ip create -g {1} -n {name} --gateway-name {applicationGatewayName} --vnet-name {virtualNetworkName} --subnet-name {subnetName} --json'.formatArgs(frontendIPConfiguration, groupName);
                    testUtils.executeCommand(suite, retry, cmd, function (result) {
                      if (!testUtils.assertExitStatus(result, done)) return;
                      var cmd = 'network application-gateway frontend-port create -g {1} -n {name} --port {port} --gateway-name {applicationGatewayName} --json'.formatArgs(frontendPort, groupName);
                      testUtils.executeCommand(suite, retry, cmd, function (result) {
                        if (!testUtils.assertExitStatus(result, done)) return;
                        done();
                      });
                    });
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

    describe('http listeners', function () {
      this.timeout(testTimeout);
      it('create should create http listeners', function (done) {
        var cmd = 'network application-gateway http-listener create -g {group} -n {name} --protocol {protocol} --host-name {hostName} --gateway-name {applicationGatewayName} --frontend-ip-name {frontendIPConfigurationName} --frontend-port-name {frontendPortName} --json'.formatArgs(httpListeners);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var parentOutput = JSON.parse(result.text);
          parentOutput.name.should.equal('applicationGatewayName');
          var output = utils.findFirstCaseIgnore(parentOutput.httpListeners, {name: 'httpListenerName'});
          output.name.should.equal(httpListeners.name);
          output.protocol.toLowerCase().should.equal(httpListeners.protocol.toLowerCase());
          output.hostName.toLowerCase().should.equal(httpListeners.hostName.toLowerCase());
          done();
        });
      });
      it('show should display http listeners details', function (done) {
        var cmd = 'network application-gateway http-listener show -g {group} -n {name} --gateway-name {applicationGatewayName} --json'.formatArgs(httpListeners);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(httpListeners.name);
          output.protocol.toLowerCase().should.equal(httpListeners.protocol.toLowerCase());
          output.hostName.toLowerCase().should.equal(httpListeners.hostName.toLowerCase());
          done();
        });
      });
      it('set should update http listeners', function (done) {
        var cmd = 'network application-gateway http-listener set -g {group} -n {name} --protocol {protocolNew} --host-name {hostNameNew} --ssl-cert {sslCertificateNameNew} --gateway-name {applicationGatewayName} --json'.formatArgs(httpListeners);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var parentOutput = JSON.parse(result.text);
          parentOutput.name.should.equal('applicationGatewayName');
          var output = utils.findFirstCaseIgnore(parentOutput.httpListeners, {name: 'httpListenerName'});
          output.name.should.equal(httpListeners.name);
          output.protocol.toLowerCase().should.equal(httpListeners.protocolNew.toLowerCase());
          output.hostName.toLowerCase().should.equal(httpListeners.hostNameNew.toLowerCase());
          output.sslCertificate.id.replace(/.*\/([a-z0-9]+)$/gi, '$1').toLowerCase().should.equal(httpListeners.sslCertificateNameNew.toLowerCase());
          done();
        });
      });
      it('list should display all http listeners in resource group', function (done) {
        var cmd = 'network application-gateway http-listener list -g {group} --gateway-name {applicationGatewayName} --json'.formatArgs(httpListeners);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var outputs = JSON.parse(result.text);
          _.some(outputs, function (output) {
            return output.name === httpListeners.name;
          }).should.be.true;
          done();
        });
      });
      it('delete should delete http listeners', function (done) {
        var cmd = 'network application-gateway http-listener delete -g {group} -n {name} --gateway-name {applicationGatewayName} --quiet --json'.formatArgs(httpListeners);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network application-gateway http-listener show -g {group} -n {name} --gateway-name {applicationGatewayName} --json'.formatArgs(httpListeners);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text || '{}');
            output.should.be.empty;

            cmd = 'network application-gateway http-listener list -g {group} --gateway-name {applicationGatewayName} --json'.formatArgs(httpListeners);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              var outputs = JSON.parse(result.text);
              _.some(outputs, function (output) {
                return output.name === httpListeners.name;
              }).should.be.false;
              done();
            });
          });
        });
      });
    });
  });
});
