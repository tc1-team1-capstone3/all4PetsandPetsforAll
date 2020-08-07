package com.example.All4PetsandPets4All.Services;

import com.example.All4PetsandPets4All.Dto.WarehouseDto;
import com.example.All4PetsandPets4All.Models.Requests.ProductRequest;

public interface WarehouseService {


    WarehouseDto updateQuantity(WarehouseDto warehouseDto);

    WarehouseDto updateASingleProduct(Long SKU, ProductRequest productRequest);

    WarehouseDto createWarehouseEntry(WarehouseDto warehouseDto);
}
