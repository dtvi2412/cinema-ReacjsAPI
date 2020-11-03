import Axios from 'axios';
class BookTicketsService {
  fetchBookTickets(id) {
    return Axios({
      method: 'GET',
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
    });
  }
}
export default BookTicketsService;
