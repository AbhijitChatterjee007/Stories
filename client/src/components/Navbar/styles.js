import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';


export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    padding: '10px 65px',
    justifyContent: 'space-between',

  },
  heading: {
    color: 'rgba(59,89,142, 1)',
    textDecoration: 'none',
    paddingLeft:'10px'
  },
  image: {
    margin: '15px',
  },
  toolbar: {
    display: 'flex',
    width: '20px',
  },
  profile: {
    display: 'flex',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '20px',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
