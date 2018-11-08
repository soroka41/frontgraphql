import gql from 'graphql-tag';

export const getUser = () => gql`
  query {
    repository(owner:"octocat", name:"Hello-World") {
      issues(last:20, states:CLOSED) {
        edges {
          node {
            title
            url
            labels(first:5) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  }`
;
