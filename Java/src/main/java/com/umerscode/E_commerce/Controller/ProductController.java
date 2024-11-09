package com.umerscode.E_commerce.Controller;

import com.umerscode.E_commerce.Dao.JdbcProductDao;
import com.umerscode.E_commerce.Model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/product")
@CrossOrigin
public class ProductController {

    @Autowired
    private JdbcProductDao jdbcProductDao;


    @GetMapping("/books")
    public List<Product> getAllBooks(){
        return jdbcProductDao.getAllBooks();
    }

    @GetMapping("/laptops")
    public List<Product> getAllLaptop(){
        return jdbcProductDao.getAllLaptop();
    }

    @GetMapping("/ipads")
    public List<Product> getAllIpad(){
        return jdbcProductDao.getAllIpad();
    }

    @GetMapping("/phones")
    public List<Product> getAllPhone(){
        return jdbcProductDao.getAllPhone();
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable("id") int productId){
        return jdbcProductDao.getProductById(productId);
    }
}
