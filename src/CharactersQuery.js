import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from "react-apollo";
import ItemCard from './ItemCard';
import LoadingComponent from './LoadingComponent';
import Grid from '@material-ui/core/Grid';

const loadingList = [1,2,3,4,5,6];

const CharactersQuery = () => {
    return (
      <Grid container spacing={3}>
        <Query
          query={gql`
            {
              characters {
                results {
                  id
                  name
                  type
                  image
                }
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return (
              <React.Fragment>
                {loadingList.map(i =>
                  <Grid key={i} item lg={4} sm={6} xs={12}>
                    <LoadingComponent/>
                  </Grid>
                )}
              </React.Fragment>
            );
            if (error) return <p>Error :(</p>;
    
            return data && data.characters && data.characters.results.map(character => (
              <Grid item lg={4} sm={6} xs={12} key={character.id}>
                <ItemCard 
                  image={character.image} 
                  name={character.name} 
                  status={character.status} 
                />
              </Grid>
            ));
          }}
        </Query>
      </Grid>
    );
  };export default CharactersQuery;