package com.example.All4PetsandPets4All.Dto;

public class ProductDto {

    Long id;
    Long SKU;

    public ProductDto() {
       super();
    }
    public ProductDto(Long id, Long SKU) {
        super();
        this.id = id;
        this.SKU = SKU;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getSKU() {
        return SKU;
    }

    public void setSKU(Long SKU) {
        this.SKU = SKU;
    }
}
