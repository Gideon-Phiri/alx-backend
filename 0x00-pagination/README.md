### **Project Title: Pagination for RESTful APIs**

---

### **Project Description**
This project focuses on implementing efficient pagination techniques in a RESTful API. Pagination is essential for handling large datasets by dividing them into manageable pages, which can be navigated easily. The project covers various aspects of pagination, including simple pagination, hypermedia pagination, and deletion-resilient pagination, using Python 3.7.

---

### **Learning Objectives**
By the end of this project, you will be able to:
- Implement pagination using simple `page` and `page_size` parameters.
- Use hypermedia pagination to provide additional metadata for navigation.
- Design a pagination system that is resilient to data deletions between requests.

---

### **Technologies Used**
- **Language**: Python 3.7
- **Framework**: None (Standard Python libraries)
- **Tools**: CSV for dataset handling
- **OS**: Ubuntu 18.04 LTS

---

### **Project Structure**
```plaintext
0x00-pagination/
│
├── 0-simple_helper_function.py  # Helper function to calculate pagination indices
├── 1-simple_pagination.py       # Basic pagination implementation
├── 2-hypermedia_pagination.py   # Pagination with hypermedia metadata
├── 3-hypermedia_del_pagination.py # Deletion-resilient pagination implementation
├── Popular_Baby_Names.csv       # Dataset used for pagination
├── README.md                    # Project documentation (you are here)
└── main.py                      # Test files for each task
```

---

### **Installation**
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Gideon-Phiri/alx-backend.git
   cd 0x00-pagination
   ```
2. **Ensure Python 3.7 is installed**:
   ```bash
   python3 --version
   ```
   The version should be 3.7.

3. **Run test scripts**:
   Each task can be tested individually by running the respective main files (not provided in the repo, you can create your own), e.g.,
   ```bash
   ./0-main.py
   ./1-main.py
   ```

---

### **Tasks Breakdown**

#### **Task 0: Simple Helper Function**
- **File**: `0-simple_helper_function.py`
- **Description**: A function `index_range` that takes `page` and `page_size` as input and returns the start and end index for the dataset slice.

#### **Task 1: Simple Pagination**
- **File**: `1-simple_pagination.py`
- **Description**: Implements basic pagination by returning a specific page of the dataset based on `page` and `page_size`.

#### **Task 2: Hypermedia Pagination**
- **File**: `2-hypermedia_pagination.py`
- **Description**: Extends simple pagination to include additional metadata, such as total pages, next and previous page numbers, for better navigation.

#### **Task 3: Deletion-Resilient Pagination**
- **File**: `3-hypermedia_del_pagination.py`
- **Description**: Handles cases where rows are deleted from the dataset, ensuring that users do not miss any data when navigating pages.

---

### **How to Use**
- **Pagination**: Import the `Server` class and use the `get_page`, `get_hyper`, or `get_hyper_index` methods to paginate datasets.
- **Testing**: Test the functions using provided `main.py` scripts or create custom tests to verify behavior with different datasets.

---

### **Code Style**
- Adheres to **PEP 8** style guidelines.
- Type annotations are used for all functions and methods.

---

### **Acknowledgements**
- **ALX** for providing the project framework and dataset.
- **Python** community for the tools and libraries used.

---

### **Contact**
- **Author**: [Gideon Phiri]
- **Email**: gideonphiri032@gmail.com
- **GitHub**: [Gideon-Phiri](https://github.com/Gideon-Phiri)

---
