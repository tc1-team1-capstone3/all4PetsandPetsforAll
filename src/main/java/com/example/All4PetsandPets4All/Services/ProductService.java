package com.example.All4PetsandPets4All.Services;

import com.example.All4PetsandPets4All.Dto.ProductDto;

import java.util.List;

public interface ProductService {
    ProductDto createProduct(ProductDto productDto);

    List<ProductDto> getProducts(Integer pageNo, Integer pageSize, String sortBy);
}
