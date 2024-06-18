"use client"

import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Grid} from "@mui/material";
import {useAppDispatch, useAppSelector} from "@/app/store";
import BookCardSkeleton from "@/app/components/Cards/BookCardSkeleton";
import {Button} from "@mui/material";
import {Add, Check} from "@mui/icons-material";
import {IBook, setFetchingBooksError, setReadingList} from "@/app/store/reducers/search";
import {useEffect} from "react";

interface BookCardProps {
    author: string;
    coverPhotoURL: string;
    readingLevel: string;
    title: string;
}
export default function BookCard({author, coverPhotoURL, readingLevel, title}: BookCardProps) {
    const dispatch = useAppDispatch()
    const loading = useAppSelector(
        (state) => state.search.booksLoading
    );
    const books = useAppSelector(
        (state) => state.search.books
    );
    const isBookInReadingList = useAppSelector(
        (state) => state.search.readingList.some(book => book.title === title)
    );
    const bookPayload: IBook = {
        "author": author,
        "coverPhotoURL": coverPhotoURL,
        "readingLevel": readingLevel,
        "title": title
    }

    const addToReadingList = () =>{
        dispatch(setReadingList(bookPayload))
    }

    useEffect(() => {
        dispatch(setFetchingBooksError(false))
    }, []);

    return (
        loading || books.length === 0 ? <BookCardSkeleton /> :
        <Grid sx={{
            marginTop: "5%"
        }}>
            <Card sx={{ width: 345, margin: "auto" }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "#5ACCCC" }} aria-label="recipe">
                            {author.split(' ').map(word => word[0]).join('')}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={title}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={coverPhotoURL}
                    alt={title}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Author: {author} <br/>
                        Reading Level: {readingLevel}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Button
                        sx={{
                            backgroundColor: isBookInReadingList ? '#335C6E' : '#5ACCCC',
                            textTransform: "none",
                            color: 'white',
                            '&:hover': {
                                backgroundColor: isBookInReadingList ? '#5ACCCC' : "#335C6E",
                                color: 'white'
                            }
                        }}
                        endIcon={
                            isBookInReadingList ? <Check /> : <Add/>
                        }
                        onClick={addToReadingList}
                    >{isBookInReadingList ? 'Added' : 'Add to List'}</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
