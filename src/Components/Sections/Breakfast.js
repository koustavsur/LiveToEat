import React, { Component } from 'react'
import {connect} from 'react-redux';
import { getBreakfastFunc } from '../../Redux/actions';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid, Button } from '@material-ui/core';
import CardsList from './CardsList';
import Error from './Error';
import ReactGa  from 'react-ga';
import {CheckForReLoad} from '../utils/util'

class Breakfast extends Component {
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
        if(receipeState === null || receipeState.breakfast.data === null || receipeState.breakfast.data === false){
            if(this.props.state.breakfast.data === null || this.props.state.breakfast.data === false){
                this.props.getBreakfastList(0,20);
            }
        }
    }

    handleShowMore = () => {
        ReactGa.initialize('UA-168738867-1')
        ReactGa.event({
            category:"Breakfast",
            action:"Clicked Show More"
        })
        this.setState({
            isShowMore: false
        })
        this.props.getBreakfastList(21,40);
    }
    render() {
        let receipes = []
        let showLoading = false
        const {isLoading, error, data} = this.props.state.breakfast
        let canRender = false
        let errorPage = false
        if(data !== null && data !== false){
            canRender = true
            if(localStorage.getItem('Receipestate')){
                let receipeState = JSON.parse(localStorage.getItem('Receipestate'))
                if(receipeState.breakfast.data !== null && receipeState.breakfast.data !== false){
                    if(receipeState.breakfast.data.length < 60 && receipeState.breakfast.data[0].id.toString() !== data[0].id.toString()){
                        let tempData = [...receipeState.breakfast.data, ...data]
                        receipeState = {
                            ...receipeState,
                            breakfast:{
                                isLoading: false,
                                data: tempData,
                                error: false
                            }
                        }
                        localStorage.setItem('Receipestate', JSON.stringify(receipeState))
                    }else{
                        receipeState = {
                            ...receipeState,
                            breakfast:{
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
                        breakfast:{
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
            receipes = receipeState.breakfast.data
        }else if(error !== null && error !== false){
            errorPage = true
        }else if(localStorage.getItem('Receipestate')){
            let receipeState = JSON.parse(localStorage.getItem('Receipestate'))
            if(receipeState.breakfast.data !== null && receipeState.breakfast.data !== false){
                canRender = true
                receipes = receipeState.breakfast.data
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
        const parent = "breakfast";
        return (
        <div style={{marginTop: '70px'}}>
            <div className='breakfast'>
                    <div className='section-overlay'>
                        <h1>Breakfast food can cure all sadness away.</h1>
                    </div>
                </div>
            {showLoading && <CircularProgress color="secondary"/>}
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
        getBreakfastList: getBreakfastFunc(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Breakfast);
