import { Link } from "react-router-dom"
export default function Navigation(){
    return(
        <div class="">
            <nav>
            <ul class="nav nav-tabs justify-content-center">
                <li class="nav-item">
                    <Link to='/' class="nav-link">Home</Link>
                </li>
                <li class="nav-item">
                    <Link to='/todo' class="nav-link">To Do List</Link>
                </li>
            </ul>
            </nav>
        </div>
    )
}