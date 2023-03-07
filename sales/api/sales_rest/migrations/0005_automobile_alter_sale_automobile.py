# Generated by Django 4.0.3 on 2023-03-07 18:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0004_alter_sale_automobile_delete_automobile'),
    ]

    operations = [
        migrations.CreateModel(
            name='Automobile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('make', models.CharField(max_length=255)),
                ('model', models.CharField(max_length=255)),
                ('year', models.IntegerField()),
                ('vin', models.CharField(max_length=17, unique=True)),
            ],
        ),
        migrations.AlterField(
            model_name='sale',
            name='automobile',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sales_rest.automobile'),
        ),
    ]
