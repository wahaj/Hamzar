from django.urls import path
from . import views

from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_jwt.views import refresh_jwt_token
from rest_framework_jwt.views import verify_jwt_token

urlpatterns = [
    path('api/auth/obtain_token', obtain_jwt_token),
    path('api/auth/refresh_token', refresh_jwt_token),
    path('api/auth/verify_token', verify_jwt_token),
    path('api/auth/user/', views.UserCreate.as_view()),

    path('api/user/<email>', views.UserReadUpdateDelete.as_view()),
]
