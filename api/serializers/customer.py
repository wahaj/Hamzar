from rest_framework import generics, serializers
from rest_framework import permissions
from oscarapi.serializers.utils import OscarHyperlinkedModelSerializer
from Customer.models import User


class UserSerializer(OscarHyperlinkedModelSerializer):
	class Meta:
		model = User

