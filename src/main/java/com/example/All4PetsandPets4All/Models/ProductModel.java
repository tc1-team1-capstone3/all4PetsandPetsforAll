package com.example.All4PetsandPets4All.Models;

import javax.persistence.*;

@Entity
@Table(name = "products")
public class ProductModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    //@OneToOne(cascade = CascadeType.ALL)
    //@JoinColumn(name = "warehouse_id", referencedColumnName = "id")
    @Column(nullable = false, unique = true)
    private Long SKU;
    @Column()
    private String name;
    @Column()
    private String description;
    @Column()
    private Double price;
    @Column()
    private String imgUrl;

    public ProductModel() {
    }

    public ProductModel(Long SKU, String name, String description, Double price, String imgUrl){
        super();
        this.SKU = SKU;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgUrl = imgUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id){this.id = id;}

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
}
