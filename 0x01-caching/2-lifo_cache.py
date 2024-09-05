#!/usr/bin/env python3
""" LIFOCache module """

from base_caching import BaseCaching


class LIFOCache(BaseCaching):
    """ LIFOCache inherits from:
      - BaseCaching and is a caching system that uses LIFO
    """

    def __init__(self):
        """ Initialize the LIFO cache """
        super().__init__()
        self.order = []

    def put(self, key, item):
        """ Add an item in the cache """
        if key is None or item is None:
            return

        if len(self.cache_data) >= self.MAX_ITEMS:
            last_key = self.order.pop()
            print(f"DISCARD: {last_key}")
            del self.cache_data[last_key]

        if key in self.cache_data:
            self.order.remove(key)
        self.order.append(key)
        self.cache_data[key] = item

    def get(self, key):
        """ Get an item by key """
        return self.cache_data.get(key, None)
