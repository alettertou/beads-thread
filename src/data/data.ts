export interface IData {
  id: string
  title: string
  image: number
  description: string
  liked?: boolean
  rating: number
  requirement: string[]
  instruction: Array<{
    title: string
    image: number
  }>
}

export const data: IData[] = [
  {
    id: '1',
    title: 'CÁCH XỎ HẠT ĐƠN GIẢN NHẤT',
    image: require('../../assets/img/anhbia.png'),
    rating: 1,
    description: 'Mô tả tổng quan về cách xỏ hạt đơn giản nhất',
    requirement: [
      'Hạt đá',
      `Đoạn dây cước khoảng 5cm`,
      '50cm sợi dây nilon tổng hợp để xâu vòng',
      '1 cái kẹp sợi dây',
      'Cây kéo',
    ],
    instruction: [
      {
        title:
          'Gập sợi cước làm đôi, sợi cước này được dùng như một cây kim để xâu dây qua các hạt',
        image: require('../../assets/img/step1.png'),
      },
      {
        title:
          'Gập sợi dây tổng hợp làm 4 và ước chừng dài hơn cổ tay cần làm vòng, sau đó luồn sợi dây qua sợi cước.',
        image: require('../../assets/img/step2.png'),
      },
      {
        title: 'Dùng đầu sợi cước luồn qua lỗ lần lượt từng hạt một cho đến khi hết',
        image: require('../../assets/img/step3.png'),
      },
      {
        title:
          'Sau khi đủ số lượng hạt cần thiết, bạn bỏ đoạn dây cước ra. Phần đầu dây còn lại, tách chúng ra làm 2 phần (mỗi phần 2 dây), xỏ một phần đó vào phía đầu dây bên kia',
        image: require('../../assets/img/step4.png'),
      },
      {
        title: 'Xê dịch các viên hạt sát lại gần để cho ra như hình dưới',
        image: require('../../assets/img/step5.png'),
      },
      {
        title: 'Buộc 2 đầu dây lại',
        image: require('../../assets/img/step6.png'),
      },
      {
        title: 'Buộc thêm một lần nữa cho chắc chắn',
        image: require('../../assets/img/step7.png'),
      },
      {
        title:
          'Sau khi buộc hai đầu dây lại, sẽ thừa ra một đoạn, dùng kéo và cắt chúng đi (lưu ý khoảng cách cắt cách nút thắt khoảng 1cm là vừa)',
        image: require('../../assets/img/step8.png'),
      },
    ],
  },
  {
    id: '2',
    title: 'Làm vòng tay thắt con rít độc đáo',
    image: require('../../assets/img/vong-tay-that-con-rit.jpg'),
    rating: 3,
    description: 'Làm chiếc vòng đẹp tặng người thân nhé!',
    requirement: [
      ' Dây vải thun cứng',
      'Cây kéo',
    ],
    instruction: [
      {
        title:
          'Bạn cắt một đoạn dây bằng cổ tay rồi thắt nút lại. Tiếp theo bạn cắt một đoạn dây dài nữa và để ngang so với đoạn dây đã thắt.',
        image: require('../../assets/img/step1.png'),
      },
      {
        title:
          'Sau khi để ngang lại thì bạn dùng đầu sợi dây bên phải luồn sang phía dưới rồi thắt chặt. Làm tương tự với bên còn lại.',
        image: require('../../assets/img/step2.png'),
      },
      {
        title: 'Bạn làm cho tới khi hết sợi dây và thắt nút cố định.',
        image: require('../../assets/img/step3.png'),
      },
      {
        title:
          'Sau khi thắt xong phần dây thun, bạn có thể gắn thêm mặt đá hoặc mặt kim loại để chiếc vòng tay handmade thêm độc đáo.',
        image: require('../../assets/img/step4.png'),
      },
    ],
  },
  {
    id: '3',
    title: 'CÁCH LÀM VÒNG TAY TÌNH BẠN',
    image: require('assets/img/download.jpg'),
    rating: 4,
    description: 'Tự tay làm nên những chiếc vòng xinh xắn để kỉ niệm bạn bè nhé!',
    requirement: [
      'sợi chỉ thêu với màu sắc khác nhau',
      'Cây kéo',
    ],
    instruction: [
      {
        title:
          'Đo và cắt sợi chỉ đầu tiên',
        image: require('assets/img/Ảnh chụp màn hình 2024-09-19 120302.png'),
      },
      {
        title:
          'Dùng sợi chỉ đầu tiên để đo các sợi chỉ còn lại vì bạn cần tạo ra vòng tay đẹp và đều',
        image: require('assets/img/vtttb/Ảnh chụp màn hình 2024-09-19 121103.png'),
      },
      {
        title: 'Đưa sợi chỉ đầu tiên qua sợi chỉ thứ hai để thắt nút',
        image: require('assets/img/vtttb/Ảnh chụp màn hình 2024-09-19 121131.png'),
      },
      {
        title:
          'Tạo thêm một nút thắt tương tự với hai sợi chỉ đó',
        image: require('assets/img/vtttb/Ảnh chụp màn hình 2024-09-19 121150.png'),
      },
      {
        title: 'Thực hiện lại thao tác thêm một lần nữa với sợi chỉ ngoài cùng bên trái.',
        image: require('assets/img/vtttb/Ảnh chụp màn hình 2024-09-19 121209.png'),
      },
      {
        title: 'Tiếp tục đến khi vòng tay đủ dài và vừa vặn với cổ tay.Cột đầu còn lại của vòng tay thành nút thắt ',
        image: require('assets/img/vtttb/Ảnh chụp màn hình 2024-09-19 121225.png'),
      },
      {
        title: 'Cắt phần chỉ còn thừa',
        image: require('assets/img/vtttb/Ảnh chụp màn hình 2024-09-19 121237.png'),
      },
      {
        title:'Cột vòng tay',
        image: require('assets/img/vtttb/Ảnh chụp màn hình 2024-09-19 121249.png'),
      },
    ],
  },
]

