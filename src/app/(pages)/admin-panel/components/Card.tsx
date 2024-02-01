import * as React from 'react'
import {Card as MuiCard} from '@mui/material/';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography, Button } from '@mui/material';


interface CardProps {
    children? : React.ReactElement | any,
    title? : string,
    heading : string,
    onClick? : () => void
}


const Card = ({ children,title,heading,onClick }: CardProps): React.JSX.Element => {
    return (
        <MuiCard title={title} sx={{ maxWidth: '300px',width : '100%',display : 'flex',flexDirection : 'column',justifyContent : 'space-between' }}>
            <CardContent>
                <Typography variant='h1' sx={{ fontSize: '1.1rem',fontWeight : '600'}} gutterBottom>
                    {heading}
                </Typography>
                {children}
            </CardContent>
            <CardActions className='flex justify-end'>
                <Button onClick={onClick} size='small'>
                    Done
                </Button>
            </CardActions>
        </MuiCard>
    )
}

export default React.memo(Card)
