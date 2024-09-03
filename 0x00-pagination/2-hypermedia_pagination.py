#!/usr/bin/env python3
import math


class Server:
    # Previous implementation remains the same...

    def get_hyper(self, page: int = 1, page_size: int = 10) -> dict:
        """Provide pagination with hypermedia metadata."""
        data = self.get_page(page, page_size)
        total_items = len(self.dataset())
        total_pages = math.ceil(total_items / page_size)

        return {
            'page_size': len(data),
            'page': page,
            'data': data,
            'next_page': page + 1 if page < total_pages else None,
            'prev_page': page - 1 if page > 1 else None,
            'total_pages': total_pages,
        }
