import React, { Component } from "react";
import Page from "./Page";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const QUERY = gql`
  {
    pages {
      title
      imageUrl
    }
  }
`;

class PageList extends Component {
  render() {
    return (
      <Query query={QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>problem</div>;

          const pagesToRender = data.pages[0];

          return (
            <div>{<Page key={pagesToRender.id} page={pagesToRender} />}</div>
          );
        }}
      </Query>
    );
  }
}

export default PageList;
