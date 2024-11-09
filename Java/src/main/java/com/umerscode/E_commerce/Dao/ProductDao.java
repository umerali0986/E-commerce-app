package com.umerscode.E_commerce.Dao;

import com.umerscode.E_commerce.Model.Product;

import java.util.List;

public interface ProductDao {
    List<Product> getAllBooks();
    List<Product> getAllLaptop();
    List<Product> getAllIpad();
    List<Product> getAllPhone();
    Product getProductById(int id);
    Product createProduct(Product product);

}
