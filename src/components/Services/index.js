import './index.css'

const Services = () => {
    return (
        <div className="services">
            <h1>Services</h1>  
            <p>
                At Lana's Unisex Hair Salon, we offer a variety of hair and beauty services for both men and women!
                <br/>
                <br/>
                Disclaimer - The final cost for select services is determined based on the complexity and extent 
                of the work 
                <br/>
                required, including factors such as hair length, thickness, 
                and the specific style requested.
            </p>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Men's Services</h3>
                        <ul className="list-unstyled">
                            <li>Men's Haircut - $18</li>
                            <li>Men's Haircut & Color - $50</li>
                            <li>Men's Haircut + Perm - $65</li>
                        </ul> 
                    </div>
                    <div className="col">
                        <h3>Women's Services</h3>
                        <ul className="list-unstyled">
                            <li>Women's Haircut - $20</li>
                            <li>Women's Long Layer - $25</li>
                            <li>Women's Short Haircut + Blowout - $25</li>
                            <li>Women's Medium Haircut + Blowout - $30</li>
                            <li>Women's Long Haircut + Blowout - $35+</li>
                            <li>Women's Haircut + Perm - $75+</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Men's and Women's Services</h3>
                        <ul className="list-unstyled">
                            <li>Additional Shampoo - $5</li>
                            <li>Touch Up - $45</li>
                            <li>Color - $50+</li>
                            <li>Long Hair Color - $60+</li>
                            <li>Haircut + Color - $70+</li>
                            <li>Haircut + Highlight - $75+</li>
                            <li>Haircut + Color + Highlight - $130+</li>
                            <li>Highlight Short - $45+</li>
                            <li>Highlight Medium - $55+</li>
                            <li>Highlight Long - $65+</li>
                            <li>Perm - $55+</li>
                            <li>Shampoo + Blowout - $20+</li>
                            <li>Shampo + Blowout + Long/Curly Haircut - $35+</li>
                            <li>Permanent Hair Straightening Treatment - $180+</li>
                            <li>Keratin Treatment - $200</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Waxing</h3>
                        <ul className="list-unstyled">
                            <li>Eyebrow Wax - $8</li>
                            <li>Lip Wax - $5</li>
                            <li>Face Wax - $20</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;