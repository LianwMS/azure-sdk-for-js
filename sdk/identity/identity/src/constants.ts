// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * The default client ID for authentication
 * @internal
 * @ignore
 */
// TODO: temporary - this is the Azure CLI clientID - we'll replace it when
// Developer Sign On application is available
// https://github.com/Azure/azure-sdk-for-net/blob/master/sdk/identity/Azure.Identity/src/Constants.cs#L9
export const DeveloperSignOnClientId = "04b07795-8ddb-461a-bbee-02f9e1bf7b46";

/**
 * The default tenant for authentication
 * @internal
 * @ignore
 */
export const DefaultTenantId = "common";

/**
 * A list of known Azure authority hosts
 */
export enum AzureAuthorityHosts {
  /**
   * China-based Azure Authority Host
   */
  AzureChina = "https://login.chinacloudapi.cn",
  /**
   * Germany-based Azure Authority Host
   */
  AzureGermany = "https://login.microsoftonline.de",
  /**
   * US Government Azure Authority Host
   */
  AzureGovernment = "https://login.microsoftonline.us",
  /**
   * Public Cloud Azure Authority Host
   */
  AzurePublicCloud = "https://login.microsoftonline.com"
}
