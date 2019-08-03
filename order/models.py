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
	name = models.CharField(max_length=255)
	user = models.ForeignKey(to=User, null=False, on_delete=models.CASCADE, related_name='order')
	status = models.CharField(max_length=2, choices=STATUSES, default=PENDING)

	def get_products(self):
		return self.units.all()

	class Meta:
		ordering = ['-created_at']


class OrderUnit(models.Model):
	order = models.ForeignKey(to=Order, on_delete=models.CASCADE, related_name='units')
	product = models.ForeignKey(to=Product, on_delete=models.CASCADE)
	quantity = models.PositiveIntegerField()
	unit_price = models.PositiveIntegerField()
