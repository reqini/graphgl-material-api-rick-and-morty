import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from "react-apollo";

// Material Components
import Grid from '@material-ui/core/Grid';

// Components
import ItemCard from './ItemCard';
import LoadingComponent from './LoadingComponent';

const loadingList = [1,2,3,4,5,6];

const Episodes = () => {
    return (
      <Grid container spacing={3}>
        <Query
          query={gql`
            {
              episodes {
                results {
                  id
                  name
                  episode
                  air_date
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
    
            return data && data.episodes && data.episodes.results.map(episode => (
              <Grid item lg={4} sm={6} xs={12} key={episode.id}>
                <ItemCard 
                  name={episode.name} 
                  species={episode.episode}
                  gender={episode.air_date}
                />
              </Grid>
            ));
          }}
        </Query>
      </Grid>
    );
  };export default Episodes;