from django.views.generic.detail import DetailView
from django.views.generic.list import ListView
from django.http import JsonResponse 
from blog.models import Post 


class ArticleDetailView(DetailView):
    model = Post
    template_name = 'postdetailview_detail.html'
    
class ArticleListView(ListView):
    model = Post
    template_name = 'postlistview_detail.html'
    
def post_list(response):
    posts_queryset = Post.objects.values('id', 'title', 'content', 'created_at')
    data_list = list(posts_queryset)
    nazwa_tabeli = Post._meta.db_table
    
    dane_do_zwrotu = {
        'tabela': nazwa_tabeli,    
        'posty': data_list        
    }
    
    return JsonResponse(dane_do_zwrotu,safe=False)
