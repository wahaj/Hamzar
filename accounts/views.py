from django.shortcuts import render
from accounts.serializers import UserSerializer
from accounts.models import User

from rest_framework import generics
from rest_framework.views import status
from rest_framework.response import Response

from django.contrib.auth import authenticate, login
from django.http import Http404

from rest_framework_jwt.settings import api_settings
from rest_framework import permissions

# Create your views here.


class UserListCreate (generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny,)
    #permission_classes = (permissions.IsAdminUser,)

    queryset = User.objects.all()
    serializer_class = UserSerializer
    pass


class UserReadUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    pass


# class Login(generics.CreateAPIView):
#     """
#     POST auth/login/
#     """
#     permission_classes = (permissions.AllowAny,)
#     queryset = User.objects.all()
#     serializer_class = UserLoginSerializer
#
#     def post(self, request, *args, **kwargs):
#         email = request.data.get("email", "")
#         password = request.data.get("password", "")
#         user = authenticate(request, email=email, password=password)
#
#         if user is not None:
#             # login saves the user's ID in the session,
#             login(request, user)
#             serializer = TokenSerializer(data={
#                 "token": jwt_encode_handler(
#                     jwt_payload_handler(user)
#                 )
#             })
#             if serializer.is_valid():
#                 return Response(serializer.data)
#             return Response(serializer.errors)
#         # raise 404
#         return Response(status=status.HTTP_404_NOT_FOUND)
