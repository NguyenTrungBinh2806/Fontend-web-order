import {
  CrossIcon,
  ShoppingCartIcon,
  TextInput,
  InfoSignIcon,
  RadioGroup,
} from "evergreen-ui";
import "../CSS/CartList.css";

import { Row, Col, Image } from "react-bootstrap";
import { useState } from "react";

const DISCOUNT_DATA = [
  {
    displayName: "10% Off",
    value: "10",
    amount: {
      amount: "0.00",
      currency: "EUR",
    },
  },
  {
    displayName: "20% Off",
    value: "20",
    amount: {
      amount: "0.00",
      currency: "EUR",
    },
  },
];

/**
 * 
 * @param { data, setData, totalPrice, setTotalPrice, shipping, taxAmount }
 * @returns {JSX.Element}
 * @description
 * It is a component that displays the list of products in the cart
 */
const CartList = ({
  data,
  setData,
  totalPrice,
  setTotalPrice,
  shipping,
  taxAmount,
}: {
  data: any;
  setData: any;
  totalPrice: any;
  setTotalPrice: any;
  shipping: any;
  taxAmount: any;
}) => {
  const widthScreen = window.innerWidth;
  const [isShowPolicies, setIsShowPolicies] = useState(false);


  return (
    <div className="container-cartlist" key={data?.items?.id}>
      <div className="header-cart">
        <ShoppingCartIcon size={23} />
        <h4 className="header-title">Shopping Cart</h4>
      </div>
      {data?.items.map((item: any, index: any) => {
        return (
          <ProductList
            data={item}
            index={index}
            dataList={data?.items}
            setData={setData}
            lengthData={data?.items.length}

          />
        );
      })}
      <div className="row-cost">
        <h6>Costs</h6>
        <p>
          Shipping cost: {shipping.toFixed(2)} EUR <br /> Tax:{" "}
          {taxAmount.toFixed(2)} EUR (8%)
        </p>
      </div>
      {/* Discount */}
      <Discount
        data={DISCOUNT_DATA}
        setData={setData}
        setTotalPrice={setTotalPrice}
      />
      <hr className="end-line" />
      <div className="row-line-1">
        <div className="label-total-price">Total Amount: </div>
        <div className="total-price">{totalPrice.toFixed(2)} EUR</div>
      </div>
      <hr className="end-line" />
      {widthScreen > 800 ? (
        <Policies />
      ) : (
        <div>
          <div
            className="show-policies"
            onClick={() => setIsShowPolicies(true)}
          >
            <p className="text-show">
              Read more policies{" "}
              <InfoSignIcon title="Show policies" size={15} />
            </p>
          </div>
          {isShowPolicies && <Policies />}
        </div>
      )}
    </div>
  );
};

export default CartList;

