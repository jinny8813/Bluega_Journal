from .base import *

DEBUG = True
ALLOWED_HOSTS = [
    'dev.bluegajournal.com',
    'localhost',
    '127.0.0.1',
    '3.24.138.130',
    'dev.bluegajournal.com:8081',  # 添加帶端口的域名
]

# CORS 設置
CORS_ALLOWED_ORIGINS = [
    "http://dev.bluegajournal.com:8081",
    "http://localhost:8081",
    "http://3.24.138.130:8081",
]

CORS_ALLOW_CREDENTIALS = True
CORS_ALLOW_ALL_ORIGINS = True  # 開發環境可以允許所有來源

# 靜態文件設置
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATIC_URL = '/static/'

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'

# 數據庫設置
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.environ.get('DB_NAME', 'bluega_journal_dev'),
        'USER': os.environ.get('DB_USER', 'postgres'),
        'PASSWORD': os.environ.get('DB_PASSWORD', 'postgres'),
        'HOST': os.environ.get('DB_HOST', 'db'),
        'PORT': os.environ.get('DB_PORT', '5432'),
    }
}

# 安全設置
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
SESSION_COOKIE_SECURE = False
CSRF_COOKIE_SECURE = False
CSRF_TRUSTED_ORIGINS = [
    "http://dev.bluegajournal.com:8081",
    "http://localhost:8081",
    "http://3.24.138.130:8081",
]

# 日誌設置
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
        },
        'file': {
            'class': 'logging.FileHandler',
            'filename': 'debug.log',
        },
    },
    'loggers': {
        'django': {
            'handlers': ['console', 'file'],
            'level': 'DEBUG',  # 開發環境使用 DEBUG 級別
        },
        'django.db.backends': {
            'handlers': ['console'],
            'level': 'DEBUG',
        },
    },
}