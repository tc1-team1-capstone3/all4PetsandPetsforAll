package com.example.All4PetsandPets4All.Dto;

public class WarehouseDto {

    private Long id;
    private Long SKU;
    private Integer quantity;

    public WarehouseDto() {
    }

    public WarehouseDto(Long SKU, Integer quantity) {
        this.SKU = SKU;
        this.quantity = quantity;
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

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
