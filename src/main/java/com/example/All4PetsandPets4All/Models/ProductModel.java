package com.example.All4PetsandPets4All.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ProductModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    public ProductModel() {
    }

    public Long getId() {
        return id;
    }

}
