import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './index.css'

function Parent(props) {
    return (
        <div className='parent-component'>
            <div className='left-panel'>

                <Link to="first-child">
                    <button>
                        First Child
                    </button>
                </Link>
                <Link to="second-child">
                    <button>
                        Second Child
                    </button>
                </Link>
                <Link to="third-child">
                    <button>
                        Third Child
                    </button>
                </Link>
            </div>
            <div className='right-panel'>
                <Outlet />
            </div>
        </div>
    );
}

export default Parent;