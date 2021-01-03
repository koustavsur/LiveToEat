
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/gStyle.css'

class Home extends Component {
    componentDidMount = () =>{
        if(localStorage.getItem("Receipestate")){
            if(localStorage.getItem("LastUpdateDate")){
                let lastUpdatedDate = JSON.parse(localStorage.getItem("LastUpdateDate"))
                let res = lastUpdatedDate.split("-")
                let today = new Date()
                let lastDate = new Date(res[2], res[1], res[0])
                let diffDays = (today.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24)
                if(diffDays > 20){
                    localStorage.removeItem("Receipestate");
                    let updateDate = lastDate.getDate().toString() + "-" + lastDate.getMonth().toString() + "-" + lastDate.getFullYear().toString()
                    localStorage.setItem("LastUpdateDate", JSON.stringify(updateDate))
                }
            }else{
                let date = new Date()
                let updatedDate = date.getDate().toString() + "-" + date.getMonth().toString() + "-" + date.getFullYear().toString()
                localStorage.setItem("LastUpdateDate", JSON.stringify(updatedDate))
            }
        }
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
