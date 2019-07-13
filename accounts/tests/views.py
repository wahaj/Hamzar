from django.urls import reverse
from django.http.request import HttpRequest as request

from rest_framework import status
from rest_framework.test import APITestCase, URLPatternsTestCase

from accounts.models import User


class UserTests(APITestCase):

    def setUp(self):
        User.objects.create_user(email='test@test.com', password='testtest', first_name='Major', last_name='Tester')

    def test_user_create(self):
        data = {
            "email": "test@gmail.com",
            "password": "testtest",
            "phone_number": "+923012308188",
            "address": "Al Balushi Street"
        }
        response = self.client.post(reverse('signup'), data=data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_user_login(self):
        data = {"email": "test@test.com", "password": "testtest"}
        response = self.client.post(reverse('login'), data=data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue('token' in response.data)

    def test_user_read(self):
        user = User.objects.get(email='test@test.com')
        self.client.force_authenticate(user=user)
        response = self.client.get(reverse('user_details'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['email'], user.email)

    def test_user_update(self):
        user = User.objects.get(email='test@test.com')
        self.client.force_authenticate(user=user)
        response = self.client.patch(reverse('user_details'), {"first_name": "AlBalush"}, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual('AlBalush', User.objects.get(email='test@test.com').first_name)

    def test_user_delete(self):
        user = User.objects.get(email='test@test.com')
        self.client.force_authenticate(user=user)
        response = self.client.delete(reverse('user_details'))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        with self.assertRaises(User.DoesNotExist):
            User.objects.get(email='test@test.com')
