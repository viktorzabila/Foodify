import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CardActions } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PageLayout from '../../components/PageLayout';
import Loading from '../../components/Loading';
import Card from '../../components/Card';
import * as action from '../../redux/actions/general';
import { useStyles } from './styles';

const Main = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { recipe, recipeFavourList } = useSelector((state) => state.general);
    const { isLoading } = useSelector((state) => state.general);
    const { idMeal, strMeal, strMealThumb, strInstructions } = recipe;
    const [isFavour, setFavour] = useState(false);

    const skipAction = () => {
        dispatch(action.setRecipe());
    };

    const likeAction = () => {
        const delFromRecipeFavourList = recipeFavourList.filter(
            (item) => item.idMeal !== idMeal,
        );
        dispatch(
            action.setFavourList(
                isFavour
                    ? delFromRecipeFavourList
                    : [...recipeFavourList, recipe],
            ),
        );
        dispatch(action.setRecipe());
    };

    return (
        <PageLayout>
            {isLoading ? (
                <Loading />
            ) : (
                <Card
                    dishName={strMeal}
                    id={idMeal}
                    imageUrl={strMealThumb}
                    instructions={strInstructions}
                >
                    <CardActions className={classes.cardActions}>
                        <Button
                            endIcon={<SendIcon />}
                            size="small"
                            onClick={skipAction}
                        >
                            Skip
                        </Button>
                        <Button
                            endIcon={
                                isFavour ? (
                                    <FavoriteIcon />
                                ) : (
                                    <FavoriteBorderIcon />
                                )
                            }
                            size="small"
                            onClick={likeAction}
                        >
                            Like
                        </Button>
                    </CardActions>
                </Card>
            )}
        </PageLayout>
    );
};

export default Main;
