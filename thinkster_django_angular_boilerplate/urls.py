from django.conf.urls import patterns, url

from thinkster_django_angular_boilerplate.views import IndexView

from rest_framework_nested import routers

from authentication.views import AccountViewSet


router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)

urlpatterns = patterns(
    '',
    url('^.*$', IndexView.as_view(), name='index'),
    url(r'^api/v1/', include(router.urls)),
    url(r'^', TemplateView.as_view(template_name='index.html')),
)
