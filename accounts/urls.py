from django.urls import path
from . import views

from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_jwt.views import refresh_jwt_token
from rest_framework_jwt.views import verify_jwt_token

urlpatterns = [
    path('auth/obtain_token', obtain_jwt_token),
    path('auth/refresh_token', refresh_jwt_token),
    path('auth/verify_token', verify_jwt_token),

    path('api/user/', views.UserListCreate.as_view()),
    path('api/user/<email>', views.UserReadUpdateDelete.as_view()),
]
