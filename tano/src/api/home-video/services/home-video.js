'use strict';

/**
 * home-video service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-video.home-video');
