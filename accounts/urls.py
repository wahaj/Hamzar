from django.urls import path
from . import views

urlpatterns = [
    path('api/user/', views.UserList.as_view()),
    path('api/user/<int:pk>', views.UserReadUpdateDelete.as_view()),
    path('auth/login', views.Login.as_view()),
]
