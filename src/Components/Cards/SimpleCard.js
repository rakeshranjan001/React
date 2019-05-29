import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function SimpleCard(props) {
  const classes = useStyles();
  return (<div className="">
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          <a href={props.url}>{props.url}</a>
        </Typography>
        <Typography variant="body2" component="p">
          {props.summary}
          {console.log(props)}

        </Typography>
      </CardContent>
      <Button size="small">View More</Button>
    </Card>
    </div>
  );
}

export default SimpleCard;

const useStyles = makeStyles({
    card: {
      width: "100%",
      height:"175px",
      overflow:"auto",
      padding:"7px"
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    }
  });
