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
        image: require('assets/img/vtttb/1.1.png'),
      },
      {
        title:
          'Dùng sợi chỉ đầu tiên để đo các sợi chỉ còn lại vì bạn cần tạo ra vòng tay đẹp và đều',
        image: require('assets/img/vtttb/1.2.png'),
      },
      {
        title: 'Đưa sợi chỉ đầu tiên qua sợi chỉ thứ hai để thắt nút',
        image: require('assets/img/vtttb/1.3.png'),
      },
      {
        title:
          'Tạo thêm một nút thắt tương tự với hai sợi chỉ đó',
        image: require('assets/img/vtttb/1.4.png'),
      },
      {
        title: 'Thực hiện lại thao tác thêm một lần nữa với sợi chỉ ngoài cùng bên trái.',
        image: require('assets/img/vtttb/1.5.png'),
      },
      {
        title: 'Tiếp tục đến khi vòng tay đủ dài và vừa vặn với cổ tay.Cột đầu còn lại của vòng tay thành nút thắt ',
        image: require('assets/img/vtttb/1.6.png'),
      },
      {
        title: 'Cắt phần chỉ còn thừa',
        image: require('assets/img/vtttb/1.7.png'),
      },
      {
        title:'Cột vòng tay',
        image: require('assets/img/vtttb/1.8.png'),
      },
    ],
  },
  {
    id: '4',
    title: 'CÁCH LÀM VÒNG TAY HANDMADE ĐƠN GIẢN BẰNG DÂY',
    image: require('assets/img/2/BÌA.png'),
    rating: 1,
    description: 'Tự tay làm nên những chiếc vòng xinh xắn để kỉ niệm bạn bè nhé!',
    requirement: [
      '1 đoạn dây dài khoảng 30-50 cm',
      '2 sợi chỉ nhỏ hơn',
    ],
    instruction: [
      {
        title:
          'Lấy một đoạn dây dài khoảng 30-50 cm. Gấp đôi lại để điều chỉnh kích thước cho vừa với cổ tay. Sử dụng hai sợi chỉ khác để buộc thành một nút, đảm bảo kích thước nút vừa với hạt đã đục lỗ.',
        image: require('assets/img/2/2.1.png'),
      },
      {
        title:
          'Quấn quanh đầu dây một vài vòng. Sau đó, quấn đoạn chỉ thừa lên đoạn dây chính. Tiếp tục quấn dây theo hình số 2 và số 8. Cuối cùng, thắt lại theo vòng hình số 8.',
        image: require('assets/img/2/2.2.png'),
      },
      {
        title: 'Sử dụng kéo để cắt phần chỉ thừa. Kiểm tra sản phẩm để đảm bảo chắc chắn và đẹp mắt.',
        image: require('assets/img/2/2.3.png'),
      }
    ],
  },
  {
    id: '5',
    title: 'CÁCH LÀM VÒNG CỔ ĐẸP BẰNG VẢI',
    image: require('assets/img/3/bìa.webp'),
    rating: 5,
    description: 'Tự tay làm nên những chiếc vòng cổ nhiều màu sắc cùng kiểu dáng mới lạ',
    requirement: [
      'Vải dạ 3 màu (xanh tím than, xanh dương, kem), bạn có thể tận dụng các mảnh vải nhỏ.',
      'Kéo, kìm.',
      'Dây chuyền, móc khóa.',
      '6 hạt trang trí.',
      'Kim khâu, chỉ xanh.',
    ],
    instruction: [
      {
        title:
          'Cắt vải thành những hình tròn nhỏ có đường kính từ 2 đến 3cm. Đặt 2 hình tròn màu nhạt lên trên hình tròn màu đậm. Cứ 3 hình tròn tạo thành 1 bông hoa, gập đôi những vòng tròn đã xếp lại',
        image: require('assets/img/3/3.1.jpg'),
      },
      {
        title:
          'Dùng kim đính hạt trang trí lên trên bông hoa này, cũng là để cố định chúng. Lưu ý, bạn phải đảm bảo kim sẽ xuyên qua cả 3 hình tròn. ',
        image: require('assets/img/3/3.2.webp'),
      },
      {
        title: 'Làm tương tự như vậy với 5 bông hoa còn lại (hoặc nhiều hơn tùy theo sở thích của bạn)',
        image: require('assets/img/3/3.3.webp'),
      },
      {
        title: 'Sau đó, đính móc vào 2 đầu hoa để gắn dây chuyền. Gắn móc khóa vào 2 đầu của dây chuyền.',
        image: require('assets/img/3/3.4.webp'),
      },
    ],
  },
  {
    id: '6',
    title: 'Hướng dẫn chi tiết Cách Làm vòng cổ handmade cho nữ đơn giản bạn gái nào cũng mê',
    image: require('assets/img/4/bìa.jpg'),
    rating: 3,
    description: 'Hướng dẫn cách làm charm treo vòng cổ',
    requirement: [
      'Dây thép nhỏ (loại dễ uốn để làm handmade)',
      'Kéo, kìm nhỏ.',
      'Hạt vòng',
      'Hạt đá.',
    ],
    instruction: [
      {
        title:
          'Cắt 1 đoạn dây thép dài khoảng 70cm, tạo thành hình chữ U ở chính giữa và lồng 3 hạt vòng/ hạt đá. Bạn quấn dây thép lại, xoắn vài vòng và gập phần dây còn lại ra sau.',
        image: require('assets/img/4/4.1.jpg'),
      },
      {
        title:
          'Trước hết, bạn hãy giữ 2 phần dây thép còn lại với nhau trong tất cả các thao tác dưới đây. Quấn dây thép xung quanh 3 hạt vòng nhiều lần để tạo hình tổ chim vững chắc. Dành một đoạn dây thép còn lại, luồn qua các hạt vòng ở giữa tạo đế cho tổ chim – mặt sau dây chuyền handmade. Quấn thêm một số vòng tròn để bện chặt những vòng dây thép xung quanh nữa nhé! Bạn cũng cần để lại một đoạn dây thép để làm chiếc móc nhỏ xâu mặt dây chuyền handmade. ',
        image: require('assets/img/4/4.2.jpg'),
      },
      {
        title: 'Đây là lúc bạn cần tới chiếc kìm nhỏ để uốn dây thép nè ^^ Thực hiện 3 thao tác uốn dây thép với kìm như hình vẽ Hình vẽ dưới là mặt dây chuyền handmade nhìn từ phía sau và phía trước.',
        image: require('assets/img/4/4.3.jpg'),
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
  {
    title: ' Shop Reddragonfly',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTstkAhkXPTvDZ_81ExtJ8zJMfWOuOR5tNhag&s',
    address: [
      {
        title:
          ' 38 Trần Huy Liệu, P. 12, Quận Phú Nhuận, TP.HCM',
        phone: '(08) 66734 975',
      },
      {
        title: '412 Lê Văn Sỹ, P. 2, Quận Tân Bình',
        phone: '(08) 66726 183',
      },
    ],
    open: '08:00',
    close: '18:00',
    description:
      'Chuyên bán: Bán các mặt hàng thủ công mỹ nghệ, bạn có thể mua với số lượng lẻ hoặc sỉ đều được. Nhưng ở đây nhân viên bán hàng không được nhiệt tình cho lắm.',
    facebookUrl: 'https://www.facebook.com/NganThong64/',
    websiteUrl: 'https://nganthongart.com.vn',
  },
  {
    title: 'Soul Shop',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2n7IS3XT23JCa4qWbVBbi5Qd_B_ILqX7nzg&s',
    address: [
      {
        title:
          '107 Bùi Thị Xuân, P. 2, Quận Tân Bình, TP HCM',
        phone: '0937 640 523',
      },
      {
        title: '18 Bình Gia, P. 13, Quận Tân Bình, TP HCM',
        phone: '0909 434 081',
      },
    ],
    open: '08:00',
    close: '18:00',
    description:
    'Chuyên bán: Soul Shop  là cửa hàng chuyên bán các sản phẩm thủ công như : thiệp tay, các sp thủ công từ vải , đất sét…Ngoài ra, Soul Shop còn là nơi cung cấp các nguyên vật liệu, dụng cụ thủ công.',
    websiteUrl: ' www.thegioithucong.com',
  },
  {
    title: 'Thông Xanh Handmade',
    image: 'https://linhkienled1000.com/files/product/083/04-11-2021/caythongnoel3lacao15m_5NIKRrXI.jpg',
    address: [
      {
        title:
          'Hẻm 26 đường số 3, P. 4, TP HCM',
        phone: '(08) 38340 665',
      },
    ],
    open: '09:00',
    close: '20:00',
    description:
    'Chuyên bán: Shop chuyên bán về văn phòng phẩm, nghệ thuật giải trí và cung cấp hàng thủ công như vải, len, bông tai, đồ tranng trí…',
    facebookUrl: ' https://www.facebook.com/thongxanhhandmade/',
  },
]
