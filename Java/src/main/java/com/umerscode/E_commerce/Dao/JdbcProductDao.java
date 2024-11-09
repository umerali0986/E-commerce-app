package com.umerscode.E_commerce.Dao;

import com.umerscode.E_commerce.Exception.DaoExceptions;
import com.umerscode.E_commerce.Model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.CannotGetJdbcConnectionException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcProductDao implements ProductDao{

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public List<Product> getAllBooks() {
        return getProductByCategoryId(1);
    }

    @Override
    public List<Product> getAllLaptop() {
        return getProductByCategoryId(2);
    }

    @Override
    public List<Product> getAllIpad() {
        return getProductByCategoryId(3);
    }

    @Override
    public List<Product> getAllPhone() {
        return getProductByCategoryId(4);
    }

    @Override
    public Product getProductById(int ProductId) {
        Product retreivedProduct = null;

        String sql = "SELECT * FROM products WHERE id = ?";

        try{
            SqlRowSet result = jdbcTemplate.queryForRowSet(sql, ProductId);
            if (result.next()){
                retreivedProduct = mapRowToProduct(result);
            }
        }catch (CannotGetJdbcConnectionException e){
            throw new DaoExceptions("Unable to connect to database");
        }
        return retreivedProduct;
    }

    private List<Product> getProductByCategoryId(int categoryId){
        // write a sql queries to get all the products from a database
        List<Product> products = new ArrayList<>();

        String sql = "SELECT * FROM products WHERE category_id = ?";

        try{
            SqlRowSet result = jdbcTemplate.queryForRowSet(sql,categoryId);
            while (result.next()){
                products.add(mapRowToProduct(result));
            }
        }catch (CannotGetJdbcConnectionException e){
            throw new DaoExceptions("Unable to connect to database");
        }

        return products;
    }

    private Product mapRowToProduct(SqlRowSet result) {
        Product product = new Product();
        product.setId(result.getInt("id"));
        product.setName(result.getString("name"));
        product.setDescription(result.getString("description"));
        product.setPrice(result.getFloat("price"));
        product.setCategoryId(result.getInt("category_id"));
        product.setAmountInStock(result.getInt("amount_in_stock"));
        product.setImageUrl(result.getString("image_url"));
        product.setCreatedDate(result.getDate("created_date"));

        return product;
    }

    @Override
    public Product createProduct(Product product) {
        return null;
    }
}
