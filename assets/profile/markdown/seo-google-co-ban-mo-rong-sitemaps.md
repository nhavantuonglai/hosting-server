---
pubDatetime: 2023-05-12T15:22:00Z
title: Cẩm nang tối ưu SEO chuẩn Google cơ bản | Mở rộng Sitemaps
description: Giúp Google và người dùng tìm thấy nội dung website hướng dẫn nâng cao những kỹ thuật giúp tối ưu SEO hiệu quả, đem lại thứ hạng tốt trên công cụ tìm kiếm.
featured: false
draft: false
tags:
  - google
  - google console
  - google search
  - seo
  - google seo
  - content
  - developer
---

_Sitemaps dành cho hình ảnh là một cách hiệu quả để thông báo cho Google về các hình ảnh khác trên website của bạn, đặc biệt là những hình ảnh mà có thể chúng tôi không tìm được theo cách khác (chẳng hạn như hình ảnh mà website của bạn truy cập bằng mã JavaScript)._

## Sitemaps dành cho hình ảnh

Sitemaps dành cho hình ảnh là một cách hiệu quả để thông báo cho Google về các hình ảnh khác trên website của bạn, đặc biệt là những hình ảnh mà có thể chúng tôi không tìm được theo cách khác (chẳng hạn như hình ảnh mà website của bạn truy cập bằng mã JavaScript). Bạn có thể tạo một Sitemaps dành riêng cho hình ảnh hoặc thêm thẻ Sitemaps dành cho hình ảnh vào Sitemaps hiện có; cả hai phương pháp đều phù hợp với Google.

