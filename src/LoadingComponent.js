import React from 'react';

// Material Components
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Skeleton from '@material-ui/lab/Skeleton';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  card: {
    maxWidth: '100%',
  },
});

export default function LoadingComponent() {

  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <Skeleton variant="rect" width={'100%'} height={240} />
        <CardContent>
            <Skeleton />
            <Skeleton width="60%" />
        </CardContent>
    </Card>
  );
}