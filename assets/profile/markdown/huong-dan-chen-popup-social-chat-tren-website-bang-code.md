---
pubDatetime: 2023-10-30T20:22:00Z
title: Hướng dẫn chèn popup social chat trên website bằng code
description: Popup social chat (Plugin chat) là tính năng cho phép người dùng kết nối với quản trị viên website. Popup social chat (Plugin chat) giúp tăng tương tác, giải quyết những vấn đề mà người dùng gặp phải.
featured: false
draft: false
tags:
  - webflow
  - website
  - website builder
  - developer
---

_Popup social chat (Plugin chat) là tính năng cho phép người dùng kết nối với quản trị viên website. popup social chat (plugin chat) giúp tăng tương tác, giải quyết những vấn đề mà người dùng gặp phải trong quá trình thao tác, Google Search thông tin trên website. Với các giải pháp, popup social chat (plugin chat) được sử dụng để tạo kênh thông tin liên lạc, từ đó giúp người dùng dễ dàng kết nối với giải pháp hơn._

## Popup social chat (Plugin chat) trên website là gì

Popup social chat (Plugin chat) là tính năng cho phép người dùng kết nối với quản trị viên website. popup social chat (plugin chat) giúp tăng tương tác, giải quyết những vấn đề mà người dùng gặp phải trong quá trình thao tác, Google Search thông tin trên website. Với các giải pháp, popup social chat (plugin chat) được sử dụng để tạo kênh thông tin liên lạc, từ đó giúp người dùng dễ dàng kết nối với giải pháp hơn.

## Lợi ích mà popup social chat (plugin chat) đem lại cho các giải pháp là

– Tăng khả năng giữ chân người dùng: Khi người dùng có thể trò chuyện với nhau trên website, họ sẽ cảm thấy thú vị, hứng thú và muốn quay lại nhiều lần. Họ cũng có thể tìm được bạn bè, đối tác hoặc khách hàng tiềm năng thông qua popup social chat (plugin chat).

– Tăng uy tín và niềm tin của người dùng: Khi người dùng thấy có nhiều người khác đang truy cập và trò chuyện trên website, họ sẽ cảm thấy website là nơi đáng tin cậy, có giá trị và chất lượng. Họ cũng có thể nhận được sự hỗ trợ, tư vấn hoặc phản hồi từ những người dùng khác thông qua popup social chat (plugin chat).

– Tăng doanh thu và lợi nhuận: Khi người dùng gắn bó với website và nhau qua popup social chat (plugin chat), họ sẽ có xu hướng sử dụng nhiều hơn các sản phẩm, dịch vụ hoặc quảng cáo của website. Họ cũng có thể giới thiệu website cho người khác, tạo ra hiệu ứng lan tỏa và tăng lượng truy cập.

## Một số nền tảng popup social chat (plugin chat) phổ biến

### Chatwing

Một công cụ cho phép tạo ra popup social chat (plugin chat) cho bất kỳ website nào chỉ với vài bước đơn giản. Chatwing có nhiều tính năng tiện ích, như tích hợp với các mạng xã hội, hỗ trợ nhiều ngôn ngữ, cho phép điều chỉnh giao diện và màu sắc, cung cấp bảng điều khiển quản lý và thống kê…

### RumbleTalk

Một giải pháp cho phép tạo ra popup social chat (plugin chat) chuyên nghiệp cho website. RumbleTalk có nhiều tính năng cao cấp, như hỗ trợ âm thanh và video, cho phép gửi file và ảnh, tích hợp với các hệ thống thanh toán, cho phép tạo ra các nhóm chat riêng tư hoặc công khai…

### Chatra

Một ứng dụng cho phép tạo ra popup social chat (plugin chat) thông minh cho website. Chatra có nhiều tính năng thông minh, như tự động gửi tin nhắn chào mừng, thu thập thông tin liên hệ, phân loại và chuyển hướng người dùng, theo dõi hành vi và lịch sử của người dùng…

