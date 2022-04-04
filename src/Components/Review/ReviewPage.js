import useReview from '../../Hooks/useReview';
import SingleItem from './SingleItem';
import { Container, Row } from "react-bootstrap";

const ReviewPage = () => {
  const {review} =useReview()
    console.log(review);
    return (
        <section>
            <Container>
            <h1 className="text-center my-5">What Our Customers Say!</h1>
                <Row className='g-4 mb-5' sm={1} md={2} lg={3}>
                    {review?.map(item => <SingleItem item={item} key={item?._id} /> )}
                </Row>
            </Container>
        </section>
    );
};

export default ReviewPage;