from django.contrib import admin

from order.models import Order, OrderUnit
# Register your models here.


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
	fieldsets = (
		(None, {
			'fields': ('user', 'status', 'get_products'),
		}),
	)
	add_fieldsets = (
		(None, {
			'fields': ('user', 'units', 'get_products', 'status'),
		}),
	)
	list_display = ('user', 'name', 'get_products', 'status')


admin.site.register(OrderUnit)
