import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';



class CardsList extends Component {

    render() {
        const {thumbnail_url, name} = this.props.receipe
        return (
            <Card style={{maxWidth: 345}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={name}
                        height="250"
                        image= {thumbnail_url}
                        title={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="subtitle1" component="h1">
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/receipes/${this.props.receipe.id + "-" + this.props.parent}`} style={{textDecoration: 'none', color: 'white'}}>
                        <Button size="small" variant="contained" color="secondary" >
                            See receipe
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        )
    }
}

export default CardsList
