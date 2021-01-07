
const CheckForReLoad = () => {
    if(localStorage.getItem("Receipestate")){
        if(localStorage.getItem("LastUpdateDate")){
            let lastUpdatedDate = JSON.parse(localStorage.getItem("LastUpdateDate"))
            let res = lastUpdatedDate.split("-")
            let today = new Date()
            let lastDate = new Date(res[2], res[1], res[0])
            let diffDays = (today.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24)
            console.log(diffDays)
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

export {CheckForReLoad}
