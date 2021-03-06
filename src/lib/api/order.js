import client from './client';

// export const getOrderList = ({ order_items, ordered_amount, payment }) => {
//     return client.post(
//         `orders/`,
//         { order_items, ordered_amount, payment },
//         {
//             headers: {
//                 Authorization: `Token ${sessionStorage.getItem('token')}`,
//             },
//         },
//     );
// };
export const createOrder = ({ response }) => {
    return client.post(
        `/orders/receipt/`,
        { response },
        {
            headers: {
                Authorization: `Token ${sessionStorage.getItem('token')}`,
            },
        },
    );
};

export const getOrder = (id) => {
    return client.get(`/orders/detail/${id}/`, {
        headers: {
            Authorization: `Token ${sessionStorage.getItem('token')}`,
        },
    });
};
