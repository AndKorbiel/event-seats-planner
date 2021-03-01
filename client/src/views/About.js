import GuestListController from '../components/Guest-list-controller';
import GuestInputController from '../components/Guest-input-controller';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export function About() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1>Hello from about page!</h1>
                    <GuestListController />
                    <GuestInputController />
                </Grid>
            </Grid>
        </div>
    )
}