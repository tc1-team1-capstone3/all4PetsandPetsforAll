package com.example.All4PetsandPets4All.Services.Implementations;

import com.example.All4PetsandPets4All.Dto.ProductDto;
import com.example.All4PetsandPets4All.Dto.WarehouseDto;
import com.example.All4PetsandPets4All.ExceptionHandler.ApiRequestException;
import com.example.All4PetsandPets4All.Models.ProductModel;
import com.example.All4PetsandPets4All.Models.Requests.ProductRequest;
import com.example.All4PetsandPets4All.Models.WarehouseModel;
import com.example.All4PetsandPets4All.Services.ProductService;
import com.example.All4PetsandPets4All.dao.ProductRepository;
import com.example.All4PetsandPets4All.dao.WarehouseRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.context.annotation.Bean;
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
    private final WarehouseRepository warehouseRepository;

    public ProductServiceImplementation(ProductRepository productRepository, WarehouseRepository warehouseRepository) {
        this.productRepository = productRepository;
        this.warehouseRepository = warehouseRepository;
    }

    @Override
    public ProductDto createProduct(ProductDto productDto) {
        if(productRepository.findBySKU(productDto.getSKU()) != null){
            throw new ApiRequestException("That SKU Already Exists");
        }
        System.out.println(productDto.getQuantity());
        ProductModel newProduct = new ProductModel();
        WarehouseModel newWarehouse = new WarehouseModel();

        BeanUtils.copyProperties(productDto, newProduct);
        BeanUtils.copyProperties(productDto, newWarehouse);
        if (newWarehouse.getQuantity() < 1) {
            newWarehouse.setQuantity(0);
        }

        ProductModel storedProductDetails = productRepository.save(newProduct);
        warehouseRepository.save(newWarehouse);

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
            WarehouseModel warehouseModel = warehouseRepository.findBySKU(product.getSKU()).get();
            BeanUtils.copyProperties(warehouseModel, temp);
            productDtos.add(temp);
        }
        return productDtos;
    }

    @Override
    public ProductDto updateProduct(ProductRequest productRequest) {
        WarehouseModel warehouseModel = warehouseRepository.findBySKU(productRequest.getSKU()).get();
        if (productRequest.getQuantity() > 0) {
            warehouseModel.setQuantity(warehouseModel.getQuantity() + productRequest.getQuantity());
            warehouseRepository.save(warehouseModel);
        }
        ProductDto returnValue = new ProductDto();
        BeanUtils.copyProperties(productRequest, returnValue);
        BeanUtils.copyProperties(warehouseModel, returnValue);
        return returnValue;
    }

    @Override
    public ProductDto updateASingleProduct(Long SKU, ProductRequest productRequest) {
        ProductModel productModel = productRepository.findBySKU(SKU).get();
        if(productModel == null){
            throw new ApiRequestException("That SKU doesn't Exist!");
        }
        if(productRequest.getSKU() == null){
            productModel.setSKU(productModel.getSKU());
        }
        if(productRequest.getName() == null){
            productModel.setName(productModel.getName());
        }
        if(productRequest.getDescription() == null){
            productModel.setDescription(productModel.getDescription());
        }
        if(productRequest.getImgUrl() == null){
            productModel.setImgUrl(productModel.getImgUrl());
        }
        if(productRequest.getPrice() == null){
            productModel.setPrice(productModel.getPrice());
        }
        ProductModel saveProduct = productRepository.save(productModel);
        ProductDto returnDto = new ProductDto();
        BeanUtils.copyProperties(saveProduct, returnDto);
        return returnDto;
    }
}