## Hướng dẫn chèn popup social chat (plugin chat) trên website bằng code

### Bước 1: Chèn script vào thẻ '<body>' của website

```
<style>
.cta-action img {width: 40px;height: 40px;}
.cta-zalo {width: 40px;height: 40px;position: fixed;bottom: 180px;left: 15px;z-index: 9999;border-radius: 20px;animation: zalo 2s ease infinite;-webkit-backface-visibility: hidden;-moz-backface-visibility: hidden;-ms-backface-visibility: hidden;backface-visibility: hidden;transition: all 0.3s;}
.cta-zalo:after {content: "";display: block;color: #fff;background-color: #f04c28;width: 10px;height: 10px;border-radius: 20px;position: absolute;top: 0;right: 2px;font-size: 10px;text-align: center;}
.cta-mes {width: 40px;height: 40px;position: fixed;bottom: 120px;left: 15px;z-index: 9999;border-radius: 20px;animation: zalo 2s ease infinite;-webkit-backface-visibility: hidden;-moz-backface-visibility: hidden;-ms-backface-visibility: hidden;backface-visibility: hidden;transition: all 0.3s;}
.cta-mes:after {content: "1";display: block;color: #fff;background-color: #f04c28;width: 15px;height: 15px;border-radius: 20px;position: absolute;top: –3px;right: 0;font-size: 10px;text-align: center;z-index: 9999;}.cta-call {position: fixed;bottom: 60px;left: 15px;z-index: 9999;}
.cta-call i {width: 40px;height: 40px;display: block;text-align: center;background-color: #ff0000;color: #fff;line-height: 40px;margin: 0 auto;border-radius: 35px;animation: call 2s ease infinite;-webkit-backface-visibility: hidden;-moz-backface-visibility: hidden;-ms-backface-visibility: hidden;backface-visibility: hidden;transition: all 0.3s;}

@keyframes call {0% {transform: scale(1)}15% {box-shadow: 0 0 0 3px rgb(255 7 7 / 40%);}25% {box-shadow: 0 0 0 6px rgb(255 0 0 / 40%), 0 0 0 12px rgb(255 7 7 / 20%);}25% {box-shadow: 0 0 0 9px rgb(255 7 7 / 40%), 0 0 0 18px rgb(255 193 7 / 20%);}}
@keyframes zalo {0% {transform: scale(1)}15% {box-shadow: 0 0 0 3px rgb(0 154 255 / 40%)}25% {box-shadow: 0 0 0 6px rgb(0 154 255 / 40%), 0 0 0 12px rgb(0 154 255 / 20%)}25% {box-shadow: 0 0 0 9px rgb(0 154 255 / 40%), 0 0 0 18px rgb(0 154 255 / 20%)}}
@media (max-width: 575px) {.cta-zalo {bottom:180px}.cta-mes {bottom: 120px}.cta-call {bottom: 60px}}

</style>

<div class="cta-action">

<!-– hotline zalo –->
	<a href="https://zalo.me/088xxx7749" class="cta-zalo"><img src="https://server.nhavantuonglai.com/assets/image/favicon/zalo.png" alt="" data-lazy-src="https://admin.bluejayhotelsystem.com/Uploads/4354/7602a4dd-3f1c-4f58-b2ff-d633a9d4f5d4.png" class="lazyloaded" data-was-processed="true"><noscript><img src="https://admin.bluejayhotelsystem.com/Uploads/4354/7602a4dd-3f1c-4f58-b2ff-d633a9d4f5d4.png" alt=""></noscript></a>

<!-– fanpage –->
	<a href="https://www.facebook.com/100124394769344" class="cta-mes"><img src="https://server.nhavantuonglai.com/assets/image/favicon/messenger.png" alt="" data-lazy-src="https://admin.bluejayhotelsystem.com/Uploads/4354/551a9115-b85d-46f5-9746-9738aa706ffe.png" class="lazyloaded" data-was-processed="true"><noscript><img src="https://admin.bluejayhotelsystem.com/Uploads/4354/551a9115-b85d-46f5-9746-9738aa706ffe.png" alt=""></noscript></a>

<!-– hotline tele –->
	<a href="tel:088xxx7749" class="cta-call"><i class="fa fa-phone" aria-hidden="true"></i></a></div>
```
{% endcode %}

