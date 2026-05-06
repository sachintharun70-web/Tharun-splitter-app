from rest_framework import serializers
from .models import User, Expense, ExpenseSplit


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class ExpenseSplitSerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(source='user.name', read_only=True)

    class Meta:
        model = ExpenseSplit
        fields = '__all__'


class ExpenseSerializer(serializers.ModelSerializer):
    participants = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=User.objects.all()
    )
    splits = ExpenseSplitSerializer(many=True, read_only=True)

    class Meta:
        model = Expense
        fields = '__all__'

    def create(self, validated_data):
        participants = validated_data.pop('participants', [])

        expense = Expense.objects.create(**validated_data)
        expense.participants.set(participants)

        if expense.split_type == 'equal':
            total_people = len(participants)

            if total_people > 0:
                split_amount = expense.amount / total_people

                for user in participants:
                    ExpenseSplit.objects.create(
                        expense=expense,
                        user=user,
                        amount_owed=split_amount
                    )

        return expense