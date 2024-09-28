
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
export default function Navbar  ()  {
  return (
<div class="her">
<header>
    <nav>
        <ul>
            <li><Link to="/"><button>Home</button></Link></li>
            <li><Link to="/about"><button>About</button></Link></li>
            <li><Link to="/contact"><button>Contact Us</button></Link></li>
            <li><Link to="/chat"><button>ChatBot</button></Link></li>
        </ul>
    </nav>
</header>
</div>
  )
}
