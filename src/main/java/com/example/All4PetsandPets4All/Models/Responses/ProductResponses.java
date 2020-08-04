package com.example.All4PetsandPets4All.Models.Responses;

public class ProductResponses {

    Long id;
    Long SKU;

    public ProductResponses() {
        super();
    }
    public ProductResponses(Long id, Long SKU) {
        super();
        this.SKU = SKU;
        this.id = id;
    }



    public void setId(Long id) {
        this.id = id;
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
