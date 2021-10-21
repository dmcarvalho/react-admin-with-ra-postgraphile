import { ApolloClient as _ApolloClient, InMemoryCache} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

const ApolloClient = new _ApolloClient({
    link: createUploadLink({
        uri: 'https://l60tijnn5h.execute-api.us-east-1.amazonaws.com/Stage/graphql',
    }),
    cache: new InMemoryCache(),
});

export default ApolloClient;