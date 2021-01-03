import React, { Component } from 'react'
import '../Styles/gStyle.css'

export class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='left-box'>
                    <span>Copyright@2020</span>
                </div>
                <div className='right-box'>
                    <span>Privacy Policy</span>
                </div>
            </div>
        )
    }
}

export default Footer