### Bước 2: Tải lại trang và kiểm tra

## Hướng dẫn chèn popup Messenger bằng Fanpage trên website

### Bước 1: Truy cập Fanpage muốn chèn popup Messenger bằng Fanpage trên website

– Chuyển quyền quản lý sang Fanpage muốn chèn popup Messenger bằng Fanpage trên website.

– Truy cập mục `Messenger` của Fanpage.

– Truy cập mục `Xem tất cả cài đặt`, ở góc trên bên phải màn hình.

<figure><img src="https://server.nhavantuonglai.com/assets/image/article/developer/huong-dan-chen-popup-social-chat-tren-website-bang-code-1.jpg" alt="huong-dan-chen-popup-social-chat-tren-website-bang-code" height=100% width=100%><figcaption><p>huong-dan-chen-popup-social-chat-tren-website-bang-code-nhavantuonglai</p></figcaption></figure>

– Truy cập mục `Plugin chat`.

<figure><img src="https://server.nhavantuonglai.com/assets/image/article/developer/huong-dan-chen-popup-social-chat-tren-website-bang-code-2.jpg" alt="huong-dan-chen-popup-social-chat-tren-website-bang-code" height=100% width=100%><figcaption><p>huong-dan-chen-popup-social-chat-tren-website-bang-code-nhavantuonglai</p></figcaption></figure>

### Bước 2: Tùy chỉnh Plugin chat theo nhu cầu

<figure><img src="https://server.nhavantuonglai.com/assets/image/article/developer/huong-dan-chen-popup-social-chat-tren-website-bang-code-3.jpg" alt="huong-dan-chen-popup-social-chat-tren-website-bang-code" height=100% width=100%><figcaption><p>huong-dan-chen-popup-social-chat-tren-website-bang-code-nhavantuonglai</p></figcaption></figure>

### Bước 3: Truy cập mục Thiết lập ở đầu trang

– Chọn nền tảng build website.

– Nếu nền tảng build website không được liệt kê, chọn `Tiêu chuẩn` để lấy script.

<figure><img src="https://server.nhavantuonglai.com/assets/image/article/developer/huong-dan-chen-popup-social-chat-tren-website-bang-code-4.jpg" alt="huong-dan-chen-popup-social-chat-tren-website-bang-code" height=100% width=100%><figcaption><p>huong-dan-chen-popup-social-chat-tren-website-bang-code-nhavantuonglai</p></figcaption></figure>

### Bước 4: Chèn script vào thẻ '<body>' của website

```
<!-– Messenger Plugin chat Code –->
<div id="fb-root"></div>

		<!-– Your Plugin chat code –->
		<div id="fb-customer-chat" class="fb-customerchat">
</div>

<script>
	var chatbox = document.getElementById('fb-customer-chat');
	chatbox.setAttribute("page_id", "100124394769344");
	chatbox.setAttribute("attribution", "biz_inbox");
	</script>

 <!-– Your SDK code –->
	<script>
	window.fbAsyncInit = function {
	FB.init({
	xfbml: true,
	version: 'v18.0'
 });
 };

 (function(d, s, id) {
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) return;
 js = d.createElement(s); js.id = id;
 js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
 fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
 </script>
```
{% endcode %}

### Bước 5: Tải lại trang và kiểm tra

Popup social chat (Plugin chat) là một tính năng hữu ích và hiệu quả cho website. Nó không chỉ giúp tăng tương tác và gắn kết giữa người dùng, mà còn giúp tăng uy tín, doanh thu và lợi nhuận cho website. popup social chat (plugin chat) là một xu hướng không thể bỏ qua trong thời đại số hóa và kết nối ngày nay.