Vì đây vẫn là Sitemaps nên [các phương pháp hay nhất về Sitemaps](https://www.nhavantuonglai.com/developer/cam-nang-toi-uu-seo-chuan-google-co-ban-tim-hieu-ve-sitemaps) cũng áp dụng cho Sitemaps dành cho hình ảnh. Bạn cũng nên làm theo [các phương pháp chung hay nhất để xuất bản hình ảnh](https://www.nhavantuonglai.com/developer/cam-nang-toi-uu-seo-chuan-google-nang-cao-toi-uu-hinh-anh).

### Ví dụ về Sitemaps dành cho hình ảnh

Ví dụ sau đây cho thấy một Sitemaps thông thường có phần mở rộng Sitemaps dành cho hình ảnh, trong đó có hai phần tử `<url>`:

– `https://nhavantuonglai.com/sample1.html`, trong đó có hai hình ảnh

– `https://nhavantuonglai.com/sample2.html`, trong đó có một hình ảnh

{% code overflow="wrap" %}
```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
	<url>
		<loc>https://nhavantuonglai.com/sample1.html</loc>
		<image:image>
			<image:loc>https://nhavantuonglai.com/image.jpg</image:loc>
		</image:image>
		<image:image>
			<image:loc>https://nhavantuonglai.com/photo.jpg</image:loc>
		</image:image>
	</url>
	<url>
		<loc>https://nhavantuonglai.com/sample2.html</loc>
		<image:image>
			<image:loc>https://nhavantuonglai.com/picture.jpg</image:loc>
		</image:image>
	</url>
</urlset>
```
{% endcode %}

### Tham chiếu đến Sitemaps dành cho hình ảnh

Thẻ `image` được định nghĩa trong không gian tên Sitemaps dành cho hình ảnh: [`http://www.google.com/schemas/sitemap-image/1.1`](http://www.google.com/schemas/sitemap-image/1.1?hl=vi)

Để đảm bảo Google có thể khám phá Sitemaps dành cho hình ảnh, bạn bắt buộc phải sử dụng các thẻ cần thiết sau đây:

<table><thead><tr><th width="175.5">Thẻ cần thiết</th><th></th></tr></thead><tbody><tr><td><code>&#x3C;image:image></code></td><td>Bao gồm toàn bộ thông tin về một hình ảnh. Mỗi thẻ <code>&#x3C;url></code> có thể chứa tối đa 1.000 thẻ <code>&#x3C;image:image></code>.</td></tr><tr><td><code>&#x3C;image:loc></code></td><td><p>URL của hình ảnh.</p><p>Trong một số trường hợp, có thể URL hình ảnh không nằm trên cùng miền với website của bạn. Không sao hết, miễn là bạn xác minh cả hai miền trong Search Console. Ví dụ: nếu bạn sử dụng một mạng phân phối nội dung như Google Sites để lưu trữ hình ảnh, hãy đảm bảo website lưu trữ đó đã được xác minh trong Search Console. Ngoài ra, hãy đảm bảo tệp <a href="https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=vi">robots.txt</a> của bạn không chặn hoạt động thu thập dữ liệu trên mọi nội dung bạn muốn Google Index.</p></td></tr></tbody></table>

## Sitemaps Tin Tức

Nếu bạn là một nhà xuất bản tin tức, hãy sử dụng Sitemaps dành cho tin tức để cho Google biết về các tin bài của bạn cũng như thông tin bổ sung về những tin bài đó. Bạn có thể mở rộng Sitemaps hiện có của mình bằng các thẻ dành riêng cho tin tức hoặc tạo một Sitemaps tin tức dành riêng cho các tin bài. Google chấp nhận cả hai cách này, nhưng việc tạo Sitemaps riêng cho bài viết tin tức có thể giúp bạn theo dõi nội dung của mình trên Google Search hiệu quả hơn thông qua Search Console.

### Các phương pháp hay nhất đối với Sitemaps dành cho tin tức

Sitemaps dành cho tin tức được xây dựng dựa trên Sitemaps truyền thống, nên [các phương pháp chung hay nhất về Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=vi#general-guidelines) cũng áp dụng cho Sitemaps dành cho tin tức.

Cập nhật Sitemaps dành cho tin tức bằng những tin bài mới xuất bản. Đừng tạo Sitemaps mới cho mỗi lần cập nhật. Google Tin tức thu thập dữ liệu qua Sitemaps dành cho tin tức và qua phần còn lại của website với tần suất như nhau.

Chỉ cung cấp URL gần đây của những bài viết mới tạo trong 2 ngày qua. Khi các bài viết cũ hơn 2 ngày, hãy xoá các URL đó khỏi Sitemaps tin tức hoặc xoá siêu dữ liệu `<news:news>` khỏi các URL cũ.

Nếu bạn chọn phương thức xoá URL cũ khỏi Sitemaps dành cho tin tức, có thể Sitemaps đó sẽ bị trống trong một khoảng thời gian (ví dụ: nếu bạn không xuất bản bài viết mới nào trong vài ngày qua). Có thể bạn sẽ thấy cảnh báo Sitemaps trống trong Search Console, nhưng cảnh báo này chỉ để đảm bảo rằng bạn cố ý làm vậy. Tình trạng tệp trống không gây ra vấn đề gì với Google Search.

### Ví dụ về Sitemaps dành cho tin tức

Ví dụ sau đây cho thấy một Sitemaps thông thường có phần mở rộng cho tin tức. Trong này có một thẻ `<url>` và một thẻ `<news:news>` với các thẻ con cần thiết:

{% code overflow="wrap" %}
```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
	<url>
		<loc>http://www.example.org/business/article55.html</loc>
		<news:news>
			<news:publication>
	<news:name>The Example Times</news:name>
	<news:language>en</news:language>
			</news:publication>
			<news:publication_date>2008-12-23</news:publication_date>
			<news:title>Companies A, B in Merger Talks</news:title>
		</news:news>
	</url>
</urlset>
```
{% endcode %}

### Tài liệu tham khảo về Sitemaps dành cho tin tức

Thẻ `news` được định nghĩa trong không gian tên Sitemaps dành cho tin tức: [`http://www.google.com/schemas/sitemap-news/0.9`](http://www.google.com/schemas/sitemap-news/0.9?hl=vi)

Để đảm bảo Google có thể sử dụng Sitemaps của bạn dành cho tin tức, bạn phải sử dụng các thẻ cần thiết sau đây:

<table><thead><tr><th width="175.5">Thẻ cần thiết</th><th></th></tr></thead><tbody><tr><td><code>&#x3C;news:news></code></td><td>Thẻ mẹ của các thẻ khác trong không gian tên <code>news:</code>. Mỗi thẻ Sitemaps <code>url</code> chỉ được có một thẻ <code>news:news</code> (cùng với thẻ đóng tương ứng) và mỗi Sitemaps có thể có tối đa 1.000 thẻ <code>news:news</code>. Nếu có hơn 1.000 thẻ <code>&#x3C;news:news></code> trong một Sitemaps tin tức, hãy <a href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/large-sitemaps?hl=vi">chia Sitemaps của bạn thành nhiều Sitemaps nhỏ hơn</a>.</td></tr><tr><td><code>&#x3C;news:publication></code></td><td>Thẻ gốc cho các thẻ <code>&#x3C;news:name></code> và <code>&#x3C;news:language></code>. Mỗi thẻ gốc <code>&#x3C;news:news></code> chỉ có thể có một thẻ <code>&#x3C;news:publication></code>.</td></tr><tr><td><code>&#x3C;news:name></code></td><td>Thẻ <code>&#x3C;news:name></code> là tên của ấn bản tin tức. Tên này phải hoàn toàn trùng khớp với tên xuất hiện trong các bài viết của bạn trên <a href="https://news.google.com/?hl=vi">news.google.com</a>, trừ nội dung trong dấu ngoặc đơn.</td></tr><tr><td><code>&#x3C;news:language></code></td><td><p><code>&#x3C;news:language></code> là ngôn ngữ của ấn bản. Hãy dùng <a href="http://www.loc.gov/standards/iso639-2/php/code_list.php">mã ngôn ngữ ISO 639</a> (hai hoặc ba chữ cái).</p><p>Trường hợp ngoại lệ: Đối với tiếng Trung giản thể, hãy dùng <code>zh-cn</code>, còn đối với tiếng Trung phồn thể, hãy dùng <code>zh-tw</code>.</p></td></tr><tr><td><code>&#x3C;news:publication_date></code></td><td><p>Ngày phát hành bài viết ở <a href="http://www.w3.org/TR/NOTE-datetime">định dạng W3C</a>. Hãy dùng định dạng "ngày đầy đủ" (<code>YYYY-MM-DD</code>) hoặc định dạng "ngày đầy đủ cùng với giờ, phút và giây" kèm theo định dạng của mã chỉ định múi giờ (<code>YYYY-MM-DDThh:mm:ssTZD</code>). Hãy chỉ định ngày và giờ ban đầu khi bạn đăng tải bài viết trên website của mình. Đừng chỉ định thời gian mà bạn thêm bài viết vào Sitemaps.</p><p>Google chấp nhận định dạng bất kỳ sau đây:</p><ul><li>Ngày đầy đủ: <code>YYYY-MM-DD (1997-07-16)</code></li><li>Ngày đầy đủ kèm theo giờ và phút: <code>YYYY-MM-DDThh:mmTZD (1997-07-16T19:20+01:00)</code></li><li>Ngày đầy đủ kèm theo giờ, phút và giây: <code>YYYY-MM-DDThh:mm:ssTZD (1997-07-16T19:20:30+01:00)</code></li><li>Ngày đầy đủ kèm theo giờ, phút, giây và phần thập phân của giây: <code>YYYY-MM-DDThh:mm:ss.sTZD</code> (<code>1997-07-16T19:20:30.45+01:00</code>)</li></ul></td></tr><tr><td><code>&#x3C;news:title></code></td><td><p>Tiêu đề của tin bài.</p><p>Lưu ý: Google có thể rút ngắn tiêu đề của tin bài khi hiển thị trên Google Tin tức nếu không có đủ chỗ. Hãy dùng tiêu đề bài viết giống như tiêu đề xuất hiện trên website của bạn. Đừng đưa tên tác giả, tên ấn bản hoặc ngày xuất bản vào thẻ <code>&#x3C;news:title></code>. Tìm hiểu thêm về cách <a href="https://www.nhavantuonglai.com/developer/cam-nang-toi-uu-seo-chuan-google-co-ban-tac-dong-den-duong-lien-ket-tieu-de-trong-ket-qua-tim-kiem">tạo tiêu đề tốt hơn</a>.</p></td></tr></tbody></table>

## Sitemaps dành cho video và các phương án thay thế

Sitemaps dành cho video là [Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=vi) có thông tin bổ sung về video được lưu trữ trên các trang của bạn. Việc tạo Sitemaps dành cho video là một cách hay để giúp Google tìm thấy và hiểu được nội dung video trên website của bạn, đặc biệt là những nội dung mới thêm gần đây hoặc những nội dung chúng tôi có thể không phát hiện được bằng cơ chế thu thập dữ liệu thông thường.

Google khuyến khích dùng Sitemaps dành cho video. Tuy nhiên, chúng tôi cũng hỗ trợ [nguồn cấp dữ liệu mRSS](https://developers.google.com/search/docs/crawling-indexing/sitemaps/video-sitemaps?hl=vi#mrss).

### Các phương pháp hay nhất về Sitemaps dành cho video

Sitemaps dành cho video được xây dựng dựa trên Sitemaps truyền thống, do đó, [các phương pháp chung hay nhất về Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=vi#general-guidelines) cũng áp dụng cho Sitemaps dành cho video. Bạn có thể tạo một Sitemaps hoặc nguồn cấp dữ liệu mRSS riêng dành cho video hoặc thêm thẻ Sitemaps dành cho video vào một [Sitemaps truyền thống](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=vi#xml) hiện có, tuỳ theo cách nào thuận tiện hơn cho bạn.

Ngoài ra, những yêu cầu sau đây sẽ áp dụng riêng cho Sitemaps dành cho video:

– Đừng liệt kê những video không liên quan đến nội dung trên trang lưu trữ. Ví dụ: video là phần phụ cho trang hoặc không liên quan đến nội dung văn bản chính.

– Googlebot phải truy cập được vào mọi tệp được tham chiếu trong Sitemaps dành cho video. Yêu cầu này nghĩa là tất cả URL trong Sitemaps dành cho video:

– không được chặn hoạt động thu thập dữ liệu bằng quy tắc trong tệp [robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=vi),

– phải truy cập được mà không cần siêu tệp và không phải đăng nhập,

– không bị chặn bằng tường lửa hoặc cơ chế tương tự,

– và phải truy cập được qua giao thức được hỗ trợ: HTTP và FTP (không hỗ trợ giao thức truyền trực tuyến).

Nếu bạn muốn ngăn những kẻ gian lận truy cập vào nội dung video của mình tại URL `<player_loc>` hoặc `<content_loc>`, thì hãy [xác minh để đảm bảo mọi bot truy cập vào máy chủ của bạn đều thực sự là Googlebot](https://developers.google.com/search/docs/crawling-indexing/verifying-googlebot?hl=vi).

Để biết thêm các mẹo về video trong Google Search, hãy xem [các phương pháp hay nhất về video](https://www.nhavantuonglai.com/developer/cam-nang-toi-uu-seo-chuan-google-co-ban-cho-video-tren-website-thuong-mai-dien-tu).

### Ví dụ về Sitemaps dành cho video

Ví dụ sau đây cho thấy một Sitemaps thông thường có phần tiện ích cho video. Ở đây, hai mục video được lồng trong một thẻ `<url>` duy nhất. Mục nhập `<video>` đầu tiên bao gồm tất cả thẻ mà Google có thể sử dụng, còn mục thứ hai chỉ chứa các thẻ bắt buộc.

```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
	 <url>
		 <loc>https://www.nhavantuonglai.com/videos/some_video_landing_page.html</loc>
		 <video:video>
			 <video:thumbnail_loc>https://www.nhavantuonglai.com/thumbs/123.jpg</video:thumbnail_loc>
			 <video:title>Grilling steaks for summer</video:title>
			 <video:description>
	 Alkis shows you how to get perfectly done steaks every time
			 </video:description>
			 <video:content_loc>
		http://streamserver.nhavantuonglai.com/video123.mp4
			 </video:content_loc>
			 <video:player_loc>
	 https://www.nhavantuonglai.com/videoplayer.php?video=123
			 </video:player_loc>
			 <video:duration>600</video:duration>
			 <video:expiration_date>2021-11-05T19:20:30+08:00</video:expiration_date>
			 <video:rating>4.2</video:rating>
			 <video:view_count>12345</video:view_count>
			 <video:publication_date>2007-11-05T19:20:30+08:00</video:publication_date>
			 <video:family_friendly>yes</video:family_friendly>
			 <video:restriction relationship="allow">IE GB US CA</video:restriction>
			 <video:price currency="EUR">1.99</video:price>
			 <video:requires_subscription>yes</video:requires_subscription>
			 <video:uploader
	 info="https://www.nhavantuonglai.com/users/grillymcgrillerson">GrillyMcGrillerson
			 </video:uploader>
			 <video:live>no</video:live>
		 </video:video>
		 <video:video>
			 <video:thumbnail_loc>https://www.nhavantuonglai.com/thumbs/345.jpg</video:thumbnail_loc>
			 <video:title>Grilling steaks for winter</video:title>
			 <video:description>
	 In the freezing cold, Roman shows you how to get perfectly done steaks every time.
			 </video:description>
			 <video:content_loc>
		http://streamserver.nhavantuonglai.com/video345.mp4
			 </video:content_loc>
			 <video:player_loc>
	 https://www.nhavantuonglai.com/videoplayer.php?video=345
			 </video:player_loc>
		 </video:video>
	 </url>
</urlset>
```

Ví dụ sau đây minh họa cách thêm và nhúng video Vimeo vào một Sitemaps dành cho video:

```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
	 <url>
		 <loc>https://www.nhavantuonglai.com/videos/some_video_landing_page.html</loc>
		 <video:video>
			 <video:thumbnail_loc>https://www.nhavantuonglai.com/thumbs/123.jpg</video:thumbnail_loc>
			 <video:title>Lizzi is painting the wall</video:title>
			 <video:description>
	 Gary is watching the paint dry on the wall Lizzi painted.
			 </video:description>
			 <video:player_loc>
	 https://player.vimeo.com/video/987654321
			 </video:player_loc>
		 </video:video>
	 </url>
</urlset>
```

Ví dụ sau đây minh họa cách thêm và nhúng video YouTube vào một Sitemaps dành cho video:

```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
	 <url>
		 <loc>https://www.nhavantuonglai.com/videos/some_video_landing_page.html</loc>
		 <video:video>
			 <video:thumbnail_loc>https://www.nhavantuonglai.com/thumbs/345.jpg</video:thumbnail_loc>
			 <video:title>John teaches cheese</video:title>
			 <video:description>
	 John explains the differences between a banana and cheese.
			 </video:description>
			 <video:player_loc>
	 https://www.youtube.com/embed/1a2b3c4d
			 </video:player_loc>
		 </video:video>
	 </url>
</urlset>
```

### Tài liệu tham khảo Sitemaps dành cho video

Thẻ `video` được định nghĩa trong không gian tên của Sitemaps dành cho video: [`http://www.google.com/schemas/sitemap-video/1.1`](http://www.google.com/schemas/sitemap-video/1.1?hl=vi)

Để đảm bảo rằng Google có thể sử dụng Sitemaps dành cho video của bạn, bạn phải sử dụng các thẻ bắt buộc sau:

<table><thead><tr><th width="175.5">Thẻ bắt buộc</th><th></th></tr></thead><tbody><tr><td><code>&#x3C;video:video></code></td><td>Phần tử mẹ chứa tất cả thông tin về một video trên trang do thẻ <code>&#x3C;loc></code> chỉ định. Bạn có thể đưa vào nhiều thẻ <code>&#x3C;video:video></code> được lồng trong thẻ <code>&#x3C;loc></code>, mỗi thẻ dành cho một video trên trang lưu trữ.</td></tr><tr><td><code>&#x3C;video:thumbnail_loc></code></td><td>URL trỏ đến tệp hình thu nhỏ của video. Tuân thủ <a href="https://developers.google.com/search/docs/appearance/video?hl=vi#thumbnails">các yêu cầu về hình thu nhỏ của video.</a></td></tr><tr><td><code>&#x3C;video:title></code></td><td>Tiêu đề của video. Tất cả thực thể HTML đều phải được đặt sau ký tự thoát hoặc được gói trong một <a href="http://wikipedia.org/wiki/CDATA">khối <code>CDATA</code></a>. Tiêu đề này nên khớp với tiêu đề của video xuất hiện trên website mà video được nhúng vào.</td></tr><tr><td><code>&#x3C;video:description></code></td><td>Nội dung mô tả video. Tối đa 2048 ký tự. Tất cả thực thể HTML đều phải được đặt sau ký tự thoát hoặc được gói trong một <a href="http://wikipedia.org/wiki/CDATA">khối <code>CDATA</code></a>. Nội dung mô tả này phải khớp với nội dung mô tả xuất hiện trên website mà video được nhúng vào (không nhất thiết phải giống từng từ).</td></tr><tr><td><code>&#x3C;video:content_loc></code></td><td><p>URL trỏ đến tệp phương tiện thực tế của video. Tệp này phải là một trong <a href="https://developers.google.com/search/docs/appearance/video?hl=vi#file-types">những định dạng được hỗ trợ.</a></p><p>Bạn phải cung cấp thẻ <code>&#x3C;video:content_loc></code> hoặc <code>&#x3C;video:player_loc></code>. Nếu có thể, bạn nên cung cấp thẻ <code>&#x3C;video:content_loc></code>. Đây là cách hiệu quả nhất để Google tìm nạp các tệp nội dung video của bạn. Nếu không có <code>&#x3C;video:content_loc></code>, hãy cung cấp <code>&#x3C;video:player_loc></code> để thay thế.</p><p>Nguyên tắc bổ sung</p><ul><li>HTML và Flash là những định dạng không được hỗ trợ.</li><li>Không được trùng với URL trong thẻ <code>&#x3C;loc></code> mẹ.</li><li>URL này tương đương với <a href="https://developers.google.com/search/docs/appearance/structured-data/video?hl=vi"><code>VideoObject.contentUrl</code></a> trong dữ liệu có cấu trúc.</li><li>Phương pháp hay nhất: Nếu bạn muốn giới hạn quyền truy cập vào nội dung của mình nhưng vẫn muốn nội dung đó được thu thập dữ liệu, hãy đảm bảo Googlebot truy cập được vào nội dung của bạn bằng cách dùng <a href="https://developers.google.com/search/docs/crawling-indexing/verifying-googlebot?hl=vi">quy trình xác minh Googlebot</a>.</li></ul></td></tr><tr><td><code>&#x3C;video:player_loc></code></td><td><p>URL trỏ đến trình phát cho một video cụ thể. Thông thường, đây là thông tin trong phần tử <code>src</code> của thẻ <code>&#x3C;embed></code>.</p><p>Bạn phải cung cấp thẻ <code>&#x3C;video:content_loc></code> hoặc <code>&#x3C;video:player_loc></code>. Nếu có thể, bạn nên cung cấp thẻ <code>&#x3C;video:content_loc></code>. Đây là cách hiệu quả nhất để Google tìm nạp các tệp nội dung video của bạn. Nếu không có <code>&#x3C;video:content_loc></code>, hãy cung cấp <code>&#x3C;video:player_loc></code> để thay thế.</p><p>Nguyên tắc bổ sung</p><ul><li>Không được trùng với URL <code>&#x3C;loc></code>.</li><li>Đối với Vimeo, YouTube và các nền tảng lưu trữ video khác cho phép nhúng video bằng video <code>iframe</code>, giá trị này được sử dụng thay cho <code>video:content_loc</code>. URL này tương đương với <a href="https://developers.google.com/search/docs/appearance/structured-data/video?hl=vi"><code>VideoObject.embedUrl</code></a> trong dữ liệu có cấu trúc.</li><li>Phương pháp hay nhất: Nếu bạn muốn giới hạn quyền truy cập vào nội dung của mình nhưng vẫn muốn nội dung đó được thu thập dữ liệu, hãy đảm bảo Googlebot truy cập được vào nội dung của bạn bằng cách dùng <a href="https://developers.google.com/search/docs/crawling-indexing/verifying-googlebot?hl=vi">quy trình xác minh Googlebot</a>.</li></ul></td></tr></tbody></table>

Ngoài ra, các thẻ không bắt buộc sau đây có thể giúp Google hiểu rõ hơn về video của bạn và tài sản trong đó:

<table><thead><tr><th width="175.5">Thẻ không bắt buộc</th><th></th></tr></thead><tbody><tr><td><code>&#x3C;video:duration></code></td><td>Thời lượng của video (tính bằng giây). Toàn bộ giá trị phải nằm trong phạm vi từ <code>1</code> đến <code>28800</code> (8 giờ).</td></tr><tr><td><code>&#x3C;video:expiration_date></code></td><td><p>Ngày mà sau đó video sẽ không xem được nữa, ở <a href="http://www.w3.org/TR/NOTE-datetime">định dạng W3C</a>. Hãy bỏ qua thẻ này nếu video của bạn không có ngày hết hạn. Nếu có, video của bạn sẽ không xuất hiện trên Google Search sau ngày này. Đối với video lặp lại trên cùng một URL, hãy cập nhật ngày hết hạn thành ngày hết hạn mới.</p><p>Giá trị được hỗ trợ là ngày đầy đủ (<code>YYYY-MM-DD</code>) hoặc ngày đầy đủ cùng với giờ, phút, giây và múi giờ (<code>YYYY-MM-DDThh:mm:ss+TZD</code>).</p><p>Ví dụ: <code>2012-07-16T19:20:30+08:00</code>.</p></td></tr><tr><td><code>&#x3C;video:rating></code></td><td>Điểm xếp hạng của video. Giá trị được hỗ trợ là số thực dấu phẩy động trong khoảng từ 0 (thấp) đến 5 (cao).</td></tr><tr><td><code>&#x3C;video:view_count></code></td><td>Số lượt xem video.</td></tr><tr><td><code>&#x3C;video:publication_date></code></td><td><p>Ngày xuất bản video lần đầu, ở <a href="http://www.w3.org/TR/NOTE-datetime">định dạng W3C</a>. Giá trị được hỗ trợ là ngày đầy đủ (<code>YYYY-MM-DD</code>) hoặc ngày đầy đủ cùng với giờ, phút, giây và múi giờ (<code>YYYY-MM-DDThh:mm:ss+TZD</code>).</p><p>Ví dụ: <code>2007-07-16T19:20:30+08:00</code></p></td></tr><tr><td><code>&#x3C;video:family_friendly></code></td><td><p>Video có xuất hiện khi áp dụng chế độ <a href="https://developers.google.com/search/docs/crawling-indexing/safesearch?hl=vi">Google Search an toàn</a> không. Nếu bạn bỏ qua thẻ này, video vẫn xuất hiện khi chế độ Google Search an toàn đang bật.</p><p>Giá trị được hỗ trợ:</p><ul><li><code>yes</code>: Video vẫn xuất hiện khi chế độ Google Search an toàn đang bật.</li><li><code>no</code>: Video chỉ xuất hiện khi chế độ Google Search an toàn đang tắt.</li></ul></td></tr><tr><td><code>&#x3C;video:restriction></code></td><td><p>Hiện hoặc ẩn video của bạn trong kết quả Google Search ở một số quốc gia cụ thể.</p><p>Chỉ định danh sách mã quốc gia được phân tách bằng dấu cách ở <a href="http://wikipedia.org/wiki/ISO_3166">định dạng ISO 3166</a>. Bạn chỉ có thể dùng một thẻ <code>&#x3C;video:restriction></code> cho mỗi video. Nếu không có thẻ <code>&#x3C;video:restriction></code>, Google sẽ mặc nhiên cho rằng video này có thể xuất hiện ở mọi khu vực. <em>Hãy lưu ý rằng thẻ này chỉ ảnh hưởng đến kết quả Google Search chứ không ngăn người dùng sử dụng phương tiện khác để tìm hoặc phát video của bạn ở một khu vực bị hạn chế.</em> <a href="https://developers.google.com/search/docs/appearance/video?hl=vi#restrict_by_country">Tìm hiểu thêm về cách áp dụng hạn chế về quốc gia.</a></p><p>Thuộc tính:</p><p>Nếu bạn dùng thẻ <code>&#x3C;video:restriction></code> mẹ, thì thuộc tính dưới đây là bắt buộc:</p><ul><li><p><code>relationship</code> Xác định xem video sẽ được chấp nhận hay bị từ chối trong kết quả Google Search tại những quốc gia được chỉ định. Sau đây là các giá trị được hỗ trợ:</p><ul><li><code>allow</code>: các quốc gia có tên trong danh sách sẽ được chấp nhận và các quốc gia không có tên trong danh sách sẽ bị từ chối.</li><li><code>deny</code>: các quốc gia có tên trong danh sách sẽ bị từ chối và các quốc gia không có tên trong danh sách sẽ được chấp nhận.</li></ul></li></ul><p>Ví dụ: Trong ví dụ này, video chỉ được xuất hiện trong kết quả Google Search ở Canada và Mexico:</p><p><code>&#x3C;video:restriction relationship="allow">CA MX&#x3C;/video:restriction></code></p></td></tr><tr><td><code>&#x3C;video:platform></code></td><td><p>Xác định xem video sẽ xuất hiện hay bị ẩn trong kết quả Google Search trên những loại nền tảng được chỉ định. Đây là danh sách các loại nền tảng được phân tách bằng dấu cách. <em>Hãy lưu ý rằng thẻ này chỉ ảnh hưởng đến kết quả Google Search trên những loại thiết bị được chỉ định chứ không ngăn người dùng phát video của bạn trên một nền tảng bị hạn chế.</em></p><p>Bạn chỉ được dùng một thẻ <code>&#x3C;video:platform></code> cho mỗi video. Nếu không có thẻ <code>&#x3C;video:platform></code>, Google sẽ mặc nhiên cho rằng có thể phát video trên mọi nền tảng. <a href="https://developers.google.com/search/docs/appearance/video?hl=vi#restrict_by_platform">Tìm hiểu thêm về cách hạn chế theo nền tảng.</a></p><p>Giá trị được hỗ trợ:</p><ul><li><code>web</code> – Trình duyệt truyền thống dành cho máy tính trên máy tính để bàn và máy tính xách tay.</li><li><code>mobile</code> – Trình duyệt trên thiết bị di động, chẳng hạn như những trình duyệt trên điện thoại di động hoặc máy tính bảng.</li><li><code>tv</code> – Trình duyệt trên TV, chẳng hạn như những trình duyệt trên máy chơi trò chơi và thiết bị GoogleTV.</li></ul><p>Thuộc tính:</p><p>Nếu bạn dùng thẻ <code>&#x3C;video:platform></code> mẹ, thì những thuộc tính dưới đây là bắt buộc:</p><ul><li><p><code>relationship</code> Xác định xem video sẽ bị hạn chế hay được chấp nhận trên những nền tảng được chỉ định. Sau đây là các giá trị được hỗ trợ:</p><ul><li><code>allow</code>: mọi nền tảng không có trong danh sách sẽ bị từ chối.</li><li><code>deny</code>: mọi nền tảng không có trong danh sách sẽ được chấp nhận.</li></ul></li></ul><p>Ví dụ: Trong ví dụ sau đây, người dùng trên web hoặc TV được cho phép còn người dùng trên thiết bị di động thì không được cho phép:<br><code>&#x3C;video:platform relationship="allow">web tv&#x3C;/video:platform></code></p></td></tr><tr><td><code>&#x3C;video:requires_subscription></code></td><td><p>Cho biết liệu người dùng có cần đăng ký để xem được video hay không. Sau đây là các giá trị được hỗ trợ:</p><ul><li><code>yes</code>: bắt buộc phải đăng ký gói thuê bao.</li><li><code>no</code>: không bắt buộc phải đăng ký gói thuê bao.</li></ul></td></tr><tr><td><code>&#x3C;video:uploader></code></td><td><p>Tên của người tải video lên. Tối đa một <code>&#x3C;video:uploader></code> mỗi video. Giá trị chuỗi này có thể có tối đa 255 ký tự.</p><p>Thuộc tính:</p><ul><li><code>info</code> [<em>Không bắt buộc</em>] Chỉ định URL của website có thông tin bổ sung về người tải lên này. URL này phải thuộc cùng miền với thẻ <code>&#x3C;loc></code>.</li></ul></td></tr><tr><td><code>&#x3C;video:live></code></td><td><p>Cho biết video có phải là video phát trực tiếp hay không. Sau đây là các giá trị được hỗ trợ:</p><ul><li><code>yes</code>: video là video phát trực tiếp.</li><li><code>no</code>: video không phải video phát trực tiếp.</li></ul></td></tr><tr><td><code>&#x3C;video:tag></code></td><td>Một thẻ chuỗi tuỳ ý mô tả video. Thông thường thẻ này là các đoạn mô tả rất ngắn về những khái niệm chính có liên quan tới video hoặc một đoạn nội dung. Một video có thể có nhiều thẻ, kể cả nếu video đó chỉ thuộc về một thể loại. Ví dụ: video về đồ nướng có thể thuộc danh mục "đồ nướng" nhưng có thể được gắn thẻ "bít-tết", "thịt", "mùa hè" và "ngoài trời". Tạo phần tử <code>&#x3C;video:tag></code> mới cho mỗi thẻ được liên kết với video. Số thẻ tối đa được phép là 32.</td></tr></tbody></table>

Các thẻ và thuộc tính không dùng nữa

Chúng tôi đã xoá các thẻ và thuộc tính sau đây khỏi tài liệu: `<video:category>`, `<video:gallery_loc>`, thuộc tính `autoplay` và `allow_embed` của thẻ `<video:player_loc>`, thẻ `<video:price>` và các thuộc tính của thẻ đó, cùng với thẻ `<video:tvshow>` và các thuộc tính của thẻ đó. Hãy xem [thông báo về việc không dùng nữa](https://developers.google.com/search/blog/2022/05/spring-cleaning-sitemap-extensions?hl=vi) để biết thêm thông tin.

### Phương án thay thế cho Sitemaps: mRSS

Google khuyến khích dùng Sitemaps dành cho video. Tuy nhiên, chúng tôi cũng hỗ trợ nguồn cấp dữ liệu mRSS.

Google hỗ trợ [mRSS](http://www.rssboard.org/media-rss), một mô-đun RSS giúp tăng cường các khả năng phần tử của [RSS 2.0](http://cyber.law.harvard.edu/rss/rss.html). Nguồn cấp dữ liệu mRSS rất giống với Sitemaps dành cho video. Bạn có thể kiểm tra, gửi và cập nhật nguồn cấp dữ liệu mRSS tương tự như đối với Sitemaps.

Để biết thêm thông tin về nguồn cấp dữ liệu dành cho nội dung đa phương tiện, hãy xem [tài liệu chính thức về RSS cho nội dung đa phương tiện](http://www.rssboard.org/media-rss).

So sánh RSS với mRSS: mRSS là một tiện ích RSS dùng để phân phối tệp nội dung đa phương tiện. mRSS cho phép mô tả chi tiết hơn về nội dung so với chuẩn RSS.

#### Ví dụ về mRSS <a href="#mrss-example" id="mrss-example"></a>

Sau đây là ví dụ về một mục mRSS cung cấp mọi thẻ quan trọng mà Google sử dụng.

{% code overflow="wrap" %}
```
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/" xmlns:dcterms="http://purl.org/dc/terms/">
<channel>
<title>Example MRSS</title>
<link>https://www.nhavantuonglai.com/examples/mrss/</link>
<description>MRSS Example</description>
	<item xmlns:media="http://search.yahoo.com/mrss/" xmlns:dcterms="http://purl.org/dc/terms/">
		<link>https://www.nhavantuonglai.com/examples/mrss/example.html</link>
		<media:content url="https://www.nhavantuonglai.com/examples/mrss/example.flv" fileSize="405321"
			type="video/x-flv" height="240" width="320" duration="120" medium="video" isDefault="true">
			<media:player url="https://www.nhavantuonglai.com/shows/example/video.swf?flash_params" />
			<media:title>Grilling Steaks for Summer</media:title>
			<media:description>Get perfectly done steaks every time</media:description>
			<media:thumbnail url="https://www.nhavantuonglai.com/examples/mrss/example.png" height="120" width="160"/>
			<media:price price="19.99" currency="EUR" />
			<media:price type="subscription" />
		</media:content>
		<media:restriction relationship="allow" type="country">us ca</media:restriction>
		<dcterms:valid xmlns:dcterms="http://purl.org/dc/terms/">end=2020-10-15T00:00+01:00; scheme=W3C-DTF</dcterms:valid>
		<dcterms:type>live-video</dcterms:type>
	</item>
</channel>
</rss>
```
{% endcode %}

#### Tham chiếu đến mRSS

Phần [bản đặc tả mRSS đầy đủ](http://www.rssboard.org/media-rss) trình bày thêm nhiều thông tin về các thẻ không bắt buộc, phương pháp hay nhất và ví dụ khác.

Để đảm bảo Google có thể sử dụng nguồn cấp dữ liệu mRSS của bạn, bạn bắt buộc phải sử dụng các thẻ sau đây:

<table><thead><tr><th width="175.5">Thẻ bắt buộc</th><th></th></tr></thead><tbody><tr><td><code>&#x3C;media:content></code></td><td><p>Bao gồm thông tin về video.</p><p>Thuộc tính:</p><ul><li>Loại nội dung <code>medium</code>. Đặt thành <code>video</code>.</li><li><code>url</code> URL trực tiếp đến nội dung video gốc. Nếu thuộc tính này không được chỉ định, bạn phải chỉ định thẻ <code>&#x3C;media:player></code>.</li><li><code>duration</code> [<em>Không bắt buộc nhưng nên có</em>] Thời lượng của video (tính bằng giây).</li></ul><p>Đối với mọi trường con và thuộc tính không bắt buộc khác của thẻ <code>&#x3C;media:content></code>, hãy xem <a href="http://www.rssboard.org/media-rss">bản đặc tả mRSS</a>.</p></td></tr><tr><td><code>&#x3C;media:player></code></td><td><p>Bạn phải chỉ định ít nhất một thuộc tính <code>&#x3C;media:player></code> hoặc thuộc tính <code>url</code> trong <code>&#x3C;media:content></code>.</p><p>URL trỏ đến trình phát cho một video cụ thể. Thông thường, đây là thông tin trong thuộc tính <code>src</code> của thẻ <code>&#x3C;embed></code> và không được giống với nội dung của thẻ <code>&#x3C;loc></code>. Không được trùng URL với thẻ <code>&#x3C;link></code>. Thẻ <code>&#x3C;link></code> trỏ đến URL của trang lưu trữ video, còn thẻ này trỏ đến một trình phát.</p></td></tr><tr><td><code>&#x3C;media:title></code></td><td>Tiêu đề của video. Tối đa 100 ký tự. Tất cả thực thể HTML đều phải được đặt sau ký tự thoát hoặc được gói trong một <a href="http://wikipedia.org/wiki/CDATA">khối CDATA</a>.</td></tr><tr><td><code>&#x3C;media:description></code></td><td>Phần mô tả video. Tối đa 2048 ký tự. Tất cả thực thể HTML đều phải được đặt sau ký tự thoát hoặc được gói trong một <a href="http://wikipedia.org/wiki/CDATA">khối CDATA</a>.</td></tr><tr><td><code>&#x3C;media:thumbnail></code></td><td>URL trỏ đến hình thu nhỏ xem trước. Tuân thủ <a href="https://developers.google.com/search/docs/appearance/video?hl=vi#thumbnails">các yêu cầu về hình thu nhỏ của video</a>.</td></tr></tbody></table>

Ngoài ra, các thẻ không bắt buộc sau đây có thể giúp Google hiểu rõ hơn về video của bạn và tài sản trong đó:

<table><thead><tr><th width="175.5">Thẻ không bắt buộc</th><th></th></tr></thead><tbody><tr><td><code>&#x3C;dcterms:valid></code></td><td><p>Ngày xuất bản và ngày hết hạn của video. Đây là <a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/terms/valid/">Bản đặc tả đầy đủ của thẻ <code>dcterms:valid</code></a>.</p><p>Ví dụ:</p><pre data-overflow="wrap"><code>&#x3C;dcterms:valid>
	start=2002-10-13T09:00+01:00;
	end=2002-10-17T17:00+01:00;
	scheme=W3C-DTF
&#x3C;dcterms:valid>
</code></pre></td></tr><tr><td><code>&#x3C;media:restriction></code></td><td><p>Danh sách những quốc gia nơi video phát được hoặc không phát được, phân tách bằng dấu cách và ở <a href="http://wikipedia.org/wiki/ISO_3166">định dạng ISO 3166</a>. Nếu không có thẻ <code>&#x3C;media:restriction></code>, Google sẽ mặc nhiên cho rằng video có thể phát được ở mọi quốc gia.</p><p>Thuộc tính:</p><p>Nếu bạn dùng thẻ <code>&#x3C;media:restriction></code> mẹ, thì những thuộc tính dưới đây là bắt buộc:</p><ul><li><code>type</code> Đặt thuộc tính <code>type</code> thành <code>country</code>. Chỉ hỗ trợ chế độ hạn chế theo quốc gia.</li><li><p><code>relationship</code> Xác định xem có thể phát video tại những quốc gia trong danh sách được chỉ định hay không. Giá trị được hỗ trợ:</p><ul><li><code>allow</code>: các quốc gia có tên trong danh sách sẽ được chấp nhận và các quốc gia không có tên trong danh sách sẽ bị từ chối.</li><li><code>deny</code>: các quốc gia có tên trong danh sách sẽ bị từ chối và các quốc gia không có tên trong danh sách sẽ được chấp nhận.</li></ul></li></ul><p><a href="https://developers.google.com/search/docs/appearance/video?hl=vi#restrict_by_country">Tìm hiểu thêm về cách hạn chế theo quốc gia.</a></p><p>Ví dụ:</p><pre data-overflow="wrap"><code>&#x3C;media:restriction relationship="allow" type="country">us ca&#x3C;/media:restriction>
</code></pre></td></tr><tr><td><code>&#x3C;media:price></code></td><td><p>Mức giá để xem video hoặc tải video xuống. Đừng sử dụng thẻ này cho các video được cung cấp miễn phí. Bạn có thể liệt kê nhiều phần tử <code>&#x3C;media:price></code> (ví dụ: để chỉ định nhiều đơn vị tiền tệ hoặc cách mua).</p><p>Thuộc tính:</p><p>Nếu bạn dùng thẻ <code>&#x3C;media:price></code> mẹ, thì những thuộc tính dưới đây là bắt buộc:</p><ul><li><code>currency</code> Đơn vị tiền tệ ở <a href="https://en.wikipedia.org/wiki/ISO_4217">định dạng ISO 4217</a>.</li><li><p><code>type</code> Cách mua. Sau đây là các giá trị được hỗ trợ:</p><ul><li><code>rent</code>: có thể xem video sau khi thuê.</li><li><code>purchase</code>: có thể xem video sau khi mua.</li><li><code>package</code>: video là một phần của ưu đãi theo gói.</li><li><code>subscription</code>: có thể xem video sau khi đăng ký gói thuê bao.</li></ul></li></ul></td></tr></tbody></table>

## Cách kết hợp các phần mở rộng Sitemaps

Phần mở rộng Sitemaps là một cách tuyệt vời để cho Google biết về nhiều loại nội dung cũng như siêu dữ liệu tương ứng mà bạn đang sử dụng trên website của mình. Thường thì nội dung trên các trang của bạn có thể phù hợp với nhiều loại phần mở rộng, ví dụ: có thể bạn xuất bản tin bài có nhúng hình ảnh và video. Ngoài ra, cũng có thể các trang của bạn được bản địa hoá, tức là bạn có thể thêm chú thích `hreflang` cho các trang đã được bản địa hoá.

### Không gian tên

Đối với mỗi phần mở rộng Sitemaps mà bạn muốn sử dụng trong Sitemaps, bạn cần chỉ định không gian tên tương ứng để khai báo thẻ được hỗ trợ. Bạn có thể thực hiện việc này bằng thuộc tính `xmlns` của thẻ `urlset`. Sau đây là các không gian tên mà Google hỗ trợ cho phần mở rộng Sitemaps:

<table><thead><tr><th width="175.5">Thẻ phần mở rộng và định nghĩa không gian tên tương ứng</th><th></th></tr></thead><tbody><tr><td><code>image:</code></td><td><a href="http://www.google.com/schemas/sitemap-image/1.1?hl=vi"><code>http://www.google.com/schemas/sitemap-image/1.1</code></a></td></tr><tr><td><code>news:</code></td><td><a href="http://www.google.com/schemas/sitemap-news/0.9?hl=vi"><code>http://www.google.com/schemas/sitemap-news/0.9</code></a></td></tr><tr><td><code>video:</code></td><td><a href="http://www.google.com/schemas/sitemap-video/1.1?hl=vi"><code>http://www.google.com/schemas/sitemap-video/1.1</code></a></td></tr><tr><td><code>xhtml:</code> (<code>hreflang</code>)</td><td><a href="http://www.w3.org/1999/xhtml"><code>http://www.w3.org/1999/xhtml</code></a></td></tr></tbody></table>

#### Khai báo nhiều không gian tên

Để khai báo nhiều không gian tên, hãy thêm các tệp tham chiếu không gian tên tương ứng vào Sitemaps theo mô tả trong tài liệu về những phần mở rộng tương ứng. Sau đây là một ví dụ cho thấy cách thêm phần mở rộng cho tin tức, video và xhtml (`hreflang`) vào một Sitemaps:

{% code overflow="wrap" %}
```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
	xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
	xmlns:xhtml="http://www.w3.org/1999/xhtml">
	<url>
	<!-– rest of the sitemap –->
```
{% endcode %}

### Kết hợp các phần mở rộng Sitemaps

Sau khi bạn khai báo không gian tên, hãy làm theo thông tin triển khai nêu trong tài liệu về phần mở rộng Sitemaps tương ứng mà bạn sẽ sử dụng.

Để kết hợp các phần mở rộng, hãy thêm lần lượt các thẻ trong những phần mở rộng Sitemaps mà bạn muốn vào thẻ `<url>` thích hợp, như mô tả trong tài liệu của từng phần mở rộng Sitemaps.

Ví dụ: cách thêm phần mở rộng cho tin tức, video và xhtml (`hreflang`) vào một Sitemaps:

{% code overflow="wrap" %}
```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
	xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
	xmlns:xhtml="http://www.w3.org/1999/xhtml">
	<url>
		<loc>https://www.nhavantuonglai.com/english/page.html</loc>
	<!-– Starting with the news extension tags –->
		<news:news>
			<news:publication>
	<news:name>The Example Times</news:name>
	<news:language>en</news:language>
			</news:publication>
			<news:publication_date>2008-12-23</news:publication_date>
			<news:title>Companies A, B in Merger Talks</news:title>
		</news:news>
	<!-– Next we add video extension tags –->
		<video:video>
			<video:thumbnail_loc>https://www.nhavantuonglai.com/thumbs/123.jpg</video:thumbnail_loc>
			<video:title>Lizzi is painting the wall</video:title>
			<video:description>
	Gary is watching the paint dry on the wall Lizzi painted.
			</video:description>
			<video:player_loc>
	https://player.nhavantuonglai.com/video/987654321
			</video:player_loc>
		</video:video>
	<!-– And finally the xhtml tags for hreflang –->
		<xhtml:link
				 rel="alternate"
				 hreflang="de"
				 href="https://www.example.de/deutsch/page.html"/>
		<xhtml:link
				 rel="alternate"
				 hreflang="de-ch"
				 href="https://www.example.de/schweiz-deutsch/page.html"/>
		<xhtml:link
				 rel="alternate"
				 hreflang="en"
				 href="https://www.nhavantuonglai.com/english/page.html"/>
	</url>
	<!-– Add more <url> tags –->
```
{% endcode %}

Sau thẻ `<loc>`, thứ tự của phần mở rộng Sitemaps là không quan trọng. Hãy lưu ý [các phương pháp chung hay nhất về Sitemaps](https://www.nhavantuonglai.com/developer/cam-nang-toi-uu-seo-chuan-google-co-ban-tim-hieu-ve-sitemaps), đặc biệt là về giới hạn kích thước tệp. Việc kết hợp các phần mở rộng Sitemaps sẽ làm tăng đáng kể kích thước tệp của Sitemaps.\