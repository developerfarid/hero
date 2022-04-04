import "./Review.css"
import useReview from '../../Hooks/useReview';
import SingleItem from './SingleItem';
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Review = () => {
  const {review} =useReview()
    console.log(review);
    return (
        <section>
            <Container>
                <h1 className="text-center mb-5">What Our Customers Say!</h1>
                <Row className='g-4 mb-5' sm={1} md={2} lg={3}>
                    {review?.slice(0, 3).map(item => <SingleItem item={item} key={item?._id} />)}
                    <Link className="btn btn-my mt-5 d-inline-block m-auto" to='/review'>See All Review</Link>
                </Row>
            </Container>
        </section>
    );
};

export default Review;