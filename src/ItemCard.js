import React from 'react';

// Material Components
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '100%',
  },
  action: {
    background: theme.palette.primary.main
  }
}));

export default function ItemCard(props) {

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        {props.image ? 
          <CardMedia
          component="img"
          alt={`${props.name}`}
          height="300"
          image={`${props.image}`}
          title={props.name}
        /> : null}
        <CardContent>
            <Typography noWrap gutterBottom variant="h5" component="h2">
                {props.name}
            </Typography>
            <List dense>
              <Divider />
              <ListItem>
                  <ListItemText
                  primary="Status"
                  secondary={props.status}
                  />
                  <ListItemText
                  primary="Species"
                  secondary={props.species}
                  />
                  <ListItemText
                  primary="Gender"
                  secondary={props.gender}
                  />
              </ListItem>
            </List>
        </CardContent>
        {props.children ? 
          <CardActions className={classes.action}>
            {props.children}
          </CardActions>
        : null }
      </CardActionArea>
    </Card>
  );
}