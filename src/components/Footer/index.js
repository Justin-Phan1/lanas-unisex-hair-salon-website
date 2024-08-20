import './index.css'

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>Hours of Operation</h4>
                        <ul className="list-unstyled">
                            <li>Monday: 10am-6pm</li>
                            <li>Tuesday: 10am-6pm</li>
                            <li>Wednesday: 10am-6pm</li>
                            <li>Thursday: 10am-6pm</li>
                            <li>Friday: 10am-6pm</li>
                            <li>Saturday: 9am-6pm</li>
                            <li>Sunday: CLOSED</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Contact Info</h4>
                        <ul className="list-unstyled">
                            <li>Address: 518 West Side Ave,
                                 <br />Jersey City, NJ 07304</li>
                            <li>Phone Number: 201-200-0015</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Quick Links</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">Home</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/testimonials">Testimonials</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;