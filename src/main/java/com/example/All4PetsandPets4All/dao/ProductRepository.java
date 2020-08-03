package com.example.All4PetsandPets4All.dao;

import com.example.All4PetsandPets4All.Models.ProductModel;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends PagingAndSortingRepository<ProductModel, Long> {
}
