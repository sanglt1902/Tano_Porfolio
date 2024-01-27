import { gql } from "@apollo/client";

export const GET_FOOTER_IMAGES = gql`
  query footerImage($publicationState: PublicationState) {
    footerImage(publicationState: $publicationState) {
      data {
        attributes {
          FooterImages {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_CONTACT_HERO_BANNER = gql`
  query GetContactHeroBanner($publicationState: PublicationState) {
    contactHeroBanner(publicationState: $publicationState) {
      data {
        attributes {
          contactHeroBanner {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ABOUT_HERO_BANNER = gql`
  query GetAboutHeroBanner($publicationState: PublicationState) {
    aboutHeroBanner(publicationState: $publicationState) {
      data {
        attributes {
          aboutHeroBanner {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ABOUT_GET_TO_KNOW = gql`
  query GetAboutGetToKnow($publicationState: PublicationState) {
    aboutGetToKnow(publicationState: $publicationState) {
      data {
        attributes {
          experiences
          getToKnowImage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ABOUT_TESTIMONIALS = gql`
  query GetAboutTestimonial($id: ID) {
    aboutTestimonial(id: $id) {
      data {
        attributes {
          aboutTestimonialBackground {
            data {
              attributes {
                url
              }
            }
          }
          singleTesimonial {
            image {
              data {
                attributes {
                  url
                }
              }
            }
            name
            role
            description
          }
        }
      }
    }
  }
`;

export const GET_ABOUT_CLIENT_SECTION = gql`
  query GetAboutClientSection($publicationState: PublicationState) {
    aboutClientSection(publicationState: $publicationState) {
      data {
        attributes {
          aboutClientSection {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_OUR_TEAM = gql`
  query GetOurTeam($publicationState: PublicationState) {
    ourTeam(publicationState: $publicationState) {
      data {
        attributes {
          ourTeam {
            image {
              data {
                attributes {
                  url
                }
              }
            }
            name
            role
            facebook
            instagram
          }
        }
      }
    }
  }
`;
