package com.example.All4PetsandPets4All.Models.Requests;

public class ProductRequest {
    private Long SKU;

    public ProductRequest(){
        //super();
    }

    public ProductRequest(Long SKU) {
        //super();
        this.SKU = SKU;
    }

    public Long getSKU() {
        return SKU;
    }

    public void setSKU(Long SKU) {
        this.SKU = SKU;
    }
}
