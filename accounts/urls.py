from django.urls import path
from . import views

from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_jwt.views import refresh_jwt_token
from rest_framework_jwt.views import verify_jwt_token

urlpatterns = [
    # Token Refresh and Validation
    path('api/auth/refresh_token', refresh_jwt_token, name="refresh_token"),
    path('api/auth/verify_token', verify_jwt_token, name="verify_token"),

    # Login and signup auth pages
    path('api/auth/login', obtain_jwt_token, name="login"),
    path('api/auth/signup', views.UserCreate.as_view(), name="signup"),

    path('api/auth/change_password', views.UserChangePassword.as_view(), name="change_password"),

    # User Details
    path('api/user', views.UserReadUpdateDelete.as_view(), name="user_details"),
]
