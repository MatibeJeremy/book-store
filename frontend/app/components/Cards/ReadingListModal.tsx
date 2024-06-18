import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import {useAppDispatch, useAppSelector} from "@/app/store";
import {removeBookByTitle, setOpenReadingList} from "@/app/store/reducers/search";
import {DialogContent} from "@mui/material";
import {Delete} from "@mui/icons-material";

export interface SimpleDialogProps {
    open: boolean;
    onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
    const { onClose, open } = props;
    const readingList = useAppSelector((state) => state.search.readingList);
    const dispatch = useAppDispatch();

    const handleRemoveBook = (title: string) => {
        dispatch(removeBookByTitle(title))
    };

    return (
        <Dialog onClose={onClose}  open={open}>
            <DialogContent>
                <DialogTitle>
                    <Typography sx={{
                        display:"flex",
                        justifyContent:"center"
                    }}>
                        Reading List
                    </Typography>
                </DialogTitle>
                {readingList.length > 0 ?
                    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {readingList.map((book, index) => {
                            const labelId = `checkbox-list-secondary-label-${index}`;
                            return (
                                <ListItem
                                    key={index}
                                    secondaryAction={
                                        <Delete
                                            onClick={()=> handleRemoveBook(book.title)}
                                            sx={{
                                                cursor: "pointer",
                                                color: "#FABD33",
                                            }}/>
                                    }
                                    disablePadding
                                >
                                    <ListItemButton>
                                        <ListItemAvatar>
                                            <Avatar
                                                src={book.coverPhotoURL}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText id={labelId} primary={`${book.title}`} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                    :
                   <Typography>
                       Kindly add books to your reading list!
                   </Typography>
                }

            </DialogContent>
        </Dialog>
    );
}

export default function ReadingList() {
    const open = useAppSelector((state) => state.search.openReadingList);
    const dispatch = useAppDispatch();

    const handleClose = () => {
        dispatch(setOpenReadingList(false))
    };

    return (
        <div>
            <SimpleDialog
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}
