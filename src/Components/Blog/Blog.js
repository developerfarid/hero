import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    const blog = [
        {
            question: "What is Context Api",
            ans: "The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the store and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state."
        },
        {
            question: "What are semantic tags in html?",
            ans: "Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way.Example aside, time, section, nav, footer, header, title etc.",
        },
        {
            question: "Difference Inline-block vs Block Elements",
            ans: "Block: The elements that begin on a new line are known as block elements. A block element takes up the full width of the content. Unlike inline, there exists a top and bottom margin for these elements. Block-level elements may only appear inside the body tag. Block-level elements create a larger structure than inline elements. <br /> Inline-Block: The display value of inline-block works similarly to inline with one exception: the height and width of that element become modifiable.  "
        }
    ]
    return (
        <section>
            <Container>
                <Row xs={1}  md={1} lg={2} className="g-4 my-5 ">
                    {blog.map((item) => (
                        <Col>
                            <div className="blog">
                                <h2 className='heading'> {item.question}</h2>
                               
                                <p>{item.ans}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Blog;