from django.db import models
from django.template.defaultfilters import slugify


class Product(models.Model):
    #tag_set = models.ManyToManyField(to=Tag)
    #seller = models.ForeignKey(to=Seller, on_delete=models.CASCADE)
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
