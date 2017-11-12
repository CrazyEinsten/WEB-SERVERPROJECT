# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class VoteUsr(models.Model):
	IP = models.CharField(max_length = 30)
	
	def __str__(self):
		return self.IP


class PrettyGirl(models.Model):
	name = models.CharField(max_length = 30)
	ballot = models.IntegerField()

	def __str__(self):
		return self.name

