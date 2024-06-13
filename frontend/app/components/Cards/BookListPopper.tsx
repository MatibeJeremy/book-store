import React from 'react';
import { Grid, Popper, Paper, CardMedia, Stack, Typography } from '@mui/material';
import {IBook} from "@/app/store/reducers/search";

interface BookSearchProps {
    books: IBook[];
    searchText: string;
    anchorEl: null | HTMLElement;
}
const BookListPopper = ({ books, searchText, anchorEl }: BookSearchProps) => (
    <Grid sx={{ height: "200px", overflow: "auto" }}>
        <Popper open={Boolean(searchText)} anchorEl={anchorEl} sx={{ width: '50%' }}>
            <Grid sx={{ height: "200px", overflowY: "auto" }}>
                {books.map((book, index) => (
                    <Paper
                        key={index}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            mb: 1 // Adds margin between items
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="60"
                            image={book.coverPhotoURL}
                            alt={book.title}
                            sx={{ width: '60px' }} // Ensure consistent image size
                        />
                        <Stack sx={{ ml: 2 }}> {/* Adds some space between image and text */}
                            <Typography variant="body1">{book.title}</Typography>
                        </Stack>
                    </Paper>
                ))}
            </Grid>
        </Popper>
    </Grid>
);

export default BookListPopper;
