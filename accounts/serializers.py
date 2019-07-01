from rest_framework import serializers
from accounts.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'email', 'phone_number', 'password', 'first_name', 'last_name', 'is_active', 'is_staff', 'is_superuser',
            'last_login', 'date_joined'
        )


class UserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'email', 'password'
        )

#
# class TokenSerializer(serializers.Serializer):
#     """
#     This serializer serializes the token data
#     """
#     token = serializers.CharField(max_length=255)
#     pass
#
