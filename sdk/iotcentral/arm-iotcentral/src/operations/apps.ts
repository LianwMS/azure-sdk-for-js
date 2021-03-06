/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/appsMappers";
import * as Parameters from "../models/parameters";
import { IotCentralClientContext } from "../iotCentralClientContext";

/** Class representing a Apps. */
export class Apps {
  private readonly client: IotCentralClientContext;

  /**
   * Create a Apps.
   * @param {IotCentralClientContext} client Reference to the service client.
   */
  constructor(client: IotCentralClientContext) {
    this.client = client;
  }

  /**
   * Get the metadata of an IoT Central application.
   * @param resourceGroupName The name of the resource group that contains the IoT Central
   * application.
   * @param resourceName The ARM resource name of the IoT Central application.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsGetResponse>
   */
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.AppsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the IoT Central
   * application.
   * @param resourceName The ARM resource name of the IoT Central application.
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.App>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the IoT Central
   * application.
   * @param resourceName The ARM resource name of the IoT Central application.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.App>): void;
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.App>, callback?: msRest.ServiceCallback<Models.App>): Promise<Models.AppsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AppsGetResponse>;
  }

  /**
   * Create or update the metadata of an IoT Central application. The usual pattern to modify a
   * property is to retrieve the IoT Central application metadata and security metadata, and then
   * combine them with the modified values in a new body to update the IoT Central application.
   * @param resourceGroupName The name of the resource group that contains the IoT Central
   * application.
   * @param resourceName The ARM resource name of the IoT Central application.
   * @param app The IoT Central application metadata and security metadata.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, resourceName: string, app: Models.App, options?: msRest.RequestOptionsBase): Promise<Models.AppsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,resourceName,app,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.AppsCreateOrUpdateResponse>;
  }

  /**
   * Update the metadata of an IoT Central application.
   * @param resourceGroupName The name of the resource group that contains the IoT Central
   * application.
   * @param resourceName The ARM resource name of the IoT Central application.
   * @param appPatch The IoT Central application metadata and security metadata.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsUpdateResponse>
   */
  update(resourceGroupName: string, resourceName: string, appPatch: Models.AppPatch, options?: msRest.RequestOptionsBase): Promise<Models.AppsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,resourceName,appPatch,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.AppsUpdateResponse>;
  }

  /**
   * Delete an IoT Central application.
   * @param resourceGroupName The name of the resource group that contains the IoT Central
   * application.
   * @param resourceName The ARM resource name of the IoT Central application.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,resourceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Get all IoT Central Applications in a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsListBySubscriptionResponse>
   */
  listBySubscription(options?: msRest.RequestOptionsBase): Promise<Models.AppsListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.AppListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AppListResult>): void;
  listBySubscription(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AppListResult>, callback?: msRest.ServiceCallback<Models.AppListResult>): Promise<Models.AppsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.AppsListBySubscriptionResponse>;
  }

  /**
   * Get all the IoT Central Applications in a resource group.
   * @param resourceGroupName The name of the resource group that contains the IoT Central
   * application.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.AppsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the IoT Central
   * application.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.AppListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the IoT Central
   * application.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AppListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AppListResult>, callback?: msRest.ServiceCallback<Models.AppListResult>): Promise<Models.AppsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.AppsListByResourceGroupResponse>;
  }

  /**
   * Check if an IoT Central application name is available.
   * @param operationInputs Set the name parameter in the OperationInputs structure to the name of
   * the IoT Central application to check.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsCheckNameAvailabilityResponse>
   */
  checkNameAvailability(operationInputs: Models.OperationInputs, options?: msRest.RequestOptionsBase): Promise<Models.AppsCheckNameAvailabilityResponse>;
  /**
   * @param operationInputs Set the name parameter in the OperationInputs structure to the name of
   * the IoT Central application to check.
   * @param callback The callback
   */
  checkNameAvailability(operationInputs: Models.OperationInputs, callback: msRest.ServiceCallback<Models.AppAvailabilityInfo>): void;
  /**
   * @param operationInputs Set the name parameter in the OperationInputs structure to the name of
   * the IoT Central application to check.
   * @param options The optional parameters
   * @param callback The callback
   */
  checkNameAvailability(operationInputs: Models.OperationInputs, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AppAvailabilityInfo>): void;
  checkNameAvailability(operationInputs: Models.OperationInputs, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AppAvailabilityInfo>, callback?: msRest.ServiceCallback<Models.AppAvailabilityInfo>): Promise<Models.AppsCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      {
        operationInputs,
        options
      },
      checkNameAvailabilityOperationSpec,
      callback) as Promise<Models.AppsCheckNameAvailabilityResponse>;
  }

  /**
   * Check if an IoT Central application subdomain is available.
   * @param operationInputs Set the name parameter in the OperationInputs structure to the subdomain
   * of the IoT Central application to check.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsCheckSubdomainAvailabilityResponse>
   */
  checkSubdomainAvailability(operationInputs: Models.OperationInputs, options?: msRest.RequestOptionsBase): Promise<Models.AppsCheckSubdomainAvailabilityResponse>;
  /**
   * @param operationInputs Set the name parameter in the OperationInputs structure to the subdomain
   * of the IoT Central application to check.
   * @param callback The callback
   */
  checkSubdomainAvailability(operationInputs: Models.OperationInputs, callback: msRest.ServiceCallback<Models.AppAvailabilityInfo>): void;
  /**
   * @param operationInputs Set the name parameter in the OperationInputs structure to the subdomain
   * of the IoT Central application to check.
   * @param options The optional parameters
   * @param callback The callback
   */
  checkSubdomainAvailability(operationInputs: Models.OperationInputs, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AppAvailabilityInfo>): void;
  checkSubdomainAvailability(operationInputs: Models.OperationInputs, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AppAvailabilityInfo>, callback?: msRest.ServiceCallback<Models.AppAvailabilityInfo>): Promise<Models.AppsCheckSubdomainAvailabilityResponse> {
    return this.client.sendOperationRequest(
      {
        operationInputs,
        options
      },
      checkSubdomainAvailabilityOperationSpec,
      callback) as Promise<Models.AppsCheckSubdomainAvailabilityResponse>;
  }

  /**
   * Get all available application templates.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsListTemplatesResponse>
   */
  listTemplates(options?: msRest.RequestOptionsBase): Promise<Models.AppsListTemplatesResponse>;
  /**
   * @param callback The callback
   */
  listTemplates(callback: msRest.ServiceCallback<Models.AppTemplatesResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listTemplates(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AppTemplatesResult>): void;
  listTemplates(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AppTemplatesResult>, callback?: msRest.ServiceCallback<Models.AppTemplatesResult>): Promise<Models.AppsListTemplatesResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listTemplatesOperationSpec,
      callback) as Promise<Models.AppsListTemplatesResponse>;
  }

  /**
   * Create or update the metadata of an IoT Central application. The usual pattern to modify a
   * property is to retrieve the IoT Central application metadata and security metadata, and then
   * combine them with the modified values in a new body to update the IoT Central application.
   * @param resourceGroupName The name of the resource group that contains the IoT Central
   * application.
   * @param resourceName The ARM resource name of the IoT Central application.
   * @param app The IoT Central application metadata and security metadata.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, resourceName: string, app: Models.App, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        resourceName,
        app,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Update the metadata of an IoT Central application.
   * @param resourceGroupName The name of the resource group that contains the IoT Central
   * application.
   * @param resourceName The ARM resource name of the IoT Central application.
   * @param appPatch The IoT Central application metadata and security metadata.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, resourceName: string, appPatch: Models.AppPatch, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        resourceName,
        appPatch,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Delete an IoT Central application.
   * @param resourceGroupName The name of the resource group that contains the IoT Central
   * application.
   * @param resourceName The ARM resource name of the IoT Central application.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Get all IoT Central Applications in a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsListBySubscriptionNextResponse>
   */
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AppsListBySubscriptionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AppListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AppListResult>): void;
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AppListResult>, callback?: msRest.ServiceCallback<Models.AppListResult>): Promise<Models.AppsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySubscriptionNextOperationSpec,
      callback) as Promise<Models.AppsListBySubscriptionNextResponse>;
  }

  /**
   * Get all the IoT Central Applications in a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AppsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AppListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AppListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AppListResult>, callback?: msRest.ServiceCallback<Models.AppListResult>): Promise<Models.AppsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.AppsListByResourceGroupNextResponse>;
  }

  /**
   * Get all available application templates.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppsListTemplatesNextResponse>
   */
  listTemplatesNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AppsListTemplatesNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listTemplatesNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AppTemplatesResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listTemplatesNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AppTemplatesResult>): void;
  listTemplatesNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AppTemplatesResult>, callback?: msRest.ServiceCallback<Models.AppTemplatesResult>): Promise<Models.AppsListTemplatesNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listTemplatesNextOperationSpec,
      callback) as Promise<Models.AppsListTemplatesNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTCentral/IoTApps/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.App
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.IoTCentral/IoTApps",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AppListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTCentral/IoTApps",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AppListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const checkNameAvailabilityOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.IoTCentral/checkNameAvailability",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "operationInputs",
    mapper: {
      ...Mappers.OperationInputs,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AppAvailabilityInfo
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const checkSubdomainAvailabilityOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.IoTCentral/checkSubdomainAvailability",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "operationInputs",
    mapper: {
      ...Mappers.OperationInputs,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AppAvailabilityInfo
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listTemplatesOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.IoTCentral/appTemplates",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AppTemplatesResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTCentral/IoTApps/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "app",
    mapper: {
      ...Mappers.App,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.App
    },
    201: {
      bodyMapper: Mappers.App
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTCentral/IoTApps/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "appPatch",
    mapper: {
      ...Mappers.AppPatch,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.App
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTCentral/IoTApps/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySubscriptionNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AppListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AppListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listTemplatesNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AppTemplatesResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
