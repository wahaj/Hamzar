from django.db import models
from django.template.defaultfilters import slugify
from django.core.files.uploadedfile import InMemoryUploadedFile
from PIL import Image
from io import BytesIO
import sys
import os


def get_image_path(instance, filename):
	return os.path.join('photos/products', str(instance.slug), filename)

# class Product(models.Model):
# 	title = models.CharField(max_length=255)
# 	author = models.CharField(max_length=50)
# 	slug = models.SlugField(max_length=255,unique=True)
# 	product_image = models.ImageField(upload_to= get_image_path, blank=True, null=True)
# 	description = models.TextField()

# 	class Meta:
# 		ordering = ['title']

# 	def __str__(self):
# 		return self.title


# 	def save(self, *args, **kwargs):
# 		self.slug = slugify(self.title)
		
# 		im = Image.open(self.product_image)
# 		output = BytesIO()

# 		# Resize/modify the image

# 		im = im.resize((250, 250))

# 		# After modifications, save it to the output

# 		im.save(output, format='JPEG', quality=100)

# 		output.seek(0)

# 		# Change the imagefield value to be the newly modified image value

# 		self.product_image = InMemoryUploadedFile(output, 'ImageField', "%s.jpg" % self.product_image.name.split('.')[0], 'image/jpeg', sys.getsizeof(output), None)
# 		super(Product, self).save(*args, **kwargs)


class Product(models.Model):
	title = models.CharField(max_length=255)
	author = models.CharField(max_length=50)
	slug = models.SlugField(max_length=255,unique=True)
	description = models.TextField()

	class Meta:
		ordering = ['title']

	def __str__(self):
		return self.title


	def save(self, *args, **kwargs):
		self.slug = slugify(self.title)
		super(Product, self).save(*args, **kwargs)

class ProductImage(models.Model):

	product=models.ForeignKey(Product, related_name='images', on_delete=models.CASCADE)
	product_image = models.ImageField(upload_to= get_image_path, blank=True, null=True)
	
	def save(self, *args, **kwargs):
		
		im = Image.open(self.product_image)
		output = BytesIO()

		# Resize/modify the image

		im = im.resize((250, 250))

		# After modifications, save it to the output

		im.save(output, format='JPEG', quality=100)

		output.seek(0)

		# Change the imagefield value to be the newly modified image value

		self.product_image = InMemoryUploadedFile(output, 'ImageField', "%s.jpg" % self.product_image.name.split('.')[0], 'image/jpeg', sys.getsizeof(output), None)
		super(ProductImage, self).save(*args, **kwargs)


	
