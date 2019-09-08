import { makeStyles } from '@material-ui/styles';

const componentStyle = makeStyles({
    inputForm: {
        marginTop: '1rem'
    },
    statBox: {
        minWidth: '200px',
        margin: '1rem 1rem 0 0',
        padding: '1rem'
    },
    buttonRow: {
        marginTop: '1rem',
        '& Button': {
           marginRight: '1rem'
        }
    },
    divider: {
        marginTop: '1rem !important'
    }
});

export default componentStyle;
