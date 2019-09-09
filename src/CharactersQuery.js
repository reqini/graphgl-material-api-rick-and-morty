import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from "react-apollo";

// Material Components
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// Components
import ItemCard from './ItemCard';
import ResponsiveDialog from './ResponsiveDialog';
import LoadingComponent from './LoadingComponent';

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
                  species
                  image
                  status
                  gender
                  episode{
                    id
                    name
                    air_date
                  }	
                }
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            const episodes = data.characters;
            console.log('hay algo? ', episodes)

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
                  species={character.species}
                  gender={character.gender}
                >
                  <ResponsiveDialog title="¡Capitulos en los que esta!" textButton="ver capitulos">
                    <List dense>  
                      {character.episode.map(e => (
                        <ListItem key={e.id}>
                          <ListItemText
                          primary={`Capítulo: ${e.id}`}
                          secondary={e.name}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </ResponsiveDialog>
                </ItemCard>
              </Grid>
            ));
          }}
        </Query>
      </Grid>
    );
  };export default CharactersQuery;