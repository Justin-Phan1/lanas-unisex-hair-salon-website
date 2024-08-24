import { reviews } from './reviews';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './index.css';

const Reviews = () => {
    return (
        <div className="universal">
        <section className="reviews-container">
        <div className="body">
            <div className="title">
                <h1>Reviews</h1>
                <p>What Our Clients Say</p>
            </div>
            <div className="slider-container">
                <Splide options={{ perPage: 1, type: 'loop'}}>
                    {reviews.map((review) => (
                        <SplideSlide key={review.id}>
                            <div className="content">
                                <p className="text">{review.text}</p>
                                <div className="info">
                                    <div className="rating">
                                        <span className="star">&#9733;</span>
                                        <span className="star">&#9733;</span>
                                        <span className="star">&#9733;</span>
                                        <span className="star">&#9733;</span>
                                        <span className="star">&#9733;</span>
                                    </div>
                                    <p className="name">{review.name}</p>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
        </section>
        </div>
    )
}

export default Reviews;