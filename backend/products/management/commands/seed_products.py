import json
from decimal import Decimal
from pathlib import Path

from django.core.management.base import BaseCommand
from products.models import Products


class Command(BaseCommand):
    help = "Import sample products from products.json"

    def handle(self, *args, **options):
        file_path = (
            Path(__file__).resolve().parents[2]
            / "data"
            / "products.json"
        )

        with file_path.open(encoding="utf-8") as file:
            products = json.load(file)

        for item in products:
            Products.objects.update_or_create(
                id=item["id"],
                defaults={
                    "name": item["title"],
                    "description": item["description"],
                    "price": Decimal(str(item["price"])),
                    "thumbnail": item["thumbnail"],
                },
            )

        self.stdout.write(
            self.style.SUCCESS(
                f"Seeded {len(products)} products."
            )
        )