from django.urls import path
from .views import ArticleListView, ArticleDetailView

app_name = 'blog'

urlpatterns = [
    path('<int:pk>', ArticleDetailView.as_view(), name='blog'),
    path('', ArticleListView.as_view()),
]
