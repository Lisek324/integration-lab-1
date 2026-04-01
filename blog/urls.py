from django.urls import path
from .views import ArticleListView, ArticleDetailView, post_list

app_name = 'blog'

urlpatterns = [
    path('<int:pk>', ArticleDetailView.as_view(), name='blog'),
    path('', ArticleListView.as_view()),
    path('json/', post_list, name='post_list')
]
