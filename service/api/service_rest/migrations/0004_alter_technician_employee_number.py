# Generated by Django 4.0.3 on 2023-03-08 15:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0003_service_vip_alter_service_appointment_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='technician',
            name='employee_number',
            field=models.PositiveIntegerField(null=True, unique=True),
        ),
    ]
