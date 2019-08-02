from django.db import models

from product.models import Product
from accounts.models import User
# Create your models here.


class Order(models.Model):
	PENDING = 'PE'
	REJECTED = 'RE'
	COMPLETED = 'CO'
	STATUSES = (
		(PENDING, 'Pending'),
		(REJECTED, 'Rejected'),
		(COMPLETED, 'Completed'),
	)

	created_at = models.DateTimeField(auto_now_add=True)
	product_set = models.ManyToManyField(to=Product, through='OrderUnit')
	user = models.ForeignKey(to=User, null=True, on_delete=models.SET_NULL)
	status = models.CharField(max_length=2, choices=STATUSES, default=PENDING)


	class Meta:
		ordering = ['-created_at']


class OrderUnit(models.Model):
	order = models.ForeignKey(to=Order, on_delete=models.CASCADE)
	product = models.ForeignKey(to=Product, on_delete=models.SET_NULL)
	quantity = models.PositiveIntegerField()
	unit_price = models.PositiveIntegerField()
