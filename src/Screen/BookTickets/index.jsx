import React, { useEffect, useRef, useState } from 'react';
import { connect, useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Paypal from '../../components/Paypal/Paypal';
import SuccessPay from '../../components/Popup/SuccessPay/SuccessPay';
import { fetchBookTicketsAPI } from '../../Redux/Action/bookTickets';
import './style.scss';
function BookTickets(props) {
  const dispatch = useDispatch();

  const danhSachGhe = props.listBookTicket.danhSachGhe;
  const thongTinPhim = props.listBookTicket.thongTinPhim;
  const user = JSON.parse(localStorage.getItem('credentials'));
  useEffect(() => {
    dispatch(fetchBookTicketsAPI(props.match.params.maLichChieu));
  }, []);
  const count = 11;
  const handleUpdateGhe = (maGhe, giaVe) => {
    props.changeChair(maGhe);
    props.updateTotal(giaVe, maGhe);
  };
  let hinhThuc = {
    id: 'zalopay',
    zalo: 'Thanh toán qua zalopay',
    paypal: 'Thanh toán qua paypal',
  };

  const inputZalo = useRef();
  const inputPaypal = useRef();
  const [comPaypal, setCompPaypal] = useState(false);
  const [btnDatVe, setBtnDatVe] = useState(false);
  const handlePaypal = () => {
    if (inputZalo.current.checked) {
      setBtnDatVe(true);
    }

    if (inputPaypal.current.checked) {
      setCompPaypal(true);
      setBtnDatVe(false);
    } else if (!inputPaypal.current.checked) {
      setCompPaypal(false);
    }
  };
  // console.log(inputZalo.current.checked);
  // console.log(inputPaypal.current.checked);
  //Set change value input
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const handleChangeEmail = (e) => {
    let emai = e.target.value;
    setEmail(emai);
  };
  const handleChangePhone = (e) => {
    let phon = e.target.value;
    setPhone(phon);
  };
  //Dat ve
  const handleDatVe = (e) => {
    e.preventDefault();
    if (email === '' || phone === '') {
      alert('Bạn cần nhập đầy đủ thông tin!');
    } else if (!inputZalo.current.checked && !inputPaypal.current.checked) {
      alert('Bạn cần chọn hình thức thanh toán!');
    } else {
      setpayment(true);
      // setTimeout(() => {
      //   props.history.push('/');
      // }, 2000);
    }
  };

  const [payment, setpayment] = useState(false);

  const handleClose = () => {
    setpayment(false);
  };
  const history = useHistory();
  //BACK HOME
  const handleBackHome = () => {
    history.push('/');
  };
  return (
    <>
      {user !== null ? (
        <div className="bookTickets">
          <div className="bookTickets__content">
            <div className="bookTickets__content__table">
              <div className="Tittle">
                <div className="Tittle__daDat">Đã đặt</div>
                <div className="Tittle__dangChon">Đang chọn</div>
              </div>
              {payment && <SuccessPay zaloClose={handleClose} />}

              {danhSachGhe ? (
                danhSachGhe.slice(0, 77).map((item, index) => {
                  return (
                    <>
                      <button
                        key={index}
                        // className={`${props.checkGhe ? "daDat" : "chuaDat"}`}
                        className={`${
                          item.daDat === true ? 'daDat' : 'chuaDat'
                        } ${item?.dangChon ? 'dangChon' : 'huyChon'} `}
                        onClick={() => {
                          // props.changeChair(item.maGhe);
                          handleUpdateGhe(item.maGhe, item.giaVe);
                        }}
                      >
                        <span>
                          {}
                          {index < count && 'A'}
                          {index >= count && index < 2 * count && 'B'}

                          {index >= 2 * count && index < 3 * count && 'C'}
                          {index >= 3 * count && index < 4 * count && 'D'}
                          {index >= 4 * count && index < 5 * count && 'E'}
                          {index >= 5 * count && index < 6 * count && 'F'}
                          {index >= 6 * count && index < 7 * count && 'G'}
                          {item.tenGhe}
                        </span>
                      </button>
                    </>
                  );
                })
              ) : (
                <>LOADING</>
              )}
            </div>

            <div className="bookTickets__content__info">
              {thongTinPhim ? (
                <>
                  <h1>Thông tin phim</h1>
                  <p>Tên phim : {thongTinPhim.tenPhim} </p>
                  <p>Tên rạp : {thongTinPhim.tenRap}</p>
                  <p>Giờ chiếu : {thongTinPhim.gioChieu}</p>
                  <img
                    src={thongTinPhim.hinhAnh}
                    className="bookTickets__content__info__img"
                  />
                  <p>Ngày chiếu : {thongTinPhim.ngayChieu}</p>
                </>
              ) : (
                <>LOADING</>
              )}
              {props.total > 0 && (
                <form>
                  <input
                    placeholder="Email..."
                    name="email"
                    type="email"
                    onChange={(e) => {
                      handleChangeEmail(e);
                    }}
                  />

                  <input
                    type="number"
                    name="phone"
                    placeholder="Phone..."
                    onChange={(e) => {
                      handleChangePhone(e);
                    }}
                  />

                  <div>
                    Tổng tiền :{' '}
                    {props.total.toLocaleString('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                    })}
                  </div>
                  <div className="ghe">
                    <div className="ghe__name">Ghế</div>
                    {danhSachGhe?.map((item, index) => {
                      if (item.dangChon === true) {
                        if (index < count) {
                          return <span>A{item.tenGhe},</span>;
                        }

                        if (index >= count && index < 2 * count) {
                          return <span>B{item.tenGhe},</span>;
                        }
                        if (index >= 2 * count && index < 3 * count) {
                          return <span>C{item.tenGhe},</span>;
                        }
                        if (index >= 3 * count && index < 4 * count) {
                          return <span>D{item.tenGhe},</span>;
                        }
                        if (index >= 4 * count && index < 5 * count) {
                          return <span>E{item.tenGhe},</span>;
                        }
                        if (index >= 5 * count && index < 6 * count) {
                          return <span>F{item.tenGhe},</span>;
                        }
                        if (index >= 6 * count && index < 7 * count) {
                          return <span>G{item.tenGhe},</span>;
                        }
                      } else {
                        return <div></div>;
                      }
                    })}
                  </div>

                  <div>
                    <input
                      type="radio"
                      ref={inputZalo}
                      name="hinhthuc"
                      value="zalo"
                      onClick={handlePaypal}
                    />

                    {hinhThuc.zalo}
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="hinhthuc"
                      value="paypal"
                      ref={inputPaypal}
                      onClick={handlePaypal}
                    />
                    {hinhThuc.paypal}
                  </div>
                  {comPaypal && <Paypal />}
                  {btnDatVe && (
                    <button
                      onClick={(e) => {
                        handleDatVe(e);
                      }}
                      className="datVe"
                    >
                      Đặt vé
                    </button>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>{handleBackHome()}</div>
      )}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    listBookTicket: state.BookTicketReducer.listBookTicket,
    checkGhe: state.BookTicketReducer.checkGhe,
    dangChon: state.BookTicketReducer.dangChon,
    total: state.BookTicketReducer.tongTien,
    user: state.UserReducer.credential,
  };
};
const mapDispatchToProps = (dispath) => {
  return {
    changeChair: (maGhe) => {
      dispath({
        type: 'CHANGE_CHAIR',
        maGhe,
      });
    },
    updateTotal: (giaVe, maGhe) => {
      dispath({
        type: 'TOTAL',
        giaVe,
        maGhe,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookTickets);
