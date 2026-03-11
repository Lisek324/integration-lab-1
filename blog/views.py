from django.utils import timezone
from django.views.generic.detail import DetailView
from django.views.generic.list import ListView

from blog.models import Post 

class ArticleDetailView(DetailView):
    model = Post
    template_name = 'postdetailview_detail.html'
    
class ArticleListView(ListView):
    model = Post
    template_name = 'postlistview_detail.html'
    

