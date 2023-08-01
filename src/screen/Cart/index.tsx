import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import "../Cart/CSS/Cart.css";
import CartList from "../Cart/Components/CartList";
import { useState, useMemo, useEffect } from "react";
import CartForm from "./Components/CartForm";
import { useForm } from "react-hook-form";
import { schema, defaultValue } from "./Components/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { PinIcon, ThumbsUpIcon, toaster } from "evergreen-ui";
import { useCreateOrder } from "./Hook";
import { SliderImage } from "./Components/SliderProduct";
import { number } from "yup";

const DATA_CART = {
  items: [
    {
      name: "T-Shirt",
      category: "clothes",
      subcategory: ["shirt", "long-sleeve"],
      brand: "TopChoice",
      gtin: "123458791330",
      sku: "12341234",
      quantity: 1,
      price: {
        amount: "10.00",
        currency: "EUR",
      },
    },
    {
      name: "Jeans",
      category: "clothes",
      subcategory: ["pants", "jeans"],
      brand: "TopChoice",
      gtin: "123458722222",
      sku: "12341235",
      quantity: 1,
      price: {
        amount: "20.00",
        currency: "EUR",
      },
    },
  ],
  merchant: {
    redirectConfirmUrl: "https://portal.integration.scalapay.com/success-url",
    redirectCancelUrl: "https://portal.integration.scalapay.com/failure-url",
  },
  merchantReference: "merchantOrder-1234",
  shippingAmount: {
    amount: "10.00",
    currency: "EUR",
  },
  type: "online",
  product: "pay-in-3",
  frequency: {
    number: "1",
    frequencyType: "monthly",
  },
  orderExpiryMilliseconds: 600000,
};

const CartScreen = () => {
  const [dataCart, setDataCart] = useState(DATA_CART);
  const [totalPrice, setTotalPrice] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);
  const currentTotalAmount = dataCart?.items.reduce((prev: any, cur: any) => {
    return prev + cur.price.amount * cur.quantity;
  }, 0);
  const currentTaxAmount = currentTotalAmount * 0.08;
  useEffect(() => {
    setTaxAmount(currentTaxAmount);
    setTotalPrice(
      currentTotalAmount + +dataCart?.shippingAmount.amount + currentTaxAmount
    );
  }, [
    dataCart?.items,
    dataCart?.shippingAmount.amount,
    currentTotalAmount,
    currentTaxAmount,
  ]);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm({ resolver: yupResolver(schema), defaultValues: defaultValue });

  const { createOrderMutation, isLoading, isSuccess } = useCreateOrder();
  const handledata = (data: any) => {
    const newDataCart = {
      totalAmount: {
        amount: totalPrice.toFixed(2).toString(),
        currency: "EUR",
      },
      consumer: {
        phoneNumber: data?.phoneNumber,
        givenNames: data?.name,
        surname: "Consumer",
        email: data?.email,
      },
      billing: {
        name: data?.name,
        line1: data?.line1,
        suburb: data?.suburb,
        postcode: data?.postcode,
        countryCode: data?.countryCode,
        phoneNumber: data?.phoneNumber,
      },
      shipping: {
        name: data?.name,
        line1: data?.line1,
        suburb: data?.suburb,
        postcode: data?.postcode,
        countryCode: data?.countryCode,
        phoneNumber: data?.phoneNumber,
      },
      taxAmount: {
        amount: taxAmount.toFixed(2).toString(),
        currency: "EUR",
      },
    };
    // join dataCart and newDataCart
    const dataSubmit = {
      ...dataCart,
      ...newDataCart,
    };
    return dataSubmit;
  };

  const onSubmit = () => {
    handleSubmit((data, errors) => {
      if (data) {
        const dataSubmit = handledata(data);
        // check quantity in items array and return true if all items quantity is valid (quantity > 0 and quantity < 21)
        const checkQuantity = dataSubmit.items.every(
          (item: any) =>
            (item.quantity > 0 &&
              item.quantity < 21 &&
              item.quantity !== "" &&
              item.quantity !== null &&
              item.quantity !== undefined) 
        );
        if (dataSubmit.items.length === 0) {
          toaster.danger("Please add product to cart");
        } else {
          if (!checkQuantity) {
            toaster.danger("Quantity must be greater than 0 and less than 21");
          } else {
            createOrderMutation(dataSubmit);
          }
        }
      }
      if (errors) {
        console.log(errors);
      }
    })();
  };

  const width = window.innerWidth;

  return (
    <div className="container-cart">
      <Container fluid>
        <Row>
          <Col sm={4}>
            <div className="cart-left">
              <CartList
                data={dataCart}
                setData={setDataCart}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
                shipping={+dataCart?.shippingAmount?.amount}
                taxAmount={taxAmount}
              />
            </div>
          </Col>
          <Col sm={8}>
            <div className="cart-right">
              <CartForm errors={errors} control={control} onSubmit={onSubmit} />
            </div>
            {width > 800 ? (
              <div className="product-slider">
                <h5 className="product-slider-title">
                  {/* <ThumbsUpIcon size={20} color="#FFCC00" marginRight='5px' /> */}
                  You may also like these products
                </h5>
                <SliderImage />
              </div>
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartScreen;
