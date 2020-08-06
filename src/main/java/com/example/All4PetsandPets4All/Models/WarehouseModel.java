package com.example.All4PetsandPets4All.Models;

import javax.persistence.*;

@Entity
@Table(name = "warehouse")
public class WarehouseModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private int quantity;

    private Long SKU;

    public WarehouseModel() {
    }

    public WarehouseModel(Long id, Integer quantity, Long SKU) {
        this.id = id;
        this.quantity = quantity;
        this.SKU = SKU;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Long getSKU() {
        return SKU;
    }

    public void setSKU(Long SKU) {
        this.SKU = SKU;
    }
}
