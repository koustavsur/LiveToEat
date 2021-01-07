
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/gStyle.css'
import {CheckForReLoad} from '../utils/util'

class Home extends Component {
    componentDidMount = () =>{
        CheckForReLoad()
    }

    render() {
        return (
            <div className='homeStyle'>
                <div className='overlay'>
                    <h1>Eat, drink and live free. There’s no telling what might happen tomorrow.</h1>
                    <br/><br/>
                    <h2>Regional cuisine: </h2>
                    <div className='regional'>
                        <Link className='link-home' to="/indian-receipes">
                            <div className='sub-regional'>Indian</div>
                        </Link>
                        <Link className='link-home' to="/italian-receipes">
                            <div className='sub-regional'>Italian</div>
                        </Link>
                        <Link className='link-home' to="/chinese-receipes">
                            <div className='sub-regional'>Chinese</div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
