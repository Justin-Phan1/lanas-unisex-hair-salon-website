import './index.css'
import salonPhoto from './salonPhoto.HEIC'

const Home = () => {
    return (
        <div className="home">
            <img src={salonPhoto}></img>
            <h1>Welcome!</h1>
            <p>
                Welcome to Lana's Unisex Hair Salon. Located in Jersey City, NJ, Lana's Unisex Hair Salon  
                has been serving 
                <br/>
                everyone at unbeatable prices for 25+ years.
                <br /> 
                <br />
                We operate on a walk-in basis only and do not accept appointments.
                <h3>Salon Address</h3>
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
            </p>
        </div>
    )
}

export default Home;