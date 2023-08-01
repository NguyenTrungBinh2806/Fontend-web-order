import { useMutation } from "@tanstack/react-query";
import { request } from "../../../services";
import { createOrder } from "../../../services/api/order";
import { QUERY_KEY } from "../../../constant/config";
import { Modal } from "react-bootstrap";
import { useContextLoading } from "../../../common/Context/loadingContext";
import { toaster } from "evergreen-ui";
import { handleError } from "../../../common/error";

export const useCreateOrder = () => {
  const { setValue } = useContextLoading();
  const {
    mutate,
    isLoading,
    error,
    data: dataResponse,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: (data: any) => {
      // set loading
      setValue(true);
      // gửi request đi
      return request(createOrder(data));
    },

    onSuccess: (data: any) => {
      // set loading
    //   setValue(false);
      console.log("==data:== ", data?.data);
      // open url to other tab
      window.open(data?.data?.checkoutUrl, "_self"); // can use _blank to open new tab
    },

    onError: (error: any) => {
      console.log("==error:== ", error?.code);
      // set loading
      setValue(false);
      // set error code
      handleError(error?.code);
    },
  });

  const createOrderMutation = (data: any) => {
    mutate(data);
  };

  return {
    createOrderMutation,
    isLoading,
    error,
    isSuccess,
  };
};
