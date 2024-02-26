import axios from "axios"
import store from "../store/store"

const createJWT =async (customer)=>{
    const { config } = store.getState().ui;
    let { data } = await axios.post(`${config.jwtServer}`,{
            customerId:customer.customerId,
            verifiedCustomer : true,
            customerIdentifiers : {...customer?.customerIdentifiers}
    })

    return data;

}
export default createJWT;