from django.db import models


class User(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Expense(models.Model):
    SPLIT_CHOICES = [
        ('equal', 'Equal'),
        ('custom', 'Custom'),
    ]

    description = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    paid_by = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='paid_expenses'
    )
    participants = models.ManyToManyField(User, related_name='expenses')
    split_type = models.CharField(max_length=10, choices=SPLIT_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.description


class ExpenseSplit(models.Model):
    expense = models.ForeignKey(
        Expense,
        on_delete=models.CASCADE,
        related_name='splits'
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount_owed = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.user.name} owes {self.amount_owed}"