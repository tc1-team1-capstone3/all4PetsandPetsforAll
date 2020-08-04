package com.example.All4PetsandPets4All.Dto;

public class ProductDto {

    Long id;

    public ProductDto(Long id) {
        this.id = id;
    }

    public ProductDto() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
