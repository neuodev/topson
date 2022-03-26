from django.db import DatabaseError
from django.conf import settings
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, LoginSerializer
import jwt
from .models import User

# Todo: Learn Serializer
# * 1. Stoped at Accessing the inital data
# Todo: Encrypt the password
# // Todo: Use JWT to login

class UserView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=400)
        try:
            serializer.save()
        except DatabaseError as error:
            print(error)
            return Response({'error': "User already exist!"}, status=500)
        return Response(status=200)

    def get(self, request, *args, **kwargs):
        return Response(status=401)

class Login(APIView):
    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=400)
        encoded_jwt = jwt.encode({ 'username': 'ahmed'}, settings.SECRET_KEY, algorithm='HS256')
        
        user = User.objects.filter(username=request.data['username']).first()
        serializer = UserSerializer(user)
        response = { 'token': encoded_jwt, **serializer.data }

        del response['password']
        return Response(response, status=200)
