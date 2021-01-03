import React, { Component } from 'react'
import { CircularProgress } from '@material-ui/core'
import ReactPlayer from 'react-player'
import {connect} from 'react-redux';
import '../Styles/gStyle.css'
import { getReceipeByIdFunc } from '../../Redux/actions';
import ReactGa from 'react-ga'

class Receipe extends Component {

    componentDidMount(){
        ReactGa.initialize('UA-168738867-1')
        ReactGa.pageview("/Receipe")
        const {match: {params: {receipe}}} = this.props
        ReactGa.event({
            category:"Receipe",
            action:`${receipe}`
        })
    }
    render() {
        let show = null
        const {match: {params: {receipe}}} = this.props
        console.log(this.props)
        console.log(this.props.state)
        let type = receipe.split("-")
        switch (type[1]) {
            case "appetizers":
                if(localStorage.getItem('Receipestate')){
                    let receipeState = JSON.parse(localStorage.getItem('Receipestate'))
                    if(receipeState.receipeById.data !== null && receipeState.receipeById.data.id.toString() === type[0]){
                        show = receipeState.receipeById
                    }else if(receipeState.appetizer.data !== null && receipeState.appetizer.data !== false){
                        show = receipeState.appetizer.data.filter(l=>{
                            return l.id.toString() === type[0]
                        })
                        if(show === null || show.length === 0){
                            if(this.props.state.receipeById.data === null && this.props.state.receipeById.isLoading === null){
                                this.props.getReceipeById(type[0])
                            }
                        }
                    }
                }else{
                    if(this.props.state.receipeById.data === null && this.props.state.receipeById.isLoading === null){
                        this.props.getReceipeById(type[0])
                    }
                }
                break;            
            case "breakfast":
                if(localStorage.getItem('Receipestate')){
                    let receipeState = JSON.parse(localStorage.getItem('Receipestate'))
                    if(receipeState.receipeById.data !== null && receipeState.receipeById.data.id.toString() === type[0]){
                        show = receipeState.receipeById
                    }else if(receipeState.breakfast.data !== null && receipeState.breakfast.data !== false){
                        show = receipeState.breakfast.data.filter(l=>{
                            return l.id.toString() === type[0]
                        })
                        if(show === null || show.length === 0){
                            if(this.props.state.receipeById.data === null && this.props.state.receipeById.isLoading === null){
                                this.props.getReceipeById(type[0])
                            }
                        }
                    }
                }else{
                    if(this.props.state.receipeById.data === null && this.props.state.receipeById.isLoading === null){
                        this.props.getReceipeById(type[0])
                    }
                }
                break;
            case "lunch":
                if(localStorage.getItem('Receipestate')){
                    let receipeState = JSON.parse(localStorage.getItem('Receipestate'))
                    if(receipeState.receipeById.data !== null && receipeState.receipeById.data.id.toString() === type[0]){
                        show = receipeState.receipeById
                    }else if(receipeState.lunch.data !== null && receipeState.lunch.data !== false){
                        show = receipeState.lunch.data.filter(l=>{
                            return l.id.toString() === type[0]
                        })
                        if(show === null || show.length === 0){
                            if(this.props.state.receipeById.data === null && this.props.state.receipeById.isLoading === null){
                                this.props.getReceipeById(type[0])
                            }
                        }
                    }
                }else{
                    if(this.props.state.receipeById.data === null && this.props.state.receipeById.isLoading === null){
                        this.props.getReceipeById(type[0])
                    }
                }
                break;
            case "dinner":
                if(localStorage.getItem('Receipestate')){
                    let receipeState = JSON.parse(localStorage.getItem('Receipestate'))
                    if(receipeState.receipeById.data !== null && receipeState.receipeById.data.id.toString() === type[0]){
                        show = receipeState.receipeById
                    }else if(receipeState.dinner.data !== null && receipeState.dinner.data !== false){
                        show = receipeState.dinner.data.filter(l=>{
                            return l.id.toString() === type[0]
                        })
                        if(show === null || show.length === 0){
                            if(this.props.state.receipeById.data === null && this.props.state.receipeById.isLoading === null){
                                this.props.getReceipeById(type[0])
                            }
                        }
                    }
                }else{
                    if(this.props.state.receipeById.data === null && this.props.state.receipeById.isLoading === null){
                        this.props.getReceipeById(type[0])
                    }
                }
                break;
            case "dessert":
                if(localStorage.getItem('Receipestate')){
                    let receipeState = JSON.parse(localStorage.getItem('Receipestate'))
                    if(receipeState.receipeById.data !== null && receipeState.receipeById.data.id.toString() === type[0]){
                        show = receipeState.receipeById
                    }else if(receipeState.dessert.data !== null && receipeState.dessert.data !== false){
                        show = receipeState.dessert.data.filter(l=>{
                            return l.id.toString() === type[0]
                        })
                        if(show === null || show.length === 0){
                            if(this.props.state.receipeById.data === null && this.props.state.receipeById.isLoading === null){
                                this.props.getReceipeById(type[0])
                            }
                        }
                    }
                }else{
                    if(this.props.state.receipeById.data === null && this.props.state.receipeById.isLoading === null){
                        this.props.getReceipeById(type[0])
                    }
                }
                break;
            case "indian":
                if(localStorage.getItem('Receipestate')){
                    let receipeState = JSON.parse(localStorage.getItem('Receipestate'))
                    if(receipeState.receipeById.data !== null && receipeState.receipeById.data.id.toString() === type[0]){
                        show = receipeState.receipeById
                    }else if(receipeState.indian.data !== null && receipeState.indian.data !== false){
                        show = receipeState.indian.data.filter(l=>{
                            return l.id.toString() === type[0]
                        })
                        if(show === null || show.length === 0){
                            if(this.props.state.receipeById.data === null && this.props.state.receipeById.isLoading === null){
                                this.props.getReceipeById(type[0])
                            }
                        }
                    }
                }else{
                    if(this.props.state.receipeById.data === null && this.props.state.receipeById.isLoading === null){
                        this.props.getReceipeById(type[0])
                    }
                }
                break;
            case "chinese":
                if(localStorage.getItem('Receipestate')){
                    let receipeState = JSON.parse(localStorage.getItem('Receipestate'))
                    if(receipeState.receipeById.data !== null && receipeState.receipeById.data.id.toString() === type[0]){
                        show = receipeState.receipeById
                    }else if(receipeState.chinese.data !== null && receipeState.chinese.data !== false){
                        show = receipeState.chinese.data.filter(l=>{
                            return l.id.toString() === type[0]
                        })
                        if(show === null || show.length === 0){
                            if(this.props.state.receipeById.data === null && this.props.state.receipeById.isLoading === null){
                                this.props.getReceipeById(type[0])
                            }
                        }
                    }
                }else{
                    if(this.props.state.receipeById.data === null && this.props.state.receipeById.isLoading === null){
                        this.props.getReceipeById(type[0])
                    }
                }
                break;
            case "italian":
                if(localStorage.getItem('Receipestate')){
                    let receipeState = JSON.parse(localStorage.getItem('Receipestate'))
                    if(receipeState.receipeById.data !== null && receipeState.receipeById.data.id.toString() === type[0]){
                        show = receipeState.receipeById
                    }else if(receipeState.italian.data !== null && receipeState.italian.data !== false){
                        show = receipeState.italian.data.filter(l=>{
                            return l.id.toString() === type[0]
                        })
                        if(show === null || show.length === 0){
                            if(this.props.state.receipeById.data === null && this.props.state.receipeById.isLoading === null){
                                this.props.getReceipeById(type[0])
                            }
                        }
                    }
                }else{
                    if(this.props.state.receipeById.data === null && this.props.state.receipeById.isLoading === null){
                        this.props.getReceipeById(type[0])
                    }
                }
                break;
            default:
                break;
        }
        console.log(show)
        if(show !== null && Array.isArray(show)){
            show = show[0]
        }
        console.log(show)
        console.log(this.props.state)
        const {isLoading, error, data} = this.props.state.receipeById
        let canRender = false
        let errorPage = false
        let showLoading = false
        if(isLoading !== null && isLoading === true){
            showLoading = true
        }
        let name = null
        let original_video_url = null
        let instructions = null
        let sections = null
        if(show !== null){
            console.log(show)
            canRender = true
            name = show.name
            original_video_url = show.original_video_url
            instructions = show.instructions
            sections = show.sections 
        }else if(data !== null && data !== false){
            canRender = true
            show = data
            console.log(show)
            name = show.name
            original_video_url = show.original_video_url
            instructions = show.instructions
            sections = show.sections

            if(localStorage.getItem('Receipestate')){
                let receipeState = JSON.parse(localStorage.getItem('Receipestate'))
                receipeState = {
                    ...receipeState,
                    receipeById:{
                        isLoading: false,
                        data: show,
                        error: false
                    }
                }
                localStorage.setItem('Receipestate', JSON.stringify(receipeState))
            }else{
                localStorage.setItem('Receipestate', JSON.stringify(this.props.state))
            }   
        }
        if(error !== null && error !== false){
            errorPage = true
        }     
        
        let cal = 0
        let carb = 0
        let fat = 0
        let protein = 0
        let fiber = 0
        let sugar = 0
        if(show !== null && show.hasOwnProperty("nutrition")){
            const { nutrition } =show
            console.log(nutrition)
            cal = nutrition.hasOwnProperty("calories") ? nutrition.calories : cal;
            carb = nutrition.hasOwnProperty("carbohydrates") ? nutrition.carbohydrates : carb;
            fat = nutrition.hasOwnProperty("fat") ? nutrition.fat : fat;
            protein = nutrition.hasOwnProperty("protein") ? nutrition.protein : protein;
            fiber = nutrition.hasOwnProperty("fiber") ? nutrition.fiber : fiber;
            sugar = nutrition.hasOwnProperty("sugar") ? nutrition.sugar : sugar;
        }

        return (
            <div style={{marginTop:'100px'}}>
                {showLoading && <CircularProgress color="secondary"/>}
                {canRender && 
                <div className='container'>
                    <div className='videoPlayer'>
                        <ReactPlayer width='80%' height='70%' url={original_video_url} controls />
                        <div className='receipe-name'>{name}</div>
                    </div>
                    <div className='nutritionalFact'>
                        <div className='receipe-title'>Nutritional Facts: </div>
                        <ul className='receipe-list'>
                            {<li key={cal}>Calories : {cal > 0 ? cal + " kCal" :  "N/A"}</li>}
                            {<li key={carb}>Carbohydrates: {carb > 0 ? carb + " mg" :  "N/A"}</li>}
                            {<li key={fat}>Fat: {fat > 0 ? fat + " mg" :  "N/A"}</li>}
                            {<li key={protein}>Protein: {protein > 0 ? protein + " mg" :  "N/A"}</li>}
                            {<li key={fiber}>Fiber: {fiber > 0 ? fiber + " mg" :  "N/A"}</li>}
                            {<li key={sugar}>Sugar: {sugar > 0 ? sugar + " mg" :  "N/A"}</li>}
                        </ul>
                    </div>
                    <div className='ingredients'>
                        <div className='receipe-title'>Ingredients: </div>
                        <ul className='receipe-list'>
                                        {
                                            sections.map(section => {
                                                return(section.components.map( (comp, index)=>{
                                                    if(comp.raw_text.toString() !== "n/a")
                                                    {
                                                        return(
                                                            <li key ={index}>
                                                                {comp.raw_text}
                                                            </li>
                                                        )
                                                    }
                                                })
                                            )}
                                        )
                                        }
                        </ul>
                    </div>
                    <div className='instructions'>
                    <div className='receipe-title'>Instructions : </div>
                    <ul className='receipe-list'>
                        {instructions.map(instruction => {
                            return(
                                <li key={instruction.display_text}>
                                    {instruction.display_text}
                                </li>
                            )
                        })}
                    </ul>
                    </div>
                </div>}
                {errorPage && 'Error 404'}
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
    console.log("Inside matchDispatchToProps")
    return {
        getReceipeById: getReceipeByIdFunc(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Receipe);
