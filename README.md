<h1 align="center">HANDMADE</h1>


<div align="center">
  <img width="350" src="https://github.com/angushyx/handmade/blob/main/HANDMADE_LOGO.png?raw=true">

 HANDMADE 是使用 React 框架的單頁應用（SPA）網站，整合了大台北地區手作課程的店家資訊
</div>
 <br>


<!-- #### 🔗Website URL: <a href="https://nextmeal.herokuapp.com/#/"><strong>handmade</strong></a>

#### Test account and password: test@test.com/testtest 
 -->



<hr>

### 功能大綱

- 一般登入及 google 登入
- 會員系統
- 購物車
- 捷運與商家地圖
- 瀏覽商品、商品細節
- 聊天室
- 部落格
- 自動回覆客服
- 響應式設計


### 使用技術
- [React ( hook )](https://zh-hant.reactjs.org/docs/hooks-intro.html)
- [React Router](https://reactrouter.com/en/main)：SPA 巢狀路由配置
- [sass](https://sass-lang.com/)：自定義 Bootstrap 變數
- [Bootstrap](https://react-bootstrap.github.io/): 切版及 UI 元件
- [Redux (redux-toolkit)](https://redux-toolkit.js.org/): 全域狀態管理
- [RTK Query (redux-toolkit query)](https://redux-toolkit.js.org/rtk-query/overview): query 並緩存資料
<!-- - [Cloud Services\*not yet](#cloud-services-1) -->

### 第三方套件 & API


- [leaflet](https://leafletjs.com/): 將捷運與附近商家整合
- [socket.io](https://socket.io/): 即時聊天室
- [CKEditor](https://ckeditor.com/ckeditor-5/): 部落格新增與修改功能 
- [sweetalert2](https://sweetalert2.github.io/#input-types): 客製化 pop 訊息 
- [formik & yup ](https://formik.org/docs/guides/validation): 表單驗證 
- [swiperjs](https://swiperjs.com/demos): 輪播動畫
- [moment.js](https://github.com/moment/moment/): 轉換日期格式
- [Google calendar API](https://developers.google.com/calendar/api): 將預約手作課程加入個人 Google 行事曆中
- [Gmail Api](https://developers.google.com/gmail/api): 送出驗證信以及訂單成立通知
- [TapPay 金流](https://www.tappaysdk.com/zh/): 多元支付

### 版本控制

- Git / Github

### 資料夾結構
<!-- [](#folder-structure) -->

| Folder      | Description                |
| ----------- | -------------------------- |
| components/ | UI 元件                    |
| slices /    | action 及 reducer          |
| services /  | 整合 query 後端資料的 apis |
| store/store | 整合 slices 及 apis        |
| hooks/      | Custom Hooks               |
| assets/     | 圖片、媒體檔案             |
| pages/      | 主要網站頁面               |
| styles/     | .css, .sass 檔             |
| utils/      | config 檔案                |

<!-- 
### 網站部署

採用 AWS 服務部署網站

| Item      | Service       |
|-----------|---------------|
| DNS       | AWS Route53   |
| CDN       | AWS CloudFront|
| Frontend  | AWS S3        |
| ELB       | AWS EC2       |
| Backend   | AWS EC2       |
| DB        | AWS RDS       |
 -->

<br>

| Title | Job                                   |
|-------|---------------------------------------|
| 陳若珈 | Navbar、Footer、品牌專區頁、購物車系統、TapPay 金流串接   |
| 何宗鴻 | 課程商品總覽頁、課程與商品收藏功能、條件篩選；頁碼、地圖導覽頁           |
| 陶靖宜 | 最新消息頁、領取折價券功能、會員系統(登出、帳號、訂單管理、訂單評價、收藏清單等..) |
| 柯映竹 | 首頁專區、Banner SVG、子導覽功能、商品與課程細節頁、404Page |
| 黃奕翔 | 會員系統 (註冊、登入、忘記密碼) 、 聊天室 、部落格專區 、 Gmail、Google calendar API       |
| 黃昱銘 | 註冊+登入+忘記密碼頁靜態頁面切版       |

> 後端專案請參訪： https://github.com/itskeyingzhu/handmade-b
