# Caching System Project

## Overview
This project explores the implementation of various caching algorithms in Pytthon. It involves designing a caching system, managing cache replacement policies, and handling situations where cache limits are exceeded. The project covers algorithms like **FIFO**, **LIFO**, **LRU**, **MRU**, and **LFU**, demonstrating how to efficiently store and retrieve data using different caching strategies.

---

## Learning Objectives

- Explaining what a caching system is and its purpose.
- Understanding and implementing different cache replacement policies:
  - **FIFO** (First In, First Out)
  - **LIFO** (Last In, First Out)
  - **LRU** (Least Recently Used)
  - **MRU** (Most Recently Used)
  - **LFU** (Least Frequently Used)
- Recognizing the limitations of a caching system, including capacity constraints and eviction strategies.

---

## Project Requirements
- **Python version**: `3.7`
- **Operating system**: Ubuntu `18.04 LTS`
- **Pycodestyle** guidelines (`version 2.5`).
- Each Python file ends with a new line.
- Documentation of All classes and functions.
- All files are executable.

---

## How to Run
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Gideon-Phiri/alx-backend.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd alx-backend/0x01-caching
   ```
3. **Run the test scripts** for each caching system:
   ```bash
   ./0-main.py    # Test for BasicCache
   ./1-main.py    # Test for FIFOCache
   ./2-main.py    # Test for LIFOCache
   ./3-main.py    # Test for LRUCache
   ./4-main.py    # Test for MRUCache
   ./100-main.py  # Test for LFUCache
   ```

---

## Project Structure

```bash
.
├── base_caching.py      # Parent class with basic caching structure and methods
├── 0-basic_cache.py     # Implementation of a basic cache with no limits
├── 1-fifo_cache.py      # Implementation of FIFO caching
├── 2-lifo_cache.py      # Implementation of LIFO caching
├── 3-lru_cache.py       # Implementation of LRU caching
├── 4-mru_cache.py       # Implementation of MRU caching
├── 100-lfu_cache.py     # Implementation of LFU caching
├── 0-main.py            # Test file for BasicCache
├── 1-main.py            # Test file for FIFOCache
├── 2-main.py            # Test file for LIFOCache
├── 3-main.py            # Test file for LRUCache
├── 4-main.py            # Test file for MRUCache
├── 100-main.py          # Test file for LFUCache
└── README.md            # Project documentation
```

---

## Cache Replacement Algorithms

### 1. **BasicCache**
- This caching system has **no limit** on the number of items. Items are simply added to the cache without any eviction policy.

### 2. **FIFOCache (First In, First Out)**
- Items are stored in the cache, and when the limit (`MAX_ITEMS`) is reached, the oldest item (the first one inserted) is removed.

### 3. **LIFOCache (Last In, First Out)**
- Similar to FIFO, but instead of removing the oldest item, the most recently added item is removed when the cache is full.

### 4. **LRUCache (Least Recently Used)**
- This policy removes the least recently accessed item when the cache reaches its limit.

### 5. **MRUCache (Most Recently Used)**
- The most recently accessed item is removed when the cache is full, instead of the least recently accessed.

### 6. **LFUCache (Least Frequently Used)**
- The item that has been accessed the fewest number of times is removed when the cache is full. If two or more items have the same access frequency, the Least Recently Used (LRU) item is evicted.

---

## Usage Examples

### BasicCache

```python
my_cache = BasicCache()
my_cache.put("A", "Hello")
my_cache.put("B", "World")
print(my_cache.get("A"))  # Output: Hello
print(my_cache.get("C"))  # Output: None
```

### FIFOCache

```python
my_cache = FIFOCache()
my_cache.put("A", "Hello")
my_cache.put("B", "World")
my_cache.put("C", "Holberton")
my_cache.put("D", "School")
my_cache.put("E", "Battery")  # Triggers DISCARD: A
```

---

## Testing
Each cache implementation comes with a corresponding test script:
- For **BasicCache**, run `./0-main.py`.
- For **FIFOCache**, run `./1-main.py`.
- Continue similarly for the other tasks.

---

## Author
**Gideon Phiri**  
[GitHub](https://github.com/Gideon-Phiri)

---

## License
This project is licensed under the MIT License.

---

## Feedback
If you have any questions or suggestions, feel free to open an issue in the repository or contact me at gideonphiri032@gmail.com.
