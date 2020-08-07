package com.example.All4PetsandPets4All.Services;

import com.example.All4PetsandPets4All.Dto.ProductDto;
import com.example.All4PetsandPets4All.Models.Requests.ProductRequest;

import java.util.List;

public interface ProductService {
    ProductDto createProduct(ProductDto productDto);

    List<ProductDto> getProducts(Integer pageNo, Integer pageSize, String sortBy);

    ProductDto updateASingleProduct(Long SKU, ProductRequest productRequest);

    ProductDto getProductBySku(Long sku);

    boolean deleteProduct(Long sku);

}
