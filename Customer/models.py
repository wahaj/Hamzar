from django.db import models
from oscar.apps.customer.abstract_models import AbstractUser
# Create your models here.
from oscar.apps.address.models import UserAddress


class User(AbstractUser):
	pass

from oscar.apps.customer.models import *
