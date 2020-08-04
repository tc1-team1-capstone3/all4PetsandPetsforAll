package com.example.All4PetsandPets4All.Services.Implementations;

import com.example.All4PetsandPets4All.Dto.ProductDto;
import com.example.All4PetsandPets4All.Models.ProductModel;
import com.example.All4PetsandPets4All.Services.ProductService;
import com.example.All4PetsandPets4All.dao.ProductRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductServiceImplementation implements ProductService {

    private final ProductRepository productRepository;

    public ProductServiceImplementation(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public ProductDto createProduct(ProductDto productDto) {

        ProductModel newProduct = new ProductModel();
        BeanUtils.copyProperties(productDto, newProduct);

        ProductModel storedProductDetails = (ProductModel) productRepository.save(newProduct);

        ProductDto returnValue = new ProductDto();
        BeanUtils.copyProperties(storedProductDetails, returnValue);
        return returnValue;
    }

    @Override
    public List<ProductDto> getProducts(Integer pageNo, Integer pageSize, String id) {
        Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(id));
        Page<ProductModel> products = productRepository.findAll(paging);
        List<ProductDto> productDtos = new ArrayList<>();
        for (ProductModel product : products) {
            ProductDto temp = new ProductDto();
            BeanUtils.copyProperties(product, temp);
            productDtos.add(temp);
        }
        return productDtos;
    }
}
