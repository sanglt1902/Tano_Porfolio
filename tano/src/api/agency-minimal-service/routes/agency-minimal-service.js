'use strict';

/**
 * agency-minimal-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::agency-minimal-service.agency-minimal-service');
