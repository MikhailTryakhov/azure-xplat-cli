/**
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

var generatorUtils = require('../../../util/generatorUtils');
var resourceUtils = require('../resource/resourceUtils');
var util = require('util');
var validation = require('../../../util/validation');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

var AppGateway = require('./appGateway');

exports.init = function (cli) {
  var network = cli.category('network')
    .description($('Commands to manage network resources'));
  var applicationGateways = network.category('application-gateway')
    .description($('Commands to manage application gateways'));
  var webApplicationFirewallConfiguration = applicationGateways.category('waf-config')
    .description($('Commands to manage web application firewall configuration'));
  var disabledRuleGroups = webApplicationFirewallConfiguration.category('disabled-rule-groups')
    .description($('Commands to manage disabled rule groups'));

  disabledRuleGroups.command('create [resource-group] [gateway-name] [rule-group-name]')
    .description($('Create a group of disabled rules'))
    .usage('[options] <resource-group> <gateway-name> <rule-group-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-n, --rule-group-name <rule-group-name>', $('the name of the rule group that will be disabled'))
    .option('-r, --rules [rules]', $('The list of rules that will be disabled. If null, all rules of the rule group will be disabled'))
    .execute(function (resourceGroup, gatewayName, ruleGroupName, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('Resource group: '), resourceGroup, _);
      gatewayName = cli.interaction.promptIfNotGiven($('Application gateway name: '), gatewayName, _);
      options.ruleGroupName = cli.interaction.promptIfNotGiven($('rule group name: '), ruleGroupName, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);
      var appGateway = new AppGateway(cli, networkManagementClient);
      appGateway.createDisabledRuleGroup(resourceGroup, gatewayName, options, _);
    });

  disabledRuleGroups.command('set [resource-group] [gateway-name] [rule-group-name]')
    .description($('Update a group of disabled rules'))
    .usage('[options] <resource-group> <gateway-name> <rule-group-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-n, --rule-group-name <rule-group-name>', $('the name of the rule group that will be disabled'))
    .option('-r, --rules [rules]', $('The list of rules that will be disabled. If null, all rules of the rule group will be disabled'))
    .execute(function (resourceGroup, gatewayName, ruleGroupName, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('Resource group: '), resourceGroup, _);
      gatewayName = cli.interaction.promptIfNotGiven($('Application gateway name: '), gatewayName, _);
      options.ruleGroupName = cli.interaction.promptIfNotGiven($('rule group name: '), ruleGroupName, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);
      var appGateway = new AppGateway(cli, networkManagementClient);
      appGateway.setDisabledRuleGroup(resourceGroup, gatewayName, options, _);
    });

  disabledRuleGroups.command('list [resource-group] [gateway-name]')
    .description($('List all disabled rule groups for a gateway'))
    .usage('[options] <resource-group> <gateway-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .execute(function (resourceGroup, gatewayName, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('Resource group: '), resourceGroup, _);
      gatewayName = cli.interaction.promptIfNotGiven($('Application gateway name: '), gatewayName, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);
      var appGateway = new AppGateway(cli, networkManagementClient);
      appGateway.listDisabledRuleGroups(resourceGroup, gatewayName, options, _);
    });

  disabledRuleGroups.command('show [resource-group] [gateway-name] [rule-group-name]')
    .description($('Get a group of disabled rules'))
    .usage('[options] <resource-group> <gateway-name> <rule-group-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-n, --rule-group-name <rule-group-name>', $('the name of the rule group that will be disabled'))
    .execute(function (resourceGroup, gatewayName, ruleGroupName, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('Resource group: '), resourceGroup, _);
      gatewayName = cli.interaction.promptIfNotGiven($('Application gateway name: '), gatewayName, _);
      options.ruleGroupName = cli.interaction.promptIfNotGiven($('rule group name: '), ruleGroupName, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);
      var appGateway = new AppGateway(cli, networkManagementClient);
      appGateway.showDisabledRuleGroup(resourceGroup, gatewayName, options, _);
    });

  disabledRuleGroups.command('delete [resource-group] [gateway-name] [rule-group-name]')
    .description($('Delete a group of disabled rules'))
    .usage('[options] <resource-group> <gateway-name> <rule-group-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-n, --rule-group-name <rule-group-name>', $('the name of the rule group that will be disabled'))
    .execute(function (resourceGroup, gatewayName, ruleGroupName, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('Resource group: '), resourceGroup, _);
      gatewayName = cli.interaction.promptIfNotGiven($('Application gateway name: '), gatewayName, _);
      options.ruleGroupName = cli.interaction.promptIfNotGiven($('rule group name: '), ruleGroupName, _);
      
      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);
      var appGateway = new AppGateway(cli, networkManagementClient);
      appGateway.deleteDisabledRuleGroup(resourceGroup, gatewayName, options, _);
    });
};
