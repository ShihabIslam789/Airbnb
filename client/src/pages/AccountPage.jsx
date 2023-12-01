import {useContext} from "react";
import {UserContext} from "../UserContext.jsx";
import {Link,Navigate,useParams} from "react-router-dom";



export default function accountPage() {
    const [redirect,setRedirect] = useState(null);
   const {ready,user,setUser} = useContext(UserContext);
   let {subpage} = useParams();
   if(subpage === undefined) {
       subpage = 'profile';
   }

   function Logout() {
        Axios.post('/Logout');
        setRedirect('/');
        setUser(null);
    }

   
    if(!ready) {
        return 'Loading...';
    }

    if(ready && !user && !redirect) {
        return <Navigate to ={'/Login'} />
       }


    
    
    function LinkClasses(type=null) {
        let classes =  'inline-flex gap-1py-2 px-6 rounded-full'
        if (type === subpage ) {
            classes += 'bg-primary text-white '
        } else{
            classes += 'bg-gray-200'
        }
        return classes; 
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }
    return (
        <div>
            <nav className="w-full flex justify-center mt-8 gap-2">
                <Link className= {LinkClasses('profile')} to={'/account'}>My profile</Link>
                <Link className={LinkClasses('bookings')} to={'/account/bookings'}>My Bookings</Link>
                <Link className= {LinkClasses('places')} to={'/account/places'}>My accommodations </Link>

            </nav>
            {subpage === 'profile' &&(
                <div className="text-center max-2-lg mx-auto">
                    Logged in as {user.name} ({user.email}) <br />
                    <button className = "primary max-w-sm mt-2">Logout</button>
                </div>
            )}
        </div>
    )

    return (
        <div>account page for {User?.name}</div>
    );
}