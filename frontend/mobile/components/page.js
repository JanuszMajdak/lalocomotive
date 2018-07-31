import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { graphql, ApolloProvider } from "react-apollo";
import gql from "graphql-tag";

// const QUERY = gql`
//   {
//     pages {
//       title
//       imageUrl
//     }
//   }
// `;

// class Page extends React.Component {
//   render() {
//     return (
//       <Text style={{ textAlign: "center", padding: 40 }}> Cool </Text>

//       // {({ loading, error, data }) => {
//       //   if (loading) return <Text>Fetching</Text>;
//       //   if (error) return <Text>problem</Text>;

//       //   const pagesToRender = data.pages[0];

//       //   return (
//       //     <div>{<Page key={pagesToRender.id} page={pagesToRender} />}</div>
//       //   );
//       // }}
//     );
//   }
// }

function QCM({ data: { loading, pages } }) {
  if (loading) {
    return <Text>Loading</Text>;
  } else {
    return <Text style={{ textAlign: "center", padding: 40 }}> {pages[0].title} </Text>;
  }
}

export default graphql(gql`
  query allPages {
    pages {
      title
    }
  }
`)(QCM);

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  descriptionContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginTop: 30
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    height: 30
  },
  title: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "bold"
  },
  textContainer: {
    alignItems: "center",
    marginTop: 10,
    width: "90%"
  },
  cardsContainer: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%"
  },
  card: {
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    width: "48%"
  },
  cardTitle: {
    marginBottom: 10,
    fontWeight: "bold"
  },

  buttonContainer: {
    marginBottom: 10,
    width: "100%",
    padding: 10
  },
  welcome: {
    fontSize: 50,
    textAlign: "center",
    justifyContent: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  image: {}
});

// export default Page;
