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

'use strict';

var should = require('should');
var util = require('util');
var _ = require('underscore');

var testUtils = require('../../../util/util');
var CLITest = require('../../../framework/arm-cli-test');
var utils = require('../../../../lib/util/utils');
var NetworkTestUtil = require('../../../util/networkTestUtil');
var tagUtils = require('../../../../lib/commands/arm/tag/tagUtils');
var networkUtil = new NetworkTestUtil();

var generatorUtils = require('../../../../lib/util/generatorUtils');
var profile = require('../../../../lib/util/profile');
var $ = utils.getLocaleString;

var testPrefix = 'arm-network-application-gateway-waf-config-tests',
  groupName = 'xplat-test-waf-config',
  location;
var index = 0;

var virtualNetworkName;
var virtualNetworkId;
var subnetName;
var subnetId;
var applicationGatewayName;
var applicationGatewayId;
var webApplicationFirewallConfiguration = {
  enabled: 'true',
  enabledNew: 'false',
  firewallMode: 'Detection',
  firewallModeNew: 'Prevention',
  ruleSetType: 'OWASP',
  ruleSetTypeNew: 'OWASP',
  ruleSetVersion: '2.2.9',
  ruleSetVersionNew: '3.0',
  name: 'webApplicationFirewallConfigurationName'
}
webApplicationFirewallConfiguration.virtualNetworkName = 'virtualNetworkName';
webApplicationFirewallConfiguration.subnetName = 'subnetName';
webApplicationFirewallConfiguration.applicationGatewayName = 'applicationGatewayName';


var subnet = {
  addressPrefix: '10.0.0.0/16',
  addressPrefixNew: '10.0.0.0/24',
};
var virtualNetwork = {
  location: 'westus',
};
var applicationGateway = {
  backendAddresses: '10.0.0.0',
  backendAddressesNew: '11.0.0.0',
  location: 'westus',
};

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'westus'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;
    var hour = 60 * 60000;

    before(function (done) {
      suite = new CLITest(this, testPrefix, requiredEnvironment);
      suite.setupSuite(function () {
        location = webApplicationFirewallConfiguration.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        webApplicationFirewallConfiguration.location = location;
        webApplicationFirewallConfiguration.group = groupName;
        webApplicationFirewallConfiguration.name = suite.isMocked ? webApplicationFirewallConfiguration.name : suite.generateId(webApplicationFirewallConfiguration.name, null);
        if(!suite.isPlayback()) {
          networkUtil.createGroup(groupName, location, suite, function () {
          var cmd = 'network vnet create -g {1} -n virtualNetworkName --location {location} --json'.formatArgs(virtualNetwork, groupName);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text);
            var cmd = 'network vnet subnet create -g {1} -n subnetName --address-prefix {addressPrefix} --vnet-name virtualNetworkName --json'.formatArgs(subnet, groupName);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              var output = JSON.parse(result.text);
              var cmd = 'network application-gateway create -g {1} -n applicationGatewayName --servers {backendAddresses} --location {location} --vnet-name virtualNetworkName --subnet-name subnetName --sku-name WAF_Medium --sku-tier WAF  --json'.formatArgs(applicationGateway, groupName);
              testUtils.executeCommand(suite, retry, cmd, function (result) {
                result.exitStatus.should.equal(0);
                var output = JSON.parse(result.text);
                  done();
                });
              });
            });
        });
        } else {
          var subscriptionId = profile.current.getSubscription().id;
          done();
        }
      });
    });
    after(function (done) {
      this.timeout(hour);
      networkUtil.deleteGroup(groupName, suite, function () {
        suite.teardownSuite(done);
      });
    });
    beforeEach(function (done) {
      suite.setupTest(done);
    });
    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('web application firewall configuration', function () {
      this.timeout(hour);
      it('create should create web application firewall configuration', function (done) {
        var cmd = 'network application-gateway waf-config create -g {group} --enable {enabled} --waf-mode {firewallMode} --rule-set-type {ruleSetType} --rule-set-version {ruleSetVersion} --gateway-name {applicationGatewayName}  --json'.formatArgs(webApplicationFirewallConfiguration);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.enabled.should.equal(utils.parseBool(webApplicationFirewallConfiguration.enabled));
          output.firewallMode.toLowerCase().should.equal(webApplicationFirewallConfiguration.firewallMode.toLowerCase());
          output.ruleSetType.toLowerCase().should.equal(webApplicationFirewallConfiguration.ruleSetType.toLowerCase());
          output.ruleSetVersion.toLowerCase().should.equal(webApplicationFirewallConfiguration.ruleSetVersion.toLowerCase());
          done();
        });
      });
      it('show should display web application firewall configuration details', function (done) {
        var cmd = 'network application-gateway waf-config show -g {group} --gateway-name {applicationGatewayName} --json'.formatArgs(webApplicationFirewallConfiguration);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);

          output.enabled.should.equal(utils.parseBool(webApplicationFirewallConfiguration.enabled));
          output.firewallMode.toLowerCase().should.equal(webApplicationFirewallConfiguration.firewallMode.toLowerCase());
          output.ruleSetType.toLowerCase().should.equal(webApplicationFirewallConfiguration.ruleSetType.toLowerCase());
          output.ruleSetVersion.toLowerCase().should.equal(webApplicationFirewallConfiguration.ruleSetVersion.toLowerCase());
          done();
        });
      });
      it('set should update web application firewall configuration', function (done) {
        var cmd = 'network application-gateway waf-config set -g {group} --enable {enabledNew} --waf-mode {firewallModeNew} --rule-set-type {ruleSetTypeNew} --rule-set-version {ruleSetVersionNew} --gateway-name {applicationGatewayName} --json'.formatArgs(webApplicationFirewallConfiguration);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.enabled.should.equal(utils.parseBool(webApplicationFirewallConfiguration.enabledNew));
          output.firewallMode.toLowerCase().should.equal(webApplicationFirewallConfiguration.firewallModeNew.toLowerCase());
          output.ruleSetType.toLowerCase().should.equal(webApplicationFirewallConfiguration.ruleSetTypeNew.toLowerCase());
          output.ruleSetVersion.toLowerCase().should.equal(webApplicationFirewallConfiguration.ruleSetVersionNew.toLowerCase());
          done();
        });
      });
      it('delete should delete web application firewall configuration', function (done) {
        var cmd = 'network application-gateway waf-config delete -g {group} --quiet --gateway-name {applicationGatewayName} --json'.formatArgs(webApplicationFirewallConfiguration);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network application-gateway waf-config show -g {group} --gateway-name {applicationGatewayName} --json'.formatArgs(webApplicationFirewallConfiguration);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text);
            output.should.be.empty;
            done();
          });
        });
      });

    });
  });
});
