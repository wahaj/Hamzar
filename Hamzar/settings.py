"""
Django settings for Hamzar project.

"""

import os

from oscar import get_core_apps, OSCAR_MAIN_TEMPLATE_DIR
from oscar.defaults import *

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'db82s+s5+qa#k5ot&ft3=!^y5al3)_*%!2y77u!eu65wi!((&4'

# SECURITY WARNING: don't run with debug turned on in production!

ALLOWED_HOSTS = [
	'localhost',
	'*'
]

# Application definition

INSTALLED_APPS = [
	                 'django.contrib.admin',
	                 'django.contrib.auth',
	                 'django.contrib.contenttypes',
	                 'django.contrib.sessions',
	                 'django.contrib.sites',
	                 'django.contrib.messages',
	                 'django.contrib.staticfiles',
	                 'django.contrib.flatpages',

	                 'rest_framework',
	                 'oscarapi',
	                 'widget_tweaks',
	                 'rest_registration',
	                 'corsheaders',

	                 'Customer',
                 ] + get_core_apps()

OSCARAPI_BLOCK_ADMIN_API_ACCESS = False
OSCAR_DEFAULT_CURRENCY = 'Rs.'

SITE_ID = 1

MIDDLEWARE = [
	'django.middleware.security.SecurityMiddleware',
	'django.contrib.sessions.middleware.SessionMiddleware',
	'django.middleware.common.CommonMiddleware',
	'django.middleware.csrf.CsrfViewMiddleware',
	'django.contrib.auth.middleware.AuthenticationMiddleware',
	'django.contrib.messages.middleware.MessageMiddleware',
	'django.middleware.clickjacking.XFrameOptionsMiddleware',
	'corsheaders.middleware.CorsMiddleware',

	'oscar.apps.basket.middleware.BasketMiddleware',
	'django.contrib.flatpages.middleware.FlatpageFallbackMiddleware',
]

ROOT_URLCONF = 'Hamzar.urls'

TEMPLATES = [
	{
		'BACKEND': 'django.template.backends.django.DjangoTemplates',
		'DIRS': [
			os.path.join(BASE_DIR, 'templates'),
			OSCAR_MAIN_TEMPLATE_DIR
		],
		'APP_DIRS': True,
		'OPTIONS': {
			'context_processors': [
				'django.template.context_processors.debug',
				'django.template.context_processors.request',
				'django.contrib.auth.context_processors.auth',
				'django.contrib.messages.context_processors.messages',

				'oscar.apps.search.context_processors.search_form',
				'oscar.apps.promotions.context_processors.promotions',
				'oscar.apps.checkout.context_processors.checkout',
				'oscar.apps.customer.notifications.context_processors.notifications',
				'oscar.core.context_processors.metadata',
			],
		},
	},
]

AUTHENTICATION_BACKENDS = (
	'oscar.apps.customer.auth_backends.EmailBackend',
	'django.contrib.auth.backends.ModelBackend',
)

WSGI_APPLICATION = 'Hamzar.wsgi.application'

# Search Engine



HAYSTACK_CONNECTIONS = {
	'default': {
		'ENGINE': 'haystack.backends.solr_backend.SolrEngine',
		'URL': 'http://127.0.0.1:8983/solr/hamzar',
		'ADMIN_URL': 'http://127.0.0.1:8983/solr/admin/cores',
		'INCLUDE_SPELLING': True,
	},
}

# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases

if os.getenv('GAE_APPLICATION', None):
	DATABASES = {
		'default': {
			'ENGINE': 'django.db.backends.postgresql',
			'NAME': os.environ.get('POSTGRES_DB','hamzar'),
			'USER': os.environ.get('POSTGRES_USER','hamzar'),
			'PASSWORD': os.environ.get('POSTGRES_PASSWORD', '0214'),
			'HOST': 'localhost',
			'PORT': '5432',
			'ATOMIC_REQUESTS': True,
		}
	}
else:
	DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
			'NAME': os.environ.get('POSTGRES_DB','hamzar'),
			'USER': os.environ.get('POSTGRES_USER','hamzar'),
			'PASSWORD': os.environ.get('POSTGRES_PASSWORD', '0214'),
			'HOST': 'localhost',
			'PORT': '5432',
			'ATOMIC_REQUESTS': True,
        }
    }

# Password validation
# https://docs.djangoproject.com/en/2.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
	{
		'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
	},
	{
		'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
	},
	{
		'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
	},
	{
		'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
	},
]

AUTH_USER_MODEL = "Customer.User"

# Internationalization
# https://docs.djangoproject.com/en/2.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Email Confirmation

EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'youremail@gmail.com'
EMAIL_HOST_PASSWORD = 'yourpassword'
EMAIL_PORT = 587

# Front-end URLS
#
# REST_FRAMEWORK = {
# 	'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.LimitOffsetPagination',
# 	'PAGE_SIZE': 100
# }


REST_REGISTRATION = {
	'REGISTER_VERIFICATION_ENABLED': False,
	'REGISTER_EMAIL_VERIFICATION_ENABLED': False,
	'RESET_PASSWORD_VERIFICATION_ENABLED': False,
	'REGISTER_EMAIL_VERIFICATION_URL': 'https://frontend-host/verify-email/',

	'VERIFICATION_FROM_EMAIL': 'wahajaved@protonmail.com',
}

SESSION_COOKIE_SAMESITE = None
CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = True

OSCARAPI_OVERRIDE_MODULES = ["Hamzar.api"]
OSCARAPI_PRODUCT_FIELDS = ["url", "id", "upc", "title", "images"]
OSCARAPI_PRODUCTDETAIL_FIELDS = ["parent", "url", "upc", "id", "title", "description", "structure",
									"recommended_products", "attributes", "categories", "product_class", "images",
									"price", "availability", "children", "reviews"]


# Static files (CSS, JavaScript, Images)

def location(x):
	return os.path.join(os.path.curdir, x)


STATIC_URL = 'https://storage.googleapis.com/hamzar/static/'
STATIC_ROOT = ''

REACT_APP_DIR = os.path.join(BASE_DIR,'frontend');
STATICFILES_DIRS = [
        os.path.join(REACT_APP_DIR, 'build', 'static'),
        ]
# Media files (Model Images etc)
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')



