import React, { Component } from 'react'
import {connect} from 'react-redux';
import { getDessertFunc } from '../../Redux/actions';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid, Button } from '@material-ui/core';
import CardsList from './CardsList';
import Error from './Error';
import ReactGa  from 'react-ga';
import {CheckForReLoad} from '../utils/util'


class Desserts extends Component {
    constructor(props) {
        super(props)
        this.state={
            isShowMore: true
        }
    }

    componentDidMount(){
        ReactGa.initialize('UA-168738867-1')
        ReactGa.pageview(window.location.pathname)
        CheckForReLoad()
        let receipeState = null
        if(localStorage.getItem('Receipestate')){
            receipeState = JSON.parse(localStorage.getItem('Receipestate'))
        }
        if(receipeState === null || receipeState.dessert.data === null || receipeState.dessert.data === false){
            if(this.props.state.dessert.data === null || this.props.state.dessert.data === false){
                this.props.getDessertList(0,20);
            } 
        }
    }
    
    handleShowMore = () => {
        ReactGa.initialize('UA-168738867-1')
        ReactGa.event({
            category:"Dessert",
            action:"Clicked Show More"
        })
        this.setState({
            isShowMore: false
        })
        this.props.getDessertList(21,40);
    }
    render() {
        let receipes = []
        let showLoading = false
        const {isLoading, error, data} = this.props.state.dessert
        let canRender = false
        let errorPage = false
        if(data !== null && data !== false && isLoading !== true){
            canRender = true
            if(localStorage.getItem('Receipestate')){
                let receipeState = JSON.parse(localStorage.getItem('Receipestate'))
                if(receipeState.dessert.data !== null && receipeState.dessert.data !== false){
                    if(receipeState.dessert.data.length < 60 && receipeState.dessert.data[0].id.toString() !== data[0].id.toString()){
                        let tempData = [...receipeState.dessert.data, ...data]
                        receipeState = {
                            ...receipeState,
                            dessert:{
                                isLoading: false,
                                data: tempData,
                                error: false
                            }
                        }
                        localStorage.setItem('Receipestate', JSON.stringify(receipeState))
                    }else{
                        receipeState = {
                            ...receipeState,
                            dessert:{
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
                        dessert:{
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
            receipes = receipeState.dessert.data
        }else if(error !== null && error !== false){
            errorPage = true
        }else if(localStorage.getItem('Receipestate')){
            let receipeState = JSON.parse(localStorage.getItem('Receipestate'))
            if(receipeState.dessert.data !== null && receipeState.dessert.data !== false){
                canRender = true
                receipes = receipeState.dessert.data
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
        const parent = "dessert"
        return (
        <div style={{marginTop: '70px'}}>
            <div className='dessert'>
                    <div className='section-overlay'>
                        <h1>Skinny people are easier to kidnap. Stay safe, eat cake.</h1>
                    </div>
                </div>
            {showLoading && <CircularProgress />}
            {canRender && 
                <div className='root'>
                    <Grid className='root' container spacing={3}>
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
        getDessertList: getDessertFunc(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Desserts);
