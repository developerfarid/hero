
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { BiHappyHeartEyes } from 'react-icons/bi';
import { BsHeartFill } from 'react-icons/bs';
import { FaRegAngry } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { format } from "timeago.js";

const SingleItem = ({ item }) => {
    const {photoURL, describe,email,time, rating ,displayName} = item
    return (
        <Col>
            <div className="review">
                <p className='lh-2 fz-1 mb-5 text-jf'>{describe}</p>
                <div className="d-flex align-items-center justify-content-between mt-4 flex-grow-1">
                    <div className="d-flex align-items-center">
                        <img className="img img-fluid me-3 testimonial-img" src={photoURL} alt="" />
                        <div>
                            <h5 className="testimoneal-name">{displayName}</h5>
                            <span className="testimoneal-email">{(email)}</span>
                            <span className="testimoneal-role">{format(time)}</span>
                        </div>
                    </div>
                    <div className="testi-main">
                        <Rating className="reviewRating fs-5"

                            fractions={5}
                            initialRating={rating}
                            readonly

                            emptySymbol={<AiOutlineStar />}
                            fullSymbol={<AiFillStar />}
                        />
                        {
                            item?.rating <= 2 && item?.rating > 0 ? <p>I hate This <FaRegAngry /></p> : item?.rating <= 4 ? <p>It is Awesome.  <BiHappyHeartEyes /></p> : <p>I just love it.  <BsHeartFill /></p>
                        }
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default SingleItem;