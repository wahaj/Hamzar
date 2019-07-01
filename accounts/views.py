from django.shortcuts import render
from accounts.serializers import UserSerializer, TokenSerializer, AuthUserSerializer
from accounts.models import User

from rest_framework import generics
from rest_framework.views import status
from rest_framework.response import Response

from django.contrib.auth.models import User as AuthUser
from django.contrib.auth import authenticate, login
from django.http import JsonResponse as Response

from rest_framework_jwt.settings import api_settings
from rest_framework import permissions


# Get the JWT settings, add these lines after the import/from lines
jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER


# Create your views here.


class UserCreate(generics.CreateAPIView):
    serializer_class = UserSerializer
    pass


class UserList(generics.ListCreateAPIView):
    #permission_classes = (permissions.AllowAny,)

    queryset = User.objects.all()
    serializer_class = UserSerializer
    pass


class UserReadUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    pass


class Login(generics.CreateAPIView):
    """
    POST auth/login/
    """
    permission_classes = (permissions.AllowAny,)
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        username = request.data.get("username", "")
        password = request.data.get("password", "")
        user = authenticate(request, username=username, password=password)

        if user is not None:
        # login saves the user's ID in the session,
            login(request, user)
            serializer = TokenSerializer(data={
                "token": jwt_encode_handler(
                    jwt_payload_handler(user)
                )
            })
            serializer.is_valid()
            return Response(serializer.data)
        return Response(status=status.HTTP_401_UNAUTHORIZED)