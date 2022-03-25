from datetime import datetime
from rest_framework import serializers
from .models import User
import re

password_regex = [
    {
        're': r"(?=.*[A-Z]).{8,}$",
        'message': 'Password should contain 8 characters or more'
    },
    {
        're': r"(?=.*[A-Z]).{8,}$",
        'message': 'Password should contain at least one uppercase'
    },
    {
        're': r"(?=.*[a-z]).{8,}$",
        'message': 'Password should contain at least one lower case'
    },
    {
        're': r"(?=.*?[0-9]).{8,}$",
        'message': 'Password should contain at least one digit'
    },
    {
        're': r"(?=.*?[!@#\$&*~]).{8,}$",
        'message': 'Password should contain at least one Special character'
    },
]

class UserSerializer(serializers.ModelSerializer):
    
    email = serializers.EmailField()
    username = serializers.CharField(min_length=4)
    first_name = serializers.CharField(min_length=3)
    last_name = serializers.CharField(min_length=3)

    def validate_password(self, value):
        for pass_re in password_regex:
            match = re.match(pass_re['re'], value)
            if not match:
                raise serializers.ValidationError(pass_re['message'])
        return value
    
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'password', 'is_active', 'first_name', 'last_name']
    
    def create(self, validated_data):
        validated_data['last_login'] = datetime.now()
        # Check for exising user
        user = User.objects.create(**validated_data)

        return user