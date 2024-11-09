package com.umerscode.E_commerce.Model;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class Product {

    private int id;
    private String name;
    private String description;
    private float price;
    private int amountInStock;
    private int categoryId;
    private String imageUrl;
    private Date createdDate;

}
