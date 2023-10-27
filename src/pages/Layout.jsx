import {Outlet, Link} from 'react-router-dom';

function Layout() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand text-primary-emphasis" to="/">React Routing</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="navbar-brand text-primary-emphasis" to="about">About</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="navbar-brand text-primary-emphasis" to="services">Services</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="navbar-brand text-primary-emphasis" to="contact">Contact</Link>
                        </li>                        
                    </ul>
                    </div>
                </div>
            </nav>
            <Outlet />

            <footer className='text-center text-primary-emphasis'>
            <p>©copyright 2023 | All rights reserved.</p>
            </footer>         
        </> 
             
    )
}

export default Layout;