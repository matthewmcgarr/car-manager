# Generated by Django 4.0.3 on 2023-03-08 16:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0004_alter_technician_employee_number'),
    ]

    operations = [
        migrations.RenameField(
            model_name='service',
            old_name='tech',
            new_name='technician',
        ),
    ]
