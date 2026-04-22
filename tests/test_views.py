# tests/test_views.py
from django.test import TestCase


class TestBlogPage(TestCase):
    def test_blog_page_status_code(self):
        response = self.client.get('/blog/')
        self.assertEqual(response.status_code, 200)