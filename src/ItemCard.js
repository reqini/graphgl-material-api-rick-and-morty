import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  card: {
    maxWidth: '100%',
  },
});

export default function ItemCard(props) {

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={`${props.name}`}
          height="240"
          image={`${props.image}`}
          title={props.name}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {props.name}
            </Typography>
            <List>
                <ListItem>
                    <ListItemText
                    primary="Status"
                    secondary={props.status}
                    />
                </ListItem>
            </List>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}