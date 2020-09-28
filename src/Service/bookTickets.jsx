import Axios from "axios";
class BookTicketsService {
  fetchBookTickets(id) {
    return Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
    });
  }
}
export default BookTicketsService;
