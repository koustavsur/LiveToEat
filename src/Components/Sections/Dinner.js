import React, { Component } from 'react'
import {connect} from 'react-redux';
import { getDinnerFunc } from '../../Redux/actions';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid, Button } from '@material-ui/core';
import CardsList from './CardsList';
import Error from './Error';
import ReactGa  from 'react-ga';


class Dinner extends Component {
    constructor(props) {
        super(props)
        this.state={
            isShowMore: true
        }
    }
    
    componentDidMount(){
        ReactGa.initialize('UA-168738867-1')
        ReactGa.pageview(window.location.pathname)

        let receipeState = null
        if(localStorage.getItem('Receipestate')){
            receipeState = JSON.parse(localStorage.getItem('Receipestate'))
        }
        if(receipeState === null || receipeState.dinner.data === null || receipeState.dinner.data === false){
            if(this.props.state.dinner.data == null){
                console.log("Call dinner API")
                this.props.getDinnerList(0,20);
            }
        }
    }

    handleShowMore = () => {
        ReactGa.initialize('UA-168738867-1')
        ReactGa.event({
            category:"Dinner",
            action:"Clicked Show More"
        })
        this.setState({
            isShowMore: false
        })
        this.props.getDinnerList(21,40);
    }
    render() {
        let receipes = []
        let showLoading = false
        console.log(this.props.state)
        const {isLoading, error, data} = this.props.state.dinner
        let canRender = false
        let errorPage = false
        if(data !== null && data !== false && isLoading !== true){
            canRender = true
            if(localStorage.getItem('Receipestate')){
                let receipeState = JSON.parse(localStorage.getItem('Receipestate'))
                if(receipeState.dinner.data !== null && receipeState.dinner.data !== false){
                    if(receipeState.dinner.data.length < 60 && receipeState.dinner.data[0].id.toString() !== data[0].id.toString()){
                        let tempData = [...receipeState.dinner.data, ...data]
                        receipeState = {
                            ...receipeState,
                            dinner:{
                                isLoading: false,
                                data: tempData,
                                error: false
                            }
                        }
                        localStorage.setItem('Receipestate', JSON.stringify(receipeState))
                    }else{
                        receipeState = {
                            ...receipeState,
                            dinner:{
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
                        dinner:{
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
            receipes = receipeState.dinner.data
        }else if(error !== null && error !== false){
            errorPage = true
        }else if(localStorage.getItem('Receipestate')){
            let receipeState = JSON.parse(localStorage.getItem('Receipestate'))
            if(receipeState.dinner.data !== null && receipeState.dinner.data !== false){
                canRender = true
                receipes = receipeState.dinner.data
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
        console.log(this.props.state)
        const parent = "dinner"
        return (
            <div style={{marginTop: '70px'}}>
                <div className='dinner'>
                    <div className='section-overlay'>
                        <h1>One cannot Think well, Love well, Sleep well,If one has not DINED well</h1>
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

const mapDispatchToProps = dispatch => {
    console.log("Inside dinner matchDispatchToProps")
    return {
        getDinnerList: getDinnerFunc(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dinner);
