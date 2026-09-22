<?php
/**
 * 메일 SMTP 설정 예시
 *
 * 1) 이 파일을 config.mail.php 로 복사하세요.
 * 2) 아래 값을 실제 SMTP 계정으로 채우세요.
 * 3) config.mail.php 는 Git에 올리지 마세요. (.gitignore 포함)
 *
 * 네이버 메일 예시:
 *   Host: smtp.naver.com
 *   Port: 587
 *   Secure: tls
 *   User/Pass: 네이버 아이디@naver.com / 앱 비밀번호
 */
if (!defined('_GNUBOARD_')) {
    exit;
}

define('G5_SMTP', 'smtp.naver.com');
define('G5_SMTP_PORT', '587');
define('G5_SMTP_SECURE', 'tls');
define('G5_SMTP_USER', 'your-id@naver.com');
define('G5_SMTP_PASS', 'your-app-password');
