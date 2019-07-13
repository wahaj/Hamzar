from django.shortcuts import render
from accounts.serializers import UserSerializer, SignupSerializer, ChangePasswordSerilizer, TokenSerializer
from accounts.models import User

from rest_framework import generics, status
from rest_framework import permissions
from rest_framework.response import Response

from rest_framework_jwt.settings import api_settings

# Create your views here.


class UserCreate (generics.CreateAPIView):
    permission_classes = (permissions.AllowAny,)

    queryset = User.objects.all()
    serializer_class = SignupSerializer
    pass


class UserReadUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get_object(self):
        obj = self.request.user
        return obj

    serializer_class = UserSerializer
    pass


class UserChangePassword(generics.UpdateAPIView):
    permission_classes = (permissions.AllowAny,)

    serializer_class = ChangePasswordSerilizer
    model = User

    def get_object(self):
        obj = self.request.user
        return obj

    def update(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            # Check old password
            if not self.object.check_password(serializer.data.get("old_password")):
                return Response({"old_password": ["Wrong password."]}, status=status.HTTP_400_BAD_REQUEST)
            # set_password also hashes the password that the user will get
            self.object.set_password(serializer.data.get("new_password"))
            self.object.save()
            return Response("Success.", status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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
