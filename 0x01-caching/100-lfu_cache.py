#!/usr/bin/env python3
""" LFUCache module """


from base_caching import BaseCaching


class LFUCache(BaseCaching):
    """ LFUCache inherits from:
      - BaseCaching and is a caching system that uses LFU
    """

    def __init__(self):
        """ Initialize the LFU cache """
        super().__init__()
        self.frequency = {}
        self.order = []

    def put(self, key, item):
        """ Add an item in the cache """
        if key is None or item is None:
            return

        if key in self.cache_data:
            self.frequency[key] += 1
            self.order.remove(key)
        elif len(self.cache_data) >= self.MAX_ITEMS:
            lfu_key = min(self.frequency, key=self.frequency.get)
            candidates = [
                k for k in self.cache_data
                if self.frequency[k] == self.frequency[lfu_key]
            ]
            if len(candidates) > 1:
                lfu_key = candidates[0]
            print(f"DISCARD: {lfu_key}")
            del self.cache_data[lfu_key]
            del self.frequency[lfu_key]
            self.order.remove(lfu_key)

        self.cache_data[key] = item
        self.frequency[key] = self.frequency.get(key, 0) + 1
        self.order.append(key)

    def get(self, key):
        """ Get an item by key """
        if key in self.cache_data:
            self.frequency[key] += 1
            self.order.remove(key)
            self.order.append(key)
            return self.cache_data[key]
        return None
