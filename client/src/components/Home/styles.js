import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      borderRadius: 15,
    },
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2)
  },
}));
