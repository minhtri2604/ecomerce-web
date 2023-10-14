const emailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const regexPhoneNumber = /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/;

export const validateInput = (input) => {
  const msg = {};

  if (input?.phone) {
    if (input?.phone !== "") {
      if (!input.phone.match(regexPhoneNumber)) {
        msg.phone = "Số điện thoại không hợp lệ!";
      }
    }
  }

  if (input?.email) {
    if (input?.email !== "") {
      if (!input.email.match(emailReg)) {
        msg.email = "Email không hợp lệ!";
      }
    }
  }

  if (input?.password) {
    if (input?.password === "") {
      msg.password = "Vui lòng nhập mật khẩu!";
    } else if (input.password.length < 8 || input.password.length > 64) {
      msg.password = "Mật khẩu chưa đúng định dạng!";
    }
  }

  if (input?.confirmPassword) {
    if (input?.confirmPassword === "") {
      msg.confirmPassword = "Vui lòng xác nhận!";
    } else if (input.confirmPassword !== input.password) {
      msg.confirmPassword = "Mật khẩu chưa khớp!";
    }
  }

  return msg;
};

export const validateSignin = (input) => {
  const msg = {};

  const isValidEmail = emailReg.test(input?.email);
  const isValidPhoneNumber = regexPhoneNumber.test(input?.email);

  if (!input?.email) {
    msg.email = "Vui lòng nhập số điện thoại/Email!";
  } else if (!isValidEmail && !isValidPhoneNumber) {
    msg.email = "Email hoặc số điện thoại không đúng định dạng!";
  }

  if (!input?.password) {
    msg.password = "Vui lòng nhập mật khẩu!";
  } else if (input.password.length < 8 || input.password.length > 64) {
    msg.password = "Mật khẩu chưa đúng định dạng!";
  }

  return msg;
};

export const validateInputInvoice = (input) => {
  const msg = {};

  if (!input?.nameUser) {
    msg.nameUser = "Vui lòng nhập tên!";
  }

  if (!input?.nameBusiness) {
    msg.nameBusiness = "Vui lòng nhập tên doanh nghiệp!";
  }

  if (!input?.address) {
    msg.address = "Vui lòng nhập địa chỉ!";
  }

  if (!input?.taxCode) {
    msg.taxCode = "Vui lòng nhập mã số thuế!";
  }

  if (!input?.email) {
    msg.email = "Vui lòng nhập email!";
  } else if (!input.email.match(emailReg)) {
    msg.email = "Email không đúng định dạng!";
  }

  return msg;
};

export const validateInputAddress = (input) => {
  const msg = {};

  if (!input?.nameUser) {
    msg.nameUser = "Vui lòng nhập tên!";
  }

  if (!input?.address) {
    msg.address = "Vui lòng nhập địa chỉ!";
  }

  if (!input?.phone) {
    msg.phone = "Vui lòng nhập số điện thoại!";
  } else if (!input?.phone.match(regexPhoneNumber)) {
    msg.phone = "Số điện thoại không hợp lệ!";
  }

  return msg;
};
