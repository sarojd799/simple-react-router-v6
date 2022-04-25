import React from 'react';
import { Routes, Link, Route } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Parent from './pages/parent';
import FirstChild from './pages/parent/first-child';
import SecondChild from './pages/parent/second-child';
import ThirdChild from './pages/parent/third-child';

function App(props) {

    const routes = [
        { to: '/home', label: 'Home' },
        { to: '/parent', label: 'Parent' },
        { to: '/about', label: "About" }
    ]
    return (
        <div>
            <header>
                <h4 className='app-brand'>
                    Project
                </h4>
                <nav>
                    <ul className='app-nav-parent'>
                        {
                            routes.map((route, i) => {
                                return (
                                    <li key={`nav-item-${i}`}>
                                        <Link to={route.to}>
                                            {route.label}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/parent" element={<Parent />} >
                        <Route path="first-child" element={<FirstChild />} />
                        <Route path="second-child" element={<SecondChild />} />
                        <Route path="third-child" element={<ThirdChild />} />
                    </Route>
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
            <footer>
                Footer
            </footer>

        </div>
    );
}

export default App;