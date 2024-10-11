import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <div
            className="container-fluid p-0"
            style={{
                backgroundImage: 'url("https://example.com/your-image.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh', // Ensures full height
                backgroundRepeat: 'no-repeat', // Prevents background from repeating
            }}
        >
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm">
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/">
                        MyApp
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/faculty">
                                    Faculty
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/student">
                                    Student
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Content Area */}
            <div className="container py-5">
                <div className="row">
                    <div className="col-12">
                        <Outlet />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-light py-4 mt-auto border-top">
                <div className="container text-center">
                    <p className="mb-0">© 2024 MyApp. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Layout;
