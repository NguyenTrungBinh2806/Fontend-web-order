import { ChevronLeftIcon, ChevronRightIcon } from "evergreen-ui";
import { Carousel, Col, Row } from "react-bootstrap";

const dataImage = [
    {
        id: 0,
        list: [
            {
                imageUrl: "https://oldsailor.com.vn/vnt_upload/product/07_2023/thumbs/550_crop_bdac90a81bbdc8e391ac37.jpg",
                name: 'Polo Basic Body',
                price: '12.00'
            },
            {
                imageUrl: "https://oldsailor.com.vn/vnt_upload/product/07_2023/thumbs/550_crop_51b14f6a007fd3218a6e14.jpg",
                name: 'Polo Basic Black',
                price: '12.00'
            },
            {
                imageUrl: "https://oldsailor.com.vn/vnt_upload/product/07_2023/thumbs/550_crop_4ed15f873d92eeccb78330.jpg",
                name: 'Polo Basic White',
                price: '12.00'
            },
        ]
    },
    {
        id: 1,
        list: [
            {
                imageUrl: "https://oldsailor.com.vn/vnt_upload/product/06_2023/thumbs/550_crop_5a8a38deef963fc8668714.jpg",
                name: 'Blazer Basic Black',
                price: '21.00'
            },
            {
                imageUrl: "https://oldsailor.com.vn/vnt_upload/product/06_2023/thumbs/550_crop_11eb71bfa6f776a92fe613.jpg"
                , name: 'Blazer Basic White',
                price: '21.00'
            },
            {
                imageUrl: "https://oldsailor.com.vn/vnt_upload/product/07_2023/thumbs/550_crop_new.jpg",
                name: 'Polo Basic Black Body',
                price: '12.00'
            }
        ]
    },

];

export const SliderImage = () => {
    return (
        <Carousel
              indicators={false} // close the dot in the bottom of slider
              variant="dark" // change the color of arrow
              prevIcon={
                <ChevronLeftIcon color="#006699" size={40} />
              }
                nextIcon={
                <ChevronRightIcon color="#006699" size={40} />
                }

            >
              {
                dataImage?.map((item: any, index: number) => (
                  <Carousel.Item key={index}
                  interval={5000}
                  >
                    <Row>
                      {
                        item?.list?.map((item: any, index: number) => (
                            <Col key={index} md={4}>
                                    <img
                                        className="d-block w-100"
                                        src={item?.imageUrl}
                                        alt=""
                                />
                                <div style={{textAlign: 'center'}}>
                                    <h6
                                    style={{ color: "#003399", fontWeight: "bold" }}
                                    >
                                    {item?.name}
                                    </h6>
                                    <p style={{ color: "Black", fontWeight: "bold" }}>
                                    {item?.price} EUR
                                    </p>
                                </div>
                            </Col>
                        ))
                      }
                    </Row>
                  </Carousel.Item>
                ))
              }
            </Carousel>
    );
};