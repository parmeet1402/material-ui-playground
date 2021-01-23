import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  },
});

const CoffeeCard = props => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            aria-label={props.title}
            className={classes.avatar}
            src={props.avatarSrc}
          >
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.subTitle}
      />
      <CardMedia style={{ height: "150px" }} image={props.imageSrc} />
      <CardContent>
        <Typography>{props.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
        <Button size="small">Offer</Button>
      </CardActions>
    </Card>
  );
};

export default CoffeeCard;
