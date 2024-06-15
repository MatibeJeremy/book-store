"use client"

import {Grid, Snackbar, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {Badge} from "@mui/base";
import BookCard from "@/app/components/Cards/BookCard";
import {fetchBooks} from "@/app/store/actions/search";
import {useAppDispatch, useAppSelector} from "@/app/store";
import {
    filterBooks,
    setOpenReadingList,
    setToastNotification,
    setToastNotificationText
} from "@/app/store/reducers/search";
import * as React from "react";
import BookListPopper from "@/app/components/Cards/BookListPopper";
import {Book} from "@mui/icons-material";
import ReadingList from "@/app/components/Cards/ReadingListModal";

export default function SearchPage() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [readingListCount, setReadingListCount] = useState(0);
    const [searchText, setSearchText] = useState("");
    const dispatch = useAppDispatch();
    const readingList = useAppSelector((state) => state.search.readingList);

    const books = useAppSelector((state) => {
        return state.search.filteredBooks.length > 0 ? state.search.filteredBooks : state.search.books
    })

    const handleSearchChange = (event: any) => {
        setSearchText(event.target.value);
        setAnchorEl(event.currentTarget);
        dispatch(filterBooks(event.target.value));
    };

    const openCart = () =>{
        if(readingList.length !== 0){
            dispatch(setOpenReadingList(true))
        }
        else{
            setReadingListCount(0)
            dispatch(setToastNotification(true))
            dispatch(setToastNotificationText("Reading list is empty!"))
        }
    }

    useEffect(() => {
        fetchBooks(dispatch)
    }, []);

    useEffect(() => {
        setReadingListCount(readingList.length)
        if(readingList.length === 0){
            dispatch(setOpenReadingList(false))
            setReadingListCount(0)
        }
    }, [readingList]);

    return (
        <Grid container lg={10} sx={{
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            gap: "10%"
        }}>
            <Grid
                sx={{
                    margin: "auto",
                    display: "flex",
                }}
                item>
                <TextField
                    fullWidth
                    label="Search"
                    variant="outlined"
                    sx={{
                        margin: "auto",
                        '& .MuiOutlinedInput-root': {
                            width: '50ch',
                        },
                    }}
                    value={searchText}
                    onChange={handleSearchChange}
                />
                <BookListPopper
                    books={books}
                    searchText={searchText}
                    anchorEl={anchorEl}
                />
            </Grid>
            <Grid sx={{
                display: "flex",
                margin: "auto",
                cursor: "pointer"
            }}>
                <Badge onClick={openCart} badgeContent={readingListCount} color="error">
                    <Book sx={{
                        color: "#335C6E",
                    }}/>
                </Badge>
            </Grid>
            <Grid container sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                margin: "auto",
                gap: "5%"
            }}>
                {books.map((book, index) => (
                    <BookCard key={index} author={book.author} title={book.title} readingLevel={book.readingLevel}
                              coverPhotoURL={book.coverPhotoURL}/>
                ))}
            </Grid>
            <ReadingList/>
        </Grid>
    );
}
