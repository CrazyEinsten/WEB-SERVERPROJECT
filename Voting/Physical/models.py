# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Usr(models.Model):
    name = models.CharField(max_length = 30, null = True)
    passwd = models.CharField(max_length = 30, null = True)
    mark = models.IntegerField()
    isPre = models.IntegerField()
