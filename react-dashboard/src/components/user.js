import React, { Component } from 'react';
import { gql, ApolloClient, createNetworkInterface, ApolloProvider, graphql } from 'react-apollo';



// const FeedWithData = graphql(gql`
//   query customer($id:1)
//     {
//       name,
//       email
//       }
//   `, { options: { notifyOnNetworkStatusChange: true } })();




const Graphqlquery = gql`
  
  query Graphqlquery {
   
    feed {
        id
    }
  }`;


const QuerywithData = graphql(Graphqlquery)(Feed);


const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://api.githunt.com/graphiql'
  })
});

class User extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      // Feed the client instance into your React component tree
      <ApolloProvider client={client}>
        <QuerywithData />
      </ApolloProvider>
    );
  }
}

function Feed({ data: { data } }) {
  console.clear();
  console.log(data);



  return (
    <div>
     </div>
  );
}


export default User;

