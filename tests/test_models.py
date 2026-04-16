# tests/test_models.py
from django.test import TestCase
from django.contrib.auth import get_user_model

from blog.models import Post


class PostModelTest(TestCase):
    def test_str_returns_title(self):
        User = get_user_model()
        user = User.objects.create_user(
            username="testuser",
            password="pass1234",
        )

        post = Post.objects.create(
            title="My title",
            content="My content",
            author=user,
        )

        self.assertEqual(str(post), "My title")