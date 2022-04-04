import "./Review.css"
import useReview from '../../Hooks/useReview';
import SingleItem from './SingleItem';
import { Container, Row } from "react-bootstrap";

const Review = () => {
  const {review} =useReview()
    console.log(review);
    return (
        <section>
            <Container>
                <Row className='g-4 mb-5' sm={1} md={2} lg={3}>
                    {review?.slice(0,3).map(item => <SingleItem item={item} key={item?._id} /> )}
                </Row>
            </Container>
        </section>
    );
};

export default Review;