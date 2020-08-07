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
import com.fasterxml.jackson.databind.util.BeanUtil;
import org.springframework.beans.BeanUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ProductServiceImplementation implements ProductService {

    private final ProductRepository productRepository;
    private final WarehouseRepository warehouseRepository;

    public ProductServiceImplementation(ProductRepository productRepository, WarehouseRepository warehouseRepository) {
        this.productRepository = productRepository;
        this.warehouseRepository = warehouseRepository;
    }

    @Override
    public ProductDto createProduct(ProductDto productDto) {
        if(! productRepository.findBySKU(productDto.getSKU()).isEmpty()){
            throw new ApiRequestException("That SKU Already Exists");
        }
        ProductModel newProduct = new ProductModel();
        WarehouseModel newWarehouse = new WarehouseModel();
        BeanUtils.copyProperties(productDto, newProduct);
        newWarehouse.setSKU(productDto.getSKU());
        newWarehouse.setQuantity(0);
        ProductModel storedProductDetails = productRepository.save(newProduct);
        WarehouseModel storedQuantity = warehouseRepository.save(newWarehouse);
        ProductDto returnValue = new ProductDto();
        BeanUtils.copyProperties(storedProductDetails, returnValue);
        BeanUtils.copyProperties(storedQuantity, returnValue);
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
    public ProductDto updateASingleProduct(Long SKU, ProductRequest productRequest) {
        ProductModel productModel = productRepository.findBySKU(SKU).get();
        if(productModel == null){
            throw new ApiRequestException("That SKU doesn't Exist!");
        }
        if(productRequest.getSKU() == null){
            productModel.setSKU(productModel.getSKU());
        }
        if(productRequest.getSKU() != null){
            productModel.setSKU(productRequest.getSKU());
        }
        if(productRequest.getName() == null){
            productModel.setName(productModel.getName());
        }
        if(productRequest.getName() != null){
            productModel.setName(productRequest.getName());
        }
        if(productRequest.getDescription() == null){
            productModel.setDescription(productModel.getDescription());
        }
        if(productRequest.getDescription() != null){
            productModel.setDescription(productRequest.getDescription());
        }
        if(productRequest.getImgUrl() == null){
            productModel.setImgUrl(productModel.getImgUrl());
        }
        if(productRequest.getImgUrl() != null){
            productModel.setImgUrl(productRequest.getImgUrl());
        }
        if(productRequest.getPrice() == null){
            productModel.setPrice(productModel.getPrice());
        }
        if(productRequest.getPrice() != null){
            productModel.setPrice(productRequest.getPrice());
        }
        ProductModel saveProduct = productRepository.save(productModel);
        ProductDto returnDto = new ProductDto();
        BeanUtils.copyProperties(saveProduct, returnDto);
        return returnDto;
    }

    @Override
    public ProductDto getProductBySku(Long sku) {
        ProductModel selectedProduct = productRepository.findBySKU(sku).get();
        ProductDto returnValue = new ProductDto();
        WarehouseModel warehouseDto = warehouseRepository.findBySKU(sku).get();
        BeanUtils.copyProperties(selectedProduct, returnValue);
        BeanUtils.copyProperties(warehouseDto, returnValue);
        return returnValue;
    }

    @Override
    public boolean deleteProduct(Long sku) {
        ProductModel foundItem = productRepository.findBySKU(sku).get();
        WarehouseModel foundQuantity = warehouseRepository.findBySKU(sku).get();
        if(foundItem != null || foundQuantity != null ){
            productRepository.deleteBySKU(sku);
            warehouseRepository.deleteBySKU(sku);
            return true;
        }
        return false;
    }
}
