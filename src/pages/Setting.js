import Sidebar from "../components/shared/Sidebar";
import Navbar from "../components/shared/Navbar";
import Header from "../components/shared/Header";
import PaymentMethod from '../components/settings/PaymentMethod'
import BillingHistory from "../components/settings/BillingHistory";
import Wrapper from "../components/shared/Wrapper";

function Setting() {
  return (
          <Wrapper>
                <Header />
                <PaymentMethod />
                <BillingHistory />
          </Wrapper>     
  );
}

export default Setting;
