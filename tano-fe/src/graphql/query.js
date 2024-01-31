import { gql } from "@apollo/client";

export const GET_FOOTER_IMAGES = gql`
  query footerImage($publicationState: PublicationState) {
    footerImage(publicationState: $publicationState) {
      data {
        attributes {
          footerImages {
            data {
              attributes {
                url
              }
            }
          }
          background {
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

export const GET_HOME_HERO_BANNER = gql`
  query GetHomeHeroBanner($publicationState: PublicationState) {
    homeHeroBanner(publicationState: $publicationState) {
      data {
        attributes {
          homeHeroBanner {
            Image {
              data {
                attributes {
                  url
                }
              }
            }
            name
            location
          }
        }
      }
    }
  }
`;

export const GET_HOME_GET_TO_KNOW = gql`
  query GetAboutGetToKnow($publicationState: PublicationState) {
    homeGetToKnow(publicationState: $publicationState) {
      data {
        attributes {
          Image {
            data {
              attributes {
                url
              }
            }
          }
          name
          location
          testimonial {
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

export const GET_HOME_VIDEOS = gql`
  query GetHomeVideo($publicationState: PublicationState) {
    homeVideo(publicationState: $publicationState) {
      data {
        attributes {
          homeVideo {
            image {
              data {
                attributes {
                  url
                }
              }
            }
            type_1
            type_2
            location
            videoUrl
          }
        }
      }
    }
  }
`;

export const GET_HOME_PROJECTS_LIST = gql`
  query GetProjects($publicationState: PublicationState) {
    project(publicationState: $publicationState) {
      data {
        attributes {
          singleProject {
            name
            location
            image {
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
  }
`;

export const GET_AGENCY_MINIMAL_SERVICE = gql`
  query GetAgencyMinimalService($publicationState: PublicationState) {
    agencyMinimalService(publicationState: $publicationState) {
      data {
        attributes {
          serviceImages {
            heroBanner {
              data {
                attributes {
                  url
                }
              }
            }
            representImage1 {
              data {
                attributes {
                  url
                }
              }
            }
            representImage2 {
              data {
                attributes {
                  url
                }
              }
            }
            representImage3 {
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
  }
`;

export const GET_INTERIOR_DESIGN_SERVICE = gql`
  query GetInteriorDesignService($publicationState: PublicationState) {
    interiorDesignService(publicationState: $publicationState) {
      data {
        attributes {
          serviceImages {
            heroBanner {
              data {
                attributes {
                  url
                }
              }
            }
            representImage1 {
              data {
                attributes {
                  url
                }
              }
            }
            representImage2 {
              data {
                attributes {
                  url
                }
              }
            }
            representImage3 {
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
  }
`;

export const GET_URBAN_DESIGN_SERVICE = gql`
  query GetUrbanDesignService($publicationState: PublicationState) {
    urbanDesignService(publicationState: $publicationState) {
      data {
        attributes {
          serviceImages {
            heroBanner {
              data {
                attributes {
                  url
                }
              }
            }
            representImage1 {
              data {
                attributes {
                  url
                }
              }
            }
            representImage2 {
              data {
                attributes {
                  url
                }
              }
            }
            representImage3 {
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
  }
`;

export const GET_DECOR_PLAN_SERVICE = gql`
  query GetDecorPlanService($publicationState: PublicationState) {
    decorPlanService(publicationState: $publicationState) {
      data {
        attributes {
          serviceImages {
            heroBanner {
              data {
                attributes {
                  url
                }
              }
            }
            representImage1 {
              data {
                attributes {
                  url
                }
              }
            }
            representImage2 {
              data {
                attributes {
                  url
                }
              }
            }
            representImage3 {
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
  }
`;
