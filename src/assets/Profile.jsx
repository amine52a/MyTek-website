import { Link } from 'react-router-dom';
import './Navs/profile.css';
export default function Profile() {
  return (
    <>

    <div className="form">
      <h3>log in</h3>
      <form  >
      <label htmlFor="Email">
Enter Your Email
        <input type="text" required />
      </label>



<label htmlFor="Password">
  Enter your password
  <input
  type="number"
 required/>
</label>
</form>

<Link to="/create">   
<p>Create account</p>
         </Link>
<button >log in</button>
       </div>




    </>
  )
}
