# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

def birthday(request):
    return render(request, 'birthday/birthday.html')

# Create your views here.
