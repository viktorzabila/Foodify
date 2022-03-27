import React from 'react';
import PropTypes from 'prop-types';
import { Container, Box } from '@material-ui/core';
import Header from '../../containers/Header';
import { useStyles } from './styles';

const PageLayout = ({ children, isModal }) => {
    const classes = useStyles();

    return (
        <>
            <Header isModal={isModal} />
            <Container className={classes.pageLayout} maxWidth="lg">
                <Box className={classes.pageLayoutBox} component="main" my={2}>
                    {children}
                </Box>
            </Container>
        </>
    );
};

PageLayout.propTypes = {
    children: PropTypes.node,
    isModal: PropTypes.bool,
};

export default PageLayout;
