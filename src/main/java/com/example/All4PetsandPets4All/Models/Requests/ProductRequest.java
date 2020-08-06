package com.example.All4PetsandPets4All.Models.Requests;

public class ProductRequest {
    private Long SKU;
    private String name;
    private String description;
    private Double price;
    private String imgUrl;
    private Integer quantity;

    public ProductRequest(){
        //super();
    }

    public ProductRequest(Long SKU, String name, String description, Double price, String imgUrl, Integer quantity) {
        //super();
        this.SKU = SKU;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgUrl = imgUrl;
        this.quantity = quantity;
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
