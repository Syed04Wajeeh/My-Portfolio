import React from 'react';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-light shadow-sm">
                <div className="container">
                    <a className="navbar-brand fs-4" href="index.html"><i className="bi bi-airplane-engines-fill"></i> G36 Air</a>
                    
                    <div className="ms-auto">
                        <a href="https://syed04wajeeh.github.io/My-Portfolio/" className="btn btn-outline-primary">
                            <i className="bi bi-person-circle me-2"></i>
                            My Portfolio
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;