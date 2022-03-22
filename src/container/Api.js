import axios from "axios";
export async function tradeingAxios() {
  const result = await axios.get(
      `/v2/tickers?symbols=ALL`
    );
    return result.status
  }
  
 