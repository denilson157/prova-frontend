import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '100vh',
    }
}));

const Home = () => {

    const classes = useStyles();

    return (
        <div className={classes.content}>
            <Typography variant="h3" component="h1" gutterBottom>
                Avaliação de Denílson
            </Typography>
            <Link to="/items" className={classes.link}>
                <Button variant="contained" color="primary">
                    Acessar o teste
                </Button>
            </Link>
        </div>
    )
}

export default Home;