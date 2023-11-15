
import { Link } from 'react-router-dom'


const Sidebar = () => {
  const handleClick = (event) => {
    const listItems = document.querySelectorAll('.sidebar ul li');
    listItems.forEach(item => {
      item.style.color = 'white'; 
    });
    event.target.style.color = 'red';
  }
  
  
    return (
      <div className='sidebar'>
        <ul>
          <Link to="/home"><li onClick={e=>handleClick(e)}>Home</li></Link>
          <Link to="/services"><li onClick={e=>handleClick(e)}>Services</li></Link>
          <Link to="/new"><li onClick={e=>handleClick(e)}>News</li></Link>
          <Link to="/blog"><li onClick={e=>handleClick(e)}>Blog</li></Link>
          <Link to="/contact"><li onClick={e=>handleClick(e)}>Contact</li></Link>
        </ul>
      </div>
    );
  }


export default Sidebar