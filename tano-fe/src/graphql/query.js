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
  query GetAboutTestimonial($publicationState: PublicationState) {
    aboutTestimonial(publicationState: $publicationState) {
      data {
        attributes {
          aboutTestimonialBackground {
            data {
              attributes {
                url
              }
            }
          }
          singleTestimonial {
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

export const GET_ARCHITECTURAL_VISUALIZATION_SERVICE = gql`
  query GetArchitecturalVisualizationServiceService(
    $publicationState: PublicationState
  ) {
    architecturalVisualizationService(publicationState: $publicationState) {
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

export const GET_FLOORPLANS_SERVICE = gql`
  query GetFloorplansService($publicationState: PublicationState) {
    floorplansService(publicationState: $publicationState) {
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

export const GET_PRODUCT_VISUALIZATION_SERVICE = gql`
  query GetProductVisualizationService($publicationState: PublicationState) {
    productVisualizationService(publicationState: $publicationState) {
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

export const GET_PROJECT_PAGE_HERO_BANNER = gql`
  query GetProjectPageHeroBanner($publicationState: PublicationState) {
    projectPageHeroBanner(publicationState: $publicationState) {
      data {
        attributes {
          projectPageHeroBanner {
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

export const GET_PROJECTS_LIST = gql`
  query GetProjectDetails(
    $publicationState: PublicationState
    $start: Int
    $limit: Int
  ) {
    projectDetails(
      publicationState: $publicationState
      pagination: { start: $start, limit: $limit }
    ) {
      data {
        id
        attributes {
          name
          location
          category
          projectsPageImage {
            data {
              attributes {
                url
              }
            }
          }
          homeImage {
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

export const GET_PROJECT_DETAIL = gql`
  query GetProjectDetail($id: ID) {
    projectDetail(id: $id) {
      data {
        id
        attributes {
          category
          description
          detailPageImage {
            data {
              attributes {
                url
              }
            }
          }
          detailPageHeroBanner {
            data {
              attributes {
                url
              }
            }
          }
          designSolutionContent
          designSolutionImage1 {
            data {
              attributes {
                url
              }
            }
          }
          designSolutionImage2 {
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

export const GET_TEAM_PAGE_HERO_BANNER = gql`
  query GetTeamPageHeroBanner($publicationState: PublicationState) {
    teamPageHeroBanner(publicationState: $publicationState) {
      data {
        attributes {
          teamPageHeroBanner {
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
  query GetOurTeamDetails($publicationState: PublicationState) {
    ourTeamDetails(publicationState: $publicationState) {
      data {
        id
        attributes {
          aboutImage {
            data {
              attributes {
                url
              }
            }
          }
          teamPageImage {
            data {
              attributes {
                url
              }
            }
          }
          name
          role
          level
          facebook
          instagram
        }
      }
    }
  }
`;

export const GET_TEAM_MEMBER_DETAIL = gql`
  query GetOurTeamDetail($id: ID) {
    ourTeamDetail(id: $id) {
      data {
        id
        attributes {
          detailHeroBanner {
            data {
              attributes {
                url
              }
            }
          }
          detailRepresentImage {
            data {
              attributes {
                url
              }
            }
          }
          detailDescription
          name
          role
          level
          facebook
          instagram
          age
          experience
          skills
          mobilePhoneNumber
          email
        }
      }
    }
  }
`;
