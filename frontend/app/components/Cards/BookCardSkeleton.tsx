import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton';
import {Grid} from "@mui/material";

export default function BookCardSkeleton() {
    return (
        <Grid sx={{ marginTop: "5%" }}>
            <Card sx={{ width: 345, margin: "auto" }}>
                <CardHeader
                    avatar={
                        <Skeleton variant="circular" width={40} height={40} />
                    }
                    action={
                        <IconButton>
                            <Skeleton variant="circular" width={40} height={40} />
                        </IconButton>
                    }
                    title={<Skeleton variant="text" width="80%" />}
                />
                <CardMedia>
                    <Skeleton variant="rectangular" width="100%" height={194} />
                </CardMedia>
                <CardContent>
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton>
                        <Skeleton variant="circular" width={40} height={40} />
                    </IconButton>
                    <IconButton>
                        <Skeleton variant="circular" width={40} height={40} />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
}
