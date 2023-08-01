
import { MAIN_URL, REQUEST  } from '../../constant/config';

export const createOrder = (body: any) => {
    const url = `${MAIN_URL}/order/create`; // 'http://localhost:4000/order/create'
    return { url: url, method: REQUEST.POST, body: body }
};
