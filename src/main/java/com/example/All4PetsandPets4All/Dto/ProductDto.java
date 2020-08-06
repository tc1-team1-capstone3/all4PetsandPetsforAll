package com.example.All4PetsandPets4All.Dto;

public class ProductDto {

    Long id;
    Long SKU;
    String name;
    String description;
    Double price;
    String imgUrl;
    Integer quantity;

    public ProductDto() {
       super();
    }

    public ProductDto(Long id, Long SKU, String name, String description, Double price, String imgUrl, Integer quantity) {
        super();
        this.id = id;
        this.SKU = SKU;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgUrl = imgUrl;
        this.quantity = quantity;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
