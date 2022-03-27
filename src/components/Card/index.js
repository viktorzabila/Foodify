import React from 'react';
import PropTypes from 'prop-types';
import {
    Card as CardMUI,
    CardActionArea,
    CardContent,
    CardMedia,
    Box,
    Typography,
} from '@material-ui/core';
import { useStyles } from './styles';
import placeholderImage from '../../assets/img/placeholder.png';

const Card = (props) => {
    const { imageUrl, dishName, instructions, children } = props;
    const classes = useStyles();
    const image = imageUrl;

    return (
        <CardMUI className={classes.card}>
            <CardActionArea className={classes.cardLink}>
                <Box className={classes.cardMediaBox}>
                    <CardMedia
                        className={classes.cardMedia}
                        component="img"
                        src={image || placeholderImage}
                        alt="placeholder"
                        title={`${dishName} image`}
                    />
                </Box>
                <CardContent>
                    <Typography gutterBottom component="h2" variant="h5">
                        {dishName}
                    </Typography>
                    <Typography
                        align="justify"
                        className={classes.cardInstructions}
                        color="textSecondary"
                        component="p"
                        variant="body2"
                    >
                        {instructions}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {children}
        </CardMUI>
    );
};

Card.propTypes = {
    children: PropTypes.node,
    imageUrl: PropTypes.string,
    dishName: PropTypes.string,
    instructions: PropTypes.string,
    id: PropTypes.string,
};

export default Card;
