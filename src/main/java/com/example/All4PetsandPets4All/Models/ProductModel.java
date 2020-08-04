package com.example.All4PetsandPets4All.Models;

import javax.persistence.*;

@Entity
public class ProductModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false, unique = true)
    private Long SKU;

    public ProductModel() {
    }

    public ProductModel(Long SKU){
        super();
        this.SKU = SKU;
    }

    public Long getId() {
        return id;
    }


    public Long getSKU() {
        return SKU;
    }

    public void setSKU(Long SKU) {
        this.SKU = SKU;
    }
}
