import React from "react";
import "../CSS/CartForm.css";
import {
  SelectMenu,
  TextInputField,
  Button,
  CaretDownIcon,
  InfoSignIcon,
  CircleArrowRightIcon,
  Icon,
} from "evergreen-ui";
import { Controller } from "react-hook-form";
import { Col, Row } from "react-bootstrap";
import { selectOptions } from "../../../common/DataText/TextSelect";

// comment component with params and description
/**
 * @param { errors, control, onSubmit }
 * @returns {JSX.Element}
 * @description
 * It is a component that displays the form of the cart use UseForm to validate the form
 */
const CartForm = ({
  errors,
  control,
  onSubmit,
}: {
  errors: any;
  control: any;
  onSubmit: () => void;
}) => {
  const [selected, setSelected] = React.useState("");
  return (
    <div className="cart-form">
      <div className="form-row-1">
        <Row>
          <Col sm={6}>
            <Controller
              name="name"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInputField
                  label="Name"
                  style={{ width: "100%" }}
                  className="input-name"
                  placeholder="Enter name"
                  onChange={onChange}
                  value={value}
                  isInvalid={!errors?.name ? false : true}
                  validationMessage={errors?.name?.message}
                />
              )}
            />
          </Col>
          <Col sm={6}>
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInputField
                  label="Phone number"
                  style={{ width: "100%" }}
                  className="input-name"
                  placeholder="Enter phone number"
                  onChange={onChange}
                  value={value}
                  isInvalid={!errors?.phoneNumber ? false : true}
                  validationMessage={errors?.phoneNumber?.message}
                  type="number"
                />
              )}
            />
          </Col>
        </Row>
      </div>
      <div className="form-row-1">
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputField
              label="Email"
              style={
                window.innerWidth < 800 ? { width: "100%" } : { width: "49%" }
              }
              className="input-name"
              placeholder="Enter email"
              onChange={onChange}
              value={value}
              isInvalid={!errors?.email ? false : true}
              validationMessage={errors?.email?.message}
              type="email"
            />
          )}
        />
      </div>

      {/* form address */}
      <div className="form-row-1">
        <Row>
          <Col sm={6}>
            <Controller
              name="line1"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInputField
                  label="Address"
                  style={{ width: "100%" }}
                  className="input-name"
                  placeholder="Enter Address"
                  onChange={onChange}
                  value={value}
                  isInvalid={!errors?.line1 ? false : true}
                  validationMessage={errors?.line1?.message}
                />
              )}
            />
          </Col>
          <Col sm={6}>
            <Controller
              name="suburb"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInputField
                  label="City"
                  style={{ width: "100%" }}
                  className="input-name"
                  placeholder="Enter city"
                  onChange={onChange}
                  value={value}
                  isInvalid={!errors?.suburb ? false : true}
                  validationMessage={errors?.suburb?.message}
                />
              )}
            />
          </Col>
        </Row>
      </div>
      <div className="form-row-1">
        {/* <Controller
          name="postcode"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputField
              label="Postal code"
              style={{ width: "49%" }}
              className="input-name"
              placeholder="Enter postal code"
              onChange={onChange}
              value={value}
              isInvalid={!errors?.postcode ? false : true}
            />
          )}
        /> */}
        <Row>
          <Col sm={6}>
            <Controller
              name="postcode"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInputField
                  label="Postal code"
                  style={{ width: "49%" }}
                  className="input-name"
                  placeholder="Enter postal code"
                  onChange={onChange}
                  value={value}
                  isInvalid={!errors?.postcode ? false : true}
                  validationMessage={errors?.postcode?.message}
                />
              )}
            />
          </Col>
          <Col sm={6}>
            <Controller
              name="countryCode"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <label style={{ fontWeight: "600", fontSize: "14px" }}>
                    Country code
                  </label>
                  <br />
                  <SelectMenu
                    title="Options with icons"
                    options={selectOptions}
                    selected={value}
                    onSelect={(item) => {
                      onChange(item?.value);
                      setSelected(item?.label + " - " + item?.value);
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        bottom: 0,
                      }}
                    >
                      {" "}
                      <Button
                        appearance="primary"
                        intent="success"
                        borderRadius={3}
                        minWidth={70}
                        iconAfter={CaretDownIcon}
                      >
                        {value || "Select option..."}
                      </Button>
                      {errors?.countryCode ? (
                        <span
                          style={{
                            color: "#BB0000",
                            marginLeft: "1%",
                            fontSize: "12px",
                          }}
                        >
                          {errors?.countryCode?.message}!
                        </span>
                      ) : (
                        <span style={{ marginLeft: "1%", fontSize: "12px" }}>
                          {selected}
                        </span>
                      )}
                    </div>
                  </SelectMenu>
                </>
              )}
            />
          </Col>
        </Row>
      </div>
      <Button
        onClick={onSubmit}
        appearance="primary"
        intent="primary"
        borderRadius={3}
        iconAfter={
          window.innerWidth < 800 ? null : ('CircleArrowRightIcon' as any)
        }
        height={50}
        style={window.innerWidth < 800 ? { width: "100%" } : {}}
      >
        Create order
      </Button>
    </div>
  );
};

export default CartForm;
