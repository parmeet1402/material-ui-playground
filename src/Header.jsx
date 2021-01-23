import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AcUnitRounded from "@material-ui/icons/AcUnitRounded";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles({
  typographyStyles: {
    flex: 1,
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          This is our header...
        </Typography>
        <AcUnitRounded />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
