CREATE TABLE wp_tn7w0z1kkf_posts (
  ID bigint(20) UNSIGNED NOT NULL,
  post_author bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  post_date datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  post_date_gmt datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  post_content longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  post_title text COLLATE utf8mb4_unicode_ci NOT NULL,
  post_excerpt text COLLATE utf8mb4_unicode_ci NOT NULL,
  post_status varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'publish',
  comment_status varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'open',
  ping_status varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'open',
  post_password varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  post_name varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  to_ping text COLLATE utf8mb4_unicode_ci NOT NULL,
  pinged text COLLATE utf8mb4_unicode_ci NOT NULL,
  post_modified datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  post_modified_gmt datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  post_content_filtered longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  post_parent bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  guid varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  menu_order int(11) NOT NULL DEFAULT '0',
  post_type varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'post',
  post_mime_type varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  comment_count bigint(20) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wp_tn7w0z1kkf_posts`
--
SELECT * FROM wp_tn7w0z1kkf_posts;