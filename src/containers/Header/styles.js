import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    header: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    modalButton: {
        backgroundColor: '#C4C4C4',
    },
    headerList: {
        minHeight: '60px',
        backgroundColor: '#F2F2F2',
        '& :first-child': {
            justifyContent: 'flex-end',
        },
    },
    headerItemModal: {
        justifyContent: 'flex-start',
        '@media (max-width:959px)': {
            justifyContent: 'center',
        },
    },
}));