export interface INew {
  title: string
  image: string
  address: Array<{
    title: string
    phone?: string
  }>
  open: string
  close: string
  description: string
  facebookUrl?: string
  websiteUrl?: string
}

export const data_new: INew[] = [
  {
    title: 'Chợ Đại Quang Minh',
    image: 'https://pos.nvncdn.com/14f951-12134/art/artCT/20221230_WmRDWSlQhn2eWERZiuZ4y9Lz.png',
    address: [
      {
        title: '31 -33 -35 Châu Văn Liêm, P 14, Quận 5, TP HCM',
        phone: '0909090909',
      },
    ],
    open: '08:00',
    close: '18:00',
    description:
      'Chuyên bán: Chuyên cung cấp hàng sỉ nào vòng, dây da, hột cườm, hoa vải, kim chỉ, ren, ruy băng, mặt dây chuyền...với giá cực kỳ rẻ. Vậy nên, đây còn là địa chỉ lấy nguồn hàng nguyên liệu yêu thích của các shop bán đồ handmade ở Sài Gòn.',
    facebookUrl: 'https://www.facebook.com/choadiquangminh',
    websiteUrl: 'https://choadiquangminh.com',
  },
  {
    title: 'Cửa hàng thủ công mỹ nghệ Ngàn Thông',
    image: 'https://gomsumoc.com/wp-content/uploads/2023/06/mua-do-handmade-1.jpg',
    address: [
      {
        title:
          '314 Võ Văn Kiệt, P. Cô Giang, Quận 1, TP HCM (Số cũ: 55A đường Pasteur, P Bến Nghé, Quận 1, TP HCM)',
        phone: '(08) 38365 165',
      },
      {
        title: '64 Lê Lợi, Quận 1, TP HCM',
        phone: '(084) 38258 964',
      },
    ],
    open: '08:00',
    close: '18:00',
    description:
      'Chuyên bán: Shop Ngàn Thông được biết đến với nơi có bán các loại nguyên phụ liệu dùng để gói quà, giấy gói, hoa, nơ, ruy băng nhiều màu sắc.',
    facebookUrl: 'https://www.facebook.com/NganThong64/',
    websiteUrl: 'https://nganthongart.com.vn',
  },
]
