import axios from "../../api/axios";

const useProductsApi = () => {
  const getProduct = async (id) => {
    return await axios.get(`/products/${id}`);
  };

  const findProducts = async (query) => {
    return await axios.get(`/products${query}`);
  };

  return {
    getProduct,
    findProducts,
  };
};

export default useProductsApi;
