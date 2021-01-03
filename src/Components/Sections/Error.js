import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/gStyle.css'
import ReactGa  from 'react-ga';

export class Error extends Component {
    componentDidMount(){
        ReactGa.initialize('UA-168738867-1')
        const { ErrorType } = this.props
        if(ErrorType === '404'){
            ReactGa.pageview("/Error-404")
        }else{
            ReactGa.pageview("/Error-loading")
        }
    }
    render() {
        const { ErrorType } = this.props
        let pageNotFoundMessage = false
        let loadingError = false
        if(ErrorType === '404'){
            pageNotFoundMessage = true
        }else{
            loadingError = true
        }
        return (
            <div className='error-style'>
                <div className='error-overlay'>
                    {
                        pageNotFoundMessage && 
                        <>
                            <h1 style={{fontSize: '60px'}}>404</h1>
                            <p style={{fontSize: '20px'}}>Opps!! Page not found...</p>
                            <p style={{fontSize: '20px'}}>Page you are looking for does not exist.</p>
                            
                        </>
                    }
                    {
                        loadingError && 
                        <>
                            <h1 style={{fontSize: '60px'}}>Aw, Snap!</h1>
                            <p style={{fontSize: '20px'}}>Something went wrong...</p>
                            <p style={{fontSize: '20px'}}>Please go back to home page and retry</p>
                        </>
                    }
                    <Link className='link-home' to="/">
                        <div className='sub-error'>Back To Home</div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Error
