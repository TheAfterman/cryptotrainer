import { makeStyles } from '@material-ui/styles';

const componentStyle = makeStyles({
    statContainer: {
        maxWidth: '200px',
        '& > h3': {
            fontStyle: 'italic',
            fontWeight: 'normal'
        }
    }
});

export default componentStyle;
