from datetime import datetime
from django.shortcuts import render
from idna import valid_contextj
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer
import io 
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer

# Todo: Learn Serializer
# * 1. Stoped at Accessing the inital data

class UserView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=404)
        return Response(serializer.validated_data, status=404)

    def get(self, request, *args, **kwargs):
        return Response(status=401)