package com.example.All4PetsandPets4All.dao;

import com.example.All4PetsandPets4All.Models.WarehouseModel;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WarehouseRepository extends PagingAndSortingRepository<WarehouseModel, Long> {
    Optional<WarehouseModel> findBySKU(Long SKU);

    void deleteBySKU(Long sku);
}
