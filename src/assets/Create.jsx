import { Link } from 'react-router-dom';
import './create.css';

export default function create() {
  return (
<>

<div className="form">
      <h3>create account</h3>
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

<Link to="/profile">   
<p>log in </p>
         </Link>
<button>create account</button>
       </div>


     </>
)
}
