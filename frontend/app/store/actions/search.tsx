import {
    setBooks,
    setBooksLoading,
    setFetchingBooksError,
    setToastNotification,
    setToastNotificationText
} from "@/app/store/reducers/search";
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
        } catch (error: any) {
            dispatch(setBooksLoading(true))
            dispatch(setFetchingBooksError(true))
            if (error.message == "Network Error") {
                dispatch(setToastNotification(true))
                dispatch(setToastNotificationText("Kindly launch the backend server and try again!"))
            }
        }
    }