/** 
 * @param { data, index, dataList, setData, lengthData }
 * @returns {JSX.Element}
 * @description
 * It is a component that displays the list of products in the cart 
 * and allows you to delete the product from the cart
 * 
*/
const ProductList = ({
  data,
  index,
  dataList,
  setData,
  lengthData,
}: {
  data: any;
  index: any;
  dataList: any;
  setData: any;
  lengthData: any;
}) => {
  const [errorInput, setErrorInput] = useState(false);
  const handleDelete = (index: any) => {
    let newData = [...dataList];
    newData.splice(index, 1);
    setData((prev: any) => ({
      ...prev,
      items: newData,
    }));

  };
  return (
    <div className="cart-list" key={index}>
      <div className="top-cart">
        <h6 className="brand-name">
          {data?.brand} - {data?.gtin}
        </h6>
        <div
          className="delete-item"
          onClick={() => {
            handleDelete(index)
          }}
        >
          <CrossIcon size={30} color="#999999" />
        </div>
      </div>
      <Row>
        <Col sm={4}>
          <Image
            src={require("../../../assets/images/jeans.jpg")}
            alt=""
            width={70}
            height={70}
            fluid // to make image
            thumbnail
            className="cart-image"
          />
        </Col>
        <Col sm={8}>
          <div className="cart-item">
            <p className="item-name">{data?.name}</p>
            <p className="item-price">
              Price: {data?.price?.amount} {data?.price?.currency}
            </p>
          </div>
          <div className="item-quantity">
            <label style={{ marginRight: 10 }}>Quantity</label>
            <TextInput
              width={60}
              height={30}
              textAlign="center"
              value={data?.quantity}
              onChange={(e: any) => {
                if (
                  e.target.value < 1 ||
                  e.target.value > 20 ||
                  e.target.value === ""
                ) {
                  setErrorInput(true);
                  setData((prev: any) => {
                    const newData = { ...prev };
                    newData.items[index].quantity = e.target.value;
                    return newData;
                  });
                } else if (e.target.value > 0 && e.target.value < 21) {
                  setErrorInput(false);
                  setData((prev: any) => {
                    const newData = { ...prev };
                    newData.items[index].quantity = e.target.value;
                    return newData;
                  });
                }
              }}
              style={{
                borderRadius: 3,
                border: errorInput ? "1px solid red" : "1px solid #999999",
              }}
              // isInvalid={errorInput}
            />
          </div>
        </Col>
      </Row>
      {/* in the last item is don't show hr */}
      {index !== lengthData - 1 && <hr />}
    </div>
  );
};

const Policies = () => {
  return (
    <div className="row-line-2">
      <h6>Applicable policy:</h6>
      <ul>
        <li>
          <p>
            Exchange / Return within 03 days from the date the customer receives
            the product
          </p>
        </li>
        <li>
          <p>
            New original price products are exchanged/returned to another
            product. The total value of the items you want to exchange / return
            must be of the same or greater value as the returned item.
          </p>
        </li>
        <li>
          <p>Products are not included in the promotion.</p>
        </li>
        <li>
          <p>
            Products not applicable for exchange/return include: underwear,
            socks, accessories.
          </p>
        </li>
        <li>
          <p>
            Customers can exchange goods if the product is defective due to the
            manufacturer. Products eligible for exchange are products that meet
            the product exchange/return conditions* and are not on the list of
            non-exchangeable products.
          </p>
        </li>
      </ul>

      <h6>Product exchange/return conditions:</h6>
      <ul>
        <li>
          <p>
            Exchange / Return within 03 days from the date the customer receives
            the product
          </p>
        </li>
        <li>
          <p>
            The product is in its original condition upon receipt, with tags and
            labels intact.
          </p>
        </li>
        <li>
          <p>The product has not been laundered or dirty, damaged, unused.</p>
        </li>
        <li>
          <p>The product has an invoice for payment.</p>
        </li>
      </ul>
    </div>
  );
};

const Discount = ({
  data,
  setData,
  setTotalPrice,
}: {
  data: any;
  setData: any;
  setTotalPrice: any;
}) => {
  const [options] = useState([
    { label: "10% Off", value: "10% Off" },
    { label: "20% Off", value: "20% Off" },
  ]);
  const [valueOptions, setValueOptions] = useState("");
  const [amountDiscount, setAmountDiscount] = useState(0);
  const [previousAmount, setPreviousAmount] = useState(0);

  return (
    <div className="discount">
      <div className="discount-header">
        <h6 style={{ marginTop: 30 }}>Discount</h6>
        <div className="discount-amount">
          <RadioGroup
            options={options}
            value={valueOptions}
            onChange={(value: any) => {
              setValueOptions(value.target.value);
            }}
          />
          <h6 style={{ marginTop: 10 }}>
            Previous amount: {previousAmount.toFixed(2)} EUR
          </h6>
          <h6 style={{ marginTop: 10 }}>
            Discount amount: {amountDiscount.toFixed(2)} EUR
          </h6>
        </div>
      </div>
    </div>
  );
};
