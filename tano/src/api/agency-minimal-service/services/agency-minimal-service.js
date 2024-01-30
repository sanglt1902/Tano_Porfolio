'use strict';

/**
 * agency-minimal-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::agency-minimal-service.agency-minimal-service');
