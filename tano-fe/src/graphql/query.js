import { gql } from "@apollo/client";

export const GET_SLIDE_BY_ID = gql`
  query slide($id: ID) {
    slide(id: $id) {
      data {
        id
        attributes {
          images {
            data {
              attributes {
                url
                previewUrl
              }
            }
          }
        }
      }
    }
  }
`;

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
