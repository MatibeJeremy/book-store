import {setBooks, setBooksLoading} from "@/app/store/reducers/search";
import axios from "axios";
import {Dispatch} from "redux";

export const fetchBooks = async (
    dispatch: Dispatch,
)=>{
        dispatch(setBooksLoading(true))
        try {
            const response = await axios.post('http://localhost:4000/', {
                query: `
                    query Books {
                        books {
                            author
                            coverPhotoURL
                            readingLevel
                            title
                        }
                    }
                `,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            dispatch(setBooks(response.data.data.books));
            dispatch(setBooksLoading(false))
        } catch (error) {
            dispatch(setBooksLoading(true))
            console.log(error);
        }
    }
