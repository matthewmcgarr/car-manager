# Generated by Django 4.0.3 on 2023-03-06 23:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sale',
            name='automobile',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sales_rest.automobile'),
        ),
        migrations.AlterField(
            model_name='sale',
            name='customer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sales_rest.customer'),
        ),
        migrations.AlterField(
            model_name='sale',
            name='sales_person',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sales_rest.salesperson'),
        ),
    ]
