import React from 'react';
import './css/Login.scss';
import CloseIcon from '@material-ui/icons/Close';

function LoginForm (props)  {

    const userAdmin = {
        email:"admin@gmail.com",
        password:"admin1234"}

    const [user, setUser] = React.useState({name: "", email: ""});
    const [detail, setDetail] = React.useState({name: "", email: "", password:""});
    const [error, setError] = React.useState("");

    const Login = detail => {
        console.log(detail);
            
            if (detail.email === userAdmin.email && detail.password === userAdmin.password) {
                console.log('Loggined in')
                setUser({
                        name:detail.name,
                        email:detail.email })
            } else {        
                console.log('Details do not Match');
                setError("Details do not Match");
            }
    }
    const Logout = () => {
        console.log('Logout');
        setUser({name:"", email:""});
    }
    
    const submitHandler = e => {
        e.preventDefault();
        Login(detail);
    }
    return (
        <div className="loginOverlay">
            <div className="loginDiv">  
            {   (user.email !=="") 
        
            ? 
                <div>
                    <h2>Wellcome <span style={{color:"#456"}}>{user.name}</span></h2>
                    <button className="LoginBtn" onClick={Logout}>Logout</button>
                </div>
            :
                                     
                <form onSubmit={submitHandler}>
                        <CloseIcon className="CloseIcon" onClick={props.closeLog}/>  
                        <h2>Login</h2>
                                                                                                                                        
                        <label htmlFor="name">Name:</label>
                        <input type="name" name="name" id="name"
                                    onChange={e => setDetail({...detail, name:e.target.value})} 
                                    value={detail.name}/>
                                                                                                   
                                                                                                   
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email"
                                    onChange={e => setDetail({...detail, email:e.target.value})} 
                                    value={detail.email} />
                                                                                                   
                                                                                                       
                        <label htmlFor="password">Password:</label>
                        <input type="password" nane="password" id="password"
                                    onChange={e => setDetail({...detail, password:e.target.value})} 
                                    value={detail.password} />
                    <input className="LoginBtn" type="submit" value="Login" />                                                                                                 
                </form>
            }
            </div>
        </div>
    )
}

export default LoginForm;
