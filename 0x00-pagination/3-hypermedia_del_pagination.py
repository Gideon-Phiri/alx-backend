#!/usr/bin/env python3
from typing import Dict


class Server:
    # Previous implementation remains the same...

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by position."""
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {i: dataset[i] for i in range(len(dataset))}
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """Get dataset page, considering potential deletions."""
        assert index is not None and 0 <= index < len(self.indexed_dataset())

        data = []
        next_index = index
        indexed_data = self.indexed_dataset()

        for i in range(page_size):
            if next_index in indexed_data:
                data.append(indexed_data[next_index])
            next_index += 1

        return {
            'index': index,
            'next_index': next_index,
            'page_size': len(data),
            'data': data,
        }

