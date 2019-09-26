import { makeStyles } from '@material-ui/styles';

const componentStyle = makeStyles({
    signInContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    introduction: {
        padding: '4rem',
        backgroundColor: 'rgb(173,155,154)',
        borderRight: '3px solid black',
        borderRadius: '5px'
    }
});

export default componentStyle;
