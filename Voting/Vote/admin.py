# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from .models import *
# Register your models here.

class PrettyGirlAdmin(admin.ModelAdmin):
    list_dispaly = ('name','ballot',)

admin.site.register(PrettyGirl,PrettyGirlAdmin)

