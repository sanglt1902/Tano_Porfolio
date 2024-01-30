import type { Schema, Attribute } from '@strapi/strapi';

export interface HomeHeroBannerHomeHeroBanner extends Schema.Component {
  collectionName: 'components_home_hero_banner_home_hero_banners';
  info: {
    displayName: 'homeHeroBanner';
    description: '';
  };
  attributes: {
    Image: Attribute.Media;
    name: Attribute.String;
    location: Attribute.String;
  };
}

export interface HomeVideoHomeVideo extends Schema.Component {
  collectionName: 'components_home_video_home_videos';
  info: {
    displayName: 'homeVideo';
  };
  attributes: {
    image: Attribute.Media;
    type_1: Attribute.String;
    type_2: Attribute.String;
    location: Attribute.String;
    videoUrl: Attribute.String;
  };
}

export interface OurTeamOurTeam extends Schema.Component {
  collectionName: 'components_our_team_our_teams';
  info: {
    displayName: 'ourTeam';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    name: Attribute.String;
    role: Attribute.String;
    facebook: Attribute.String;
    instagram: Attribute.String;
  };
}

export interface ServiceImagesServiceImages extends Schema.Component {
  collectionName: 'components_service_images_service_images';
  info: {
    displayName: 'serviceImages';
  };
  attributes: {
    heroBanner: Attribute.Media;
    representImage1: Attribute.Media;
    representImage2: Attribute.Media;
    representImage3: Attribute.Media;
  };
}

export interface SingleProjectSingleProject extends Schema.Component {
  collectionName: 'components_single_project_single_projects';
  info: {
    displayName: 'singleProject';
  };
  attributes: {
    image: Attribute.Media;
    name: Attribute.String;
    location: Attribute.String;
  };
}

export interface SingleTesimonialSingleTesimonial extends Schema.Component {
  collectionName: 'components_single_tesimonial_single_tesimonials';
  info: {
    displayName: 'singleTesimonial';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    name: Attribute.String;
    role: Attribute.String;
    description: Attribute.Text;
  };
}

export interface TestimonialTestimonial extends Schema.Component {
  collectionName: 'components_testimonial_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    image: Attribute.Media;
    name: Attribute.String;
    role: Attribute.String;
    description: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home-hero-banner.home-hero-banner': HomeHeroBannerHomeHeroBanner;
      'home-video.home-video': HomeVideoHomeVideo;
      'our-team.our-team': OurTeamOurTeam;
      'service-images.service-images': ServiceImagesServiceImages;
      'single-project.single-project': SingleProjectSingleProject;
      'single-tesimonial.single-tesimonial': SingleTesimonialSingleTesimonial;
      'testimonial.testimonial': TestimonialTestimonial;
    }
  }
}
