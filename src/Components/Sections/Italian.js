import React, { Component } from 'react'
import {connect} from 'react-redux';
import { getItalianFunc } from '../../Redux/actions';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid, Button } from '@material-ui/core';
import CardsList from './CardsList';
import Error from './Error';
import ReactGa  from 'react-ga';

class Italian extends Component {
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
        if(receipeState === null || receipeState.italian.data === null || receipeState.italian.data === false){
            if(this.props.state.italian.data == null || this.props.state.italian.data === false){
                this.props.getItalianList(0,20);
            }
        }      
    }

    handleShowMore = () => {
        ReactGa.initialize('UA-168738867-1')
        ReactGa.event({
            category:"Italian",
            action:"Clicked Show More"
        })

        this.setState({
            isShowMore: false
        })
        this.props.getItalianList(21,40);
    }
    
    render() {
        let receipes = []
        let showLoading = false
        const {isLoading, error, data} = this.props.state.italian
        let canRender = false
        let errorPage = false
        if(data !== null && data !== false && isLoading !== true){
            canRender = true
            if(localStorage.getItem('Receipestate')){
                let receipeState = JSON.parse(localStorage.getItem('Receipestate'))
                if(receipeState.italian.data !== null && receipeState.italian.data !== false){
                    if(receipeState.italian.data.length < 60 && receipeState.italian.data[0].id.toString() !== data[0].id.toString()){
                        let tempData = [...receipeState.italian.data, ...data]
                        receipeState = {
                            ...receipeState,
                            italian:{
                                isLoading: false,
                                data: tempData,
                                error: false
                            }
                        }
                        localStorage.setItem('Receipestate', JSON.stringify(receipeState))
                    }else{
                        receipeState = {
                            ...receipeState,
                            italian:{
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
                        italian:{
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
            receipes = receipeState.italian.data
        }else if(error !== null && error !== false){
            errorPage = true
        }else if(localStorage.getItem('Receipestate')){
            let receipeState = JSON.parse(localStorage.getItem('Receipestate'))
            if(receipeState.italian.data !== null && receipeState.italian.data !== false){
                canRender = true
                receipes = receipeState.italian.data
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
        const parent = "italian";
        return (
            <div style={{marginTop: '70px'}}>
                <div className='italian'>
                    <div className='section-overlay'>
                        <h1>There’s nothing more romantic than Italian food.</h1>
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
        getItalianList: getItalianFunc(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Italian);


