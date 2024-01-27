import type { Schema, Attribute } from '@strapi/strapi';

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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'our-team.our-team': OurTeamOurTeam;
      'single-tesimonial.single-tesimonial': SingleTesimonialSingleTesimonial;
    }
  }
}
