from rest_framework import serializers
from accounts.models import User


class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = (
			'id', 'email', 'phone_number', 'first_name', 'last_name', 'is_active', 'is_staff',
			'last_login', 'date_joined'
		)
		pass
	pass


class ChangePasswordSerilizer(serializers.Serializer):
	old_password = serializers.CharField(required=True)
	new_password = serializers.CharField(required=True)

	class Meta:
		model = User
		

class SignupSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = (
			'email', 'password', 'phone_number', 'address'
		)
		pass
	pass


class TokenSerializer(serializers.Serializer):
	"""
	This serializer serializes the token data
	"""
	token = serializers.CharField(max_length=255)
	pass

