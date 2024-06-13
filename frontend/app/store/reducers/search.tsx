import {createSlice} from "@reduxjs/toolkit";


export interface IBook {
    title: string;
    author: string;
    coverPhotoURL: string;
    readingLevel: string;
}

interface SearchReducerProps {
    books: IBook[];
    booksLoading: boolean;
    readingList: IBook[];
    filteredBooks: IBook[];
    openReadingList: boolean
}

const initialState: SearchReducerProps = {
    books: [],
    booksLoading: false,
    readingList: [],
    filteredBooks: [],
    openReadingList: false
};

const searchSlice = createSlice({
    name: "search",
    initialState: initialState,
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload;
        },
        setBooksLoading: (state, action) => {
            state.booksLoading = action.payload;
        },
        setReadingList: (state, action) => {
            const newBooks = Array.isArray(action.payload) ? action.payload : [action.payload];
            newBooks.forEach(newBook => {
                if (!state.readingList.some(book => book.title === newBook.title)) {
                    state.readingList.push(newBook);
                    window.alert("Book added to reading list!")
                }else{
                    window.alert("Book already in reading list!")
                }
            });
        },
        filterBooks: (state, action) => {
            const searchText = action.payload.toLowerCase();
            state.filteredBooks = state.books.filter(book =>
                book.title.toLowerCase().includes(searchText)
            );
        },
        setOpenReadingList: (state, action) => {
            state.openReadingList = action.payload;
        },
        removeBookByTitle: (state, action) => {
            state.readingList = state.readingList.filter(book => book.title !== action.payload);
            if(state.readingList.length === 0){
                setOpenReadingList(false)
                window.location.reload()
            }
        }
    },
});

export const {
    setBooks,
    setBooksLoading,
    filterBooks,
    setOpenReadingList,
    removeBookByTitle,
    setReadingList} = searchSlice.actions;

export default searchSlice.reducer;
