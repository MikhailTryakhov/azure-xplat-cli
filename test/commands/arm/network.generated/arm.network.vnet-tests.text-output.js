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

var testPrefix = 'arm-network-vnet-tests-generated',
  groupName = 'xplat-test-vnet',
  location;
var index = 0;

var virtualNetworks = {
  addressPrefixes: '10.0.0.0/8',
  addressPrefixesNew: '11.0.0.0/16',
  dnsServers: '10.0.0.42',
  dnsServersNew: '10.0.0.32',
  enableVmProtection: 'false',
  enableVmProtectionNew: 'true',
  enableDdosProtection: 'false',
  enableDdosProtectionNew: 'true',
  location: 'westcentralus',
  name: 'virtualNetworkName'
};

var virtualNetworksDefault = {
  location: 'westcentralus',
  addressPrefixes: '10.0.0.0/8',
  name: 'virtualNetworksDefaultName',
  group: groupName
};

var invalidPrefixes = {
  addressPrefixes: '10.10.10.10',
  dnsServers: '10.0.0.42',
  location: 'westcentralus',
  name: 'invalidPrefixesName'
};

var invalidDnsServers = {
  addressPrefixes: '10.0.0.0/8',
  dnsServers: '0',
  location: 'westcentralus',
  name: 'invalidDnsServersName'
};

var arrayOfPrefixes = {
  addressPrefixes: '10.0.0.0/8,11.0.0.0/16',
  location: 'westcentralus',
  name: 'arrayOfPrefixesName'
};

var noDnsServers = {
  addressPrefixes: '10.0.0.0/8',
  location: 'westcentralus',
  name: 'noDnsServersName'
};

var changeDnsServers = {
  addressPrefixes: '10.0.0.0/8',
  dnsServersNew: '10.20.30.40',
  location: 'westcentralus',
  name: 'changeDnsServersName'
};

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'westcentralus'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;
    var hour = 60 * 60000;
    var testTimeout = hour;

    before(function (done) {
      this.timeout(testTimeout);
      suite = new CLITest(this, testPrefix, requiredEnvironment, true);
      suite.isRecording = false;
      suite.setupSuite(function () {
        location = virtualNetworks.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        virtualNetworks.location = location;
        virtualNetworks.name = suite.isMocked ? virtualNetworks.name : suite.generateId(virtualNetworks.name, null);

        virtualNetworks.group = groupName;
        invalidPrefixes.group = groupName;
        invalidDnsServers.group = groupName;
        arrayOfPrefixes.group = groupName;
        noDnsServers.group = groupName;
        changeDnsServers.group = groupName;

        if (!suite.isPlayback()) {
          networkTestUtil.createGroup(groupName, location, suite, function () {
            done();
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

    describe('virtual networks', function () {
      this.timeout(testTimeout);
      it('create should create virtual networks', function (done) {
        var cmd = 'network vnet create -g {group} -n {name} --address-prefixes {addressPrefixes} --dns-servers {dnsServers} --enable-vm-protection {enableVmProtection} --enable-ddos-protection {enableDdosProtection} --location {location}'.formatArgs(virtualNetworks);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('show should display virtual networks details', function (done) {
        var cmd = 'network vnet show -g {group} -n {name}'.formatArgs(virtualNetworks);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('set should update virtual networks', function (done) {
        var cmd = 'network vnet set -g {group} -n {name} --address-prefixes {addressPrefixesNew} --dns-servers {dnsServersNew} --enable-vm-protection {enableVmProtectionNew} --enable-ddos-protection {enableDdosProtectionNew}'.formatArgs(virtualNetworks);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('list should display all virtual networks in resource group', function (done) {
        var cmd = 'network vnet list -g {group}'.formatArgs(virtualNetworks);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('usage should perform list usage operation successfully', function (done) {
        var cmd = 'network vnet usage -g {group} -n {name}'.formatArgs(virtualNetworks);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('delete should delete virtual networks', function (done) {
        var cmd = 'network vnet delete -g {group} -n {name} --quiet'.formatArgs(virtualNetworks);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network vnet show -g {group} -n {name}'.formatArgs(virtualNetworks);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);

            cmd = 'network vnet list -g {group}'.formatArgs(virtualNetworks);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              done();
            });
          });
        });
      });
      it('create with defaults should create virtual networks with default values', function (done) {
        var cmd = 'network vnet create -g {group} -n {name} --location {location}'.formatArgs(virtualNetworksDefault);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network vnet delete -g {group} -n {name} --quiet'.formatArgs(virtualNetworksDefault);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            done();
          });
        });
      });
      it('create should fail for invalid prefixes', function (done) {
        var cmd = 'network vnet create -g {group} -n {name} --address-prefixes {addressPrefixes} --dns-servers {dnsServers} --location {location} --json'.formatArgs(invalidPrefixes);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for invalid dns servers', function (done) {
        var cmd = 'network vnet create -g {group} -n {name} --address-prefixes {addressPrefixes} --dns-servers {dnsServers} --location {location} --json'.formatArgs(invalidDnsServers);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should pass for array of prefixes', function (done) {
        var cmd = 'network vnet create -g {group} -n {name} --address-prefixes {addressPrefixes} --location {location} --json'.formatArgs(arrayOfPrefixes);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(arrayOfPrefixes.name);
          arrayOfPrefixes.addressPrefixes.split(',').forEach(function (item) { output.addressSpace.addressPrefixes.should.containEql(item) });
          done();
        });
      });
      it('create should pass for no dns servers', function (done) {
        var cmd = 'network vnet create -g {group} -n {name} --address-prefixes {addressPrefixes} --location {location} --json'.formatArgs(noDnsServers);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(noDnsServers.name);
          noDnsServers.addressPrefixes.split(',').forEach(function (item) { output.addressSpace.addressPrefixes.should.containEql(item) });
          done();
        });
      });
      it('create should pass for change dns servers', function (done) {
        var cmd = 'network vnet create -g {group} -n {name} --address-prefixes {addressPrefixes} --location {location} --json'.formatArgs(changeDnsServers);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(changeDnsServers.name);
          changeDnsServers.addressPrefixes.split(',').forEach(function (item) { output.addressSpace.addressPrefixes.should.containEql(item) });

          cmd = 'network vnet set -g {group} -n {name} --dns-servers {dnsServersNew} --json'.formatArgs(changeDnsServers);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text);
            output.name.should.equal(changeDnsServers.name);
            changeDnsServers.dnsServersNew.split(',').forEach(function (item) { output.dhcpOptions.dnsServers.should.containEql(item) });

            cmd = 'network vnet delete -g {group} -n {name} --quiet --json'.formatArgs(changeDnsServers);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              done();
            });
          });
        });
      });
    });
  });
});
