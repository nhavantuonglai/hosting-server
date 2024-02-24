---
pubDatetime: 2023-10-30T20:22:00Z
title: Hướng dẫn cách tải video TikTok về máy tính
description: Hướng dẫn thực hiện các thủ thuật công nghệ giúp bạn tiết kiệm thời gian, công sức và đầu tư vào những công việc hiệu quả hơn. Liên hệ info@nhavantuonglai.com để hỗ trợ thao tác.
featured: false
draft: false
tags:
  - website
  - website builder
  - tiktok
  - code
  - developer
---

_Hướng dẫn cách lưu và tải video trên TikTok về máy tính nhanh chóng bằng thủ thuật đơn giản, dễ làm với các đoạn code dưới đây._

Bước 1: Truy cập vào Tiktok bằng máy tính và đến video cần tải video TikTok về máy tính.

Bước 2: Thao tác `Ctrl + Shift + I` (trên Windos) hoặc `Command + Shift + I` (trên MacOS).

Bước 3: Dán đoạn code sau vào phần `Console:`

```
(function  {
 const videoEl = document.querySelector('video');
 function downloadVideo(url) {
 fetch(url).then(response => {
 if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
 return response.blob;
 }).then(blob => {
 const link = document.createElement("a");
 link.href = URL.createObjectURL(blob);
 link.download = "video.mp4";
 document.body.appendChild(link);
 link.click;
 document.body.removeChild(link);
 }).catch(error => {
 alert("Có lỗi trong quá trình tải video.");
 });
 }
 if (!videoEl) {
 alert("Không tìm thấy video, bạn đã mở trang video chưa?");
 } else {
 const videoSrc = videoEl.src;
 if (videoSrc || videoSrc.includes('.tiktok.com/video/tos/alisg/')) {
 downloadVideo(videoSrc);
 } else alert("Video không hợp lệ");
 }
});
```
{% endcode %}

Nếu cần tải video TikTok về máy tính thường xuyên, có thể thực hiện theo cách sau:

Bước 4: Thao tác `Ctrl + Shift + B` (trên Windos) hoặc `Command + Shift + B` (trên MacOS) để tạo bookmark.

Bước 5: Dán đoạn code sau vào ô url bookmark:

```
javascript:!function{let e=document.querySelector("video");if(e){let t=e.src;t||t.includes(".tiktok.com/video/tos/alisg/")?function e(t){fetch(t).then(e=>{if(!e.ok)throw Error(`HTTP error! Status: ${e.status}`);return e.blob}).then(e=>{let t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="video.mp4",document.body.appendChild(t),t.click,document.body.removeChild(t)}).catch(e=>{alert("C\xf3 lỗi trong qu\xe1 tr\xecnh tải video.")})}(t):alert("Video kh\xf4ng hợp lệ")}else alert("Kh\xf4ng t\xecm thấy video, bạn đ\xe3 mở trang video chưa?")};
```
{% endcode %}

Bước 6: Truy cập vào Tiktok bằng máy tính và đến video cần tải video TikTok về máy tính rồi nhấn vào bookmark đã tạo ở trên.

Bước 7: Lưu video cần tải video TikTok về máy tính với tên tùy ý để thực hiện lưu.