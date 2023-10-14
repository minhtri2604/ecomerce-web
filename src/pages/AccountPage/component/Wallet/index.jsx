import AccountBalance from "./component/AccountBalance";
import BalanceHistory from "./component/BalanceHistory";
import WalletVoucher from "./component/walletvoucher";

const Wallet = () => {
  return (
    <div className="bg-[--white-color] rounded-[10px] px-[30px] ">
      <span className='text-xl font-medium leading-normal'>Ví điện tử Connect Pharm Pay</span>
      <div>
        <AccountBalance></AccountBalance>
        <BalanceHistory></BalanceHistory>
        <WalletVoucher></WalletVoucher>
      </div>
    </div>
  );
};

export default Wallet;
