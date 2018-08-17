import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
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
    var title = pages[8].title;
    var imageUrl = pages[8].imageUrl;
    return (
      <View style={styles.pageContainer}>
        <View style={styles.questionContainer}>
          <Text style={{ textAlign: "center", padding: 40, paddingTop: 60 }}>
            {title}
          </Text>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={{ height: 100, resizeMode: "contain" }}
              source={{
                uri: imageUrl
              }}
            />
          </View>
          <View style={styles.choicesContainer} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            // onPress={onPressLearnMore}
            title="Next"
            color="blue"
          />
        </View>
      </View>
    );
  }
}

export default graphql(gql`
  query allPages {
    pages {
      title
      imageUrl
    }
  }
`)(QCM);

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: "space-between",
    backgroundColor: "red",
    height: "100%"
  },
  questionContainer: {
    backgroundColor: "white"
  },
  mainContainer: {
    backgroundColor: "green",
    flex: 1
  },
  imageContainer: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 3,
    backgroundColor: "white"
  },
  choicesContainer: {
    backgroundColor: "blue"
  },
  buttonContainer: {
    backgroundColor: "white"
  }
});

// export default Page;
