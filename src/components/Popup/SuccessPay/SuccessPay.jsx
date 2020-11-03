import React from 'react';
import './SuccessPay.scss';
import { connect, useSelector } from 'react-redux';
function SuccessPay({ zaloClose }) {
  const total = useSelector((total) => total.BookTicketReducer.tongTien);
  return (
    <div className="success">
      <div className="success__content">
        <p onClick={zaloClose}>X</p>
        <h1>XÁC NHẬN THANH TOÁN VỚI ZALO Pay!</h1>

        <img src="https://i.imgur.com/MxAe6vl.png" alt="scan" />

        <h2>
          Quét QR code để thanh toán với số tiền{' '}
          <span>
            {total.toLocaleString('vi-VN', {
              style: 'currency',
              currency: 'VND',
            })}
          </span>
        </h2>
      </div>
    </div>
  );
}

export default connect()(SuccessPay);
