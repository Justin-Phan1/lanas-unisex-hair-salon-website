import './index.css'
import salonPhoto from './salon-photo.png'

const Home = () => {
    return (
        <div className="home">
            <img src={salonPhoto} alt="Lana salon"></img>
            <h1>Welcome!</h1>
            <p className="home-description">
                Welcome to Lana's Unisex Hair Salon. Located in Jersey City, NJ, Lana's Unisex Hair Salon  
                has been serving 
                <br/>
                everyone at unbeatable prices for 25+ years.
                <br /> 
                <br />
                We operate on a walk-in basis only and do not accept appointments.
            </p>
            <h3>Salon Address</h3>
            <p className="home-info"> 
                518 West Side Ave, Jersey City, NJ 07304
                <br />
                <h3>Phone Number</h3> 
                201-200-0015
                <br />
                <h3>Hours of Operation</h3>
                Monday: 10am-6pm
                <br />
                Tuesday: 10am-6pm
                <br />
                Wednesday: 10am-6pm
                <br />
                Thursday: 10am-6pm
                <br />
                Friday: 10am-6pm
                <br />
                Saturday: 9am-6pm
                <br />
                Sunday: CLOSED
                <br />
                <span className="holiday-hours">
                    <h4>Holiday Hours</h4>
                    New Years: CLOSED
                    <br/>
                    Memorial Day: CLOSED
                    <br />
                    Fourth of July: CLOSED
                    <br />
                    Labor Day: CLOSED
                    <br /> 
                    Thanksgiving: CLOSED
                    <br />
                    Christmas: CLOSED
                </span>
            </p>
        </div>
    )
}

export default Home;