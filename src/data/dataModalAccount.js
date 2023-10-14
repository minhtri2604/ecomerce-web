import { AiOutlineUser } from "react-icons/ai";
import { PiUsersThree } from "react-icons/pi";
import { CgNotes } from "react-icons/cg";
import { MdEditNote } from "react-icons/md";
import { PiShootingStar } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import { TbDiscount2 } from "react-icons/tb";
import { CiWallet } from "react-icons/ci";
import { MdSupportAgent } from "react-icons/md";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { MdOutlineLogout } from "react-icons/md";

export const dataAccount = [
  {
    id: 1,
    img: AiOutlineUser,
    alt: "info account",
    title: "Thông tin tài khoản",
    url: "/account/account-infomation",
  },
  {
    id: 2,
    img: PiUsersThree,
    alt: "info enterprise",
    title: "Thông tin doanh nghiệp",
    url: "/account/business-information",
  },
  {
    id: 3,
    img: CgNotes,
    alt: "address",
    title: "Sổ địa chỉ",
    url: "/account/address",
  },
  {
    id: 4,
    img: MdEditNote,
    alt: "product",
    title: "Quản lý đơn hàng",
    url: "/account/order-management",
  },
  {
    id: 5,
    img: PiShootingStar,
    alt: "core",
    title: "Thứ hạng & tích lũy điểm",
    url: "/account/ranking",
  },
  {
    id: 6,
    img: AiOutlineHeart,
    alt: "like",
    title: "Danh sách yêu thích",
    url: "/account/favourite",
  },
  {
    id: 7,
    img: TbDiscount2,
    alt: "voucher",
    title: "Hệ thống voucher",
    url: "/account/voucher",
  },
  {
    id: 8,
    img: CiWallet,
    alt: "wallet",
    title: "Ví và tài khoản thanh toán",
    url: "/account/wallet",
  },
  {
    id: 9,
    img: MdSupportAgent,
    alt: "support center",
    title: "Trung tâm hỗ trợ",
    url: "/",
  },
  {
    id: 10,
    img: LiaPhoneVolumeSolid,
    alt: "contact",
    title: "Liên hệ hợp tác",
    url: "/",
  },
  {
    id: 11,
    img: MdOutlineLogout,
    alt: "signout",
    title: "Đăng xuất",
  },
];
