
import Logout from "../images/log-out.png"
import Upload from "../images/cloud.png"
import { useState }from "react"
import { useHistory } from "react-router-dom"
import { useAuth } from "../store/AuthContext";


export default function MemberProfile(){
    const [ error ,setError] = useState("")
    const { logout,Name} =useAuth()
    const history=useHistory()
    async function signout(){
        setError('')
        try{
            await logout()
            history.push("/signin")
        }catch{
            setError('Failed to logout')
        }
    }
    return(
        <div className="member-content">
           <div className="member-content-iner">
                <div>
                    <div className="member-img">
                        <div className="member-name-bg">
                            <div className="member-name">{Name}</div>
                        </div>
                        
                    </div>
                    <div className="member-nav">
                        <img onClick={signout} src={ Logout} alt="" className="logout-img"></img>
                        <img onClick={Upload} src={ Upload} alt="" className="logout-img"></img>
                    </div>
                </div>
           </div>
       </div>
    )
}