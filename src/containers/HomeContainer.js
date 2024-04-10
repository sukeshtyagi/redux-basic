import Home from "../components/Home";
import addToCart from "../services/actions/addToCart";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (payload) => {
    dispatch(addToCart(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
