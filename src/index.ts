/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import "@adobe/adobe-client-data-layer";
import { subscribeToEvents } from "./events";
import { configureSnowplow, initializeSnowplow } from "./snowplow";

initializeSnowplow("https://commerce.adobedtm.com/sp/v2/sp.js");

configureSnowplow({
    appId: "magento-storefront-event-collector",
    collectorUrl: "com-magento-qa1.collector.snplow.net",
});

subscribeToEvents();

export * from "./snowplow";
export * from "./events";
