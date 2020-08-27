import React from 'react'
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';

const List=()=>{
    let lsdata = [];
    for (var i = 0; i < 1; i++){
        lsdata.push(<Typography component="div" key={'h3'} variant={'h3'}>
                    <Skeleton variant="text" />
                    </Typography>
                )
    }
    return lsdata
}

const TableSceleton=(props)=>{
    return(
        <>
        {
            props.loading?
            <Grid item xs>
            <h1>{props.title}</h1>
            <h1><Skeleton variant="text" style={{width:'50%'}} /></h1>
            <List/>
            <Skeleton component="div" key={'h1'} variant={'h1'} />
            <Skeleton component="div" key={'h1'} variant={'h1'} />
            <Skeleton animation="wave" variant="rect" width={'100%'} style={{minHeight:'400px'}}>
                    <Skeleton component="div" key={'h1'} variant={'h1'} />
            </Skeleton>
            <Skeleton component="div" key={'h1'} variant={'h1'} />\
        </Grid>:''
        }
        </>
    )
}
export default TableSceleton