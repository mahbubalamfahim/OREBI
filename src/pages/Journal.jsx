import { Link } from "react-router-dom";
import Container from "../components/Container";

const Journal = () => {
  return (
    <>
      <Container>
        <div className="py-5 text-[20px]">
          <Link to={"/login"}>login</Link>
        </div>
        <div className="py-5 text-[20px]">
          <Link to={"/sign-up"}>sign-up</Link>
        </div>
        <div className="py-5 text-[20px]">
          <Link to={"/account"}>account</Link>
        </div>
        <div className="py-5 text-[20px]">
          <Link to={"/checkout"}>checkout</Link>
        </div>
        <div className="py-5 text-[20px]">
          <Link to={"*"}>Error</Link>
        </div>
      </Container>
    </>
  );
};

export default Journal;
