import React, { Component } from 'react'
import {connect} from 'react-redux';
import { getIndianFunc } from '../../Redux/actions';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import CardsList from './CardsList';
import Error from './Error';
import ReactGa  from 'react-ga';

const styles = theme => ({
    root: {
        flexGrow: 1,
        justifyContent: 'center',
        textAlign: 'center',
    }
});

class Indian extends Component {
    constructor(props) {
        super(props)
        this.state={
            isShowMore: true
        }
    }
    
    componentDidMount =async () => {
        ReactGa.initialize('UA-168738867-1')
        ReactGa.pageview(window.location.pathname)

        let receipeState = null
        if(localStorage.getItem('Receipestate')){
            receipeState = JSON.parse(localStorage.getItem('Receipestate'))
        }
        if(receipeState === null || receipeState.indian.data === null || receipeState.indian.data === false){
            if(this.props.state.indian.data === null || this.props.state.indian.data === false){
                this.props.getIndianList(0,20);
            }
        }      
    }
    
    handleShowMore = () => {
        ReactGa.initialize('UA-168738867-1')
        ReactGa.event({
            category:"Indian",
            action:"Clicked Show More"
        })

        this.setState({
            isShowMore: false
        })
        this.props.getIndianList(21,40);
    }
    render() {
        let receipes = []
        let showLoading = false
        const { classes } = this.props;
        const {isLoading, error, data} = this.props.state.indian
        let canRender = false
        let errorPage = false
        if(data !== null && data !== false && isLoading !== true){
            canRender = true
            if(localStorage.getItem('Receipestate')){
                let receipeState = JSON.parse(localStorage.getItem('Receipestate'))
                if(receipeState.indian.data !== null && receipeState.indian.data !== false){
                    if(receipeState.indian.data.length < 60 && receipeState.indian.data[0].id.toString() !== data[0].id.toString()){
                        let tempData = [...receipeState.indian.data, ...data]
                        receipeState = {
                            ...receipeState,
                            indian:{
                                isLoading: false,
                                data: tempData,
                                error: false
                            }
                        }
                        localStorage.setItem('Receipestate', JSON.stringify(receipeState))
                    }else{
                        receipeState = {
                            ...receipeState,
                            indian:{
                                isLoading: false,
                                data: data,
                                error: false
                            }
                        }
                        localStorage.setItem('Receipestate', JSON.stringify(receipeState))
                    }
                }else{
                    receipeState = {
                        ...receipeState,
                        indian:{
                            isLoading: false,
                            data: data,
                            error: false
                        }
                    }
                    localStorage.setItem('Receipestate', JSON.stringify(receipeState))
                }
            }else{
                localStorage.setItem('Receipestate', JSON.stringify(this.props.state))
            }
            if(data.length > 60 && this.state.isShowMore){
                this.setState({
                    isShowMore: false
                })
            }
            let receipeState = JSON.parse(localStorage.getItem('Receipestate'))
            receipes = receipeState.indian.data
        }else if(error !== null && error !== false){
            errorPage = true
        }else if(localStorage.getItem('Receipestate')){
            let receipeState = JSON.parse(localStorage.getItem('Receipestate'))
            if(receipeState.indian.data !== null && receipeState.indian.data !== false){
                canRender = true
                receipes = receipeState.indian.data
                if(receipes !== null && receipes.length > 60 && this.state.isShowMore){
                    this.setState({
                        isShowMore: false
                    })
                }
            }
        }
        if(isLoading !== null && isLoading === true){
            showLoading = true;
        }
        const parent = "indian";
        return (
            <div style={{marginTop: '70px'}}>
                <div className='indian'>
                    <div className='section-overlay'>
                        <h1>Indian food touches your soul before it touches your taste buds.</h1>
                    </div>
                </div>
                {showLoading && <CircularProgress />}
                {canRender && 
                    <div className={classes.root}>
                        <Grid className={classes.root} container spacing={3}>
                        {receipes.map(item => {
                            return(
                                <Grid key={item.id} item>
                                    <CardsList receipe={item} parent={parent}/>
                                </Grid>
                            )    
                            })}
                        </Grid>
                        {this.state.isShowMore && 
                            <Button size="small" style={{margin:'20px'}}  variant="contained" color="secondary" onClick={this.handleShowMore}>
                            SHOW MORE
                            </Button>}
                        {!this.state.isShowMore && showLoading && <CircularProgress style={{margin:'20px'}} color="secondary"/>}
                    </div>}
                {errorPage && <Error ErrorType={'loadingError'}/>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getIndianList: getIndianFunc(dispatch)
    }
}

export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
)(Indian);


