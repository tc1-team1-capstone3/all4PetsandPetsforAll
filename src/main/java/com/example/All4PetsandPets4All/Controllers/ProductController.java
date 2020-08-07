package com.example.All4PetsandPets4All.Controllers;

import com.example.All4PetsandPets4All.Dto.ProductDto;
import com.example.All4PetsandPets4All.Dto.WarehouseDto;
import com.example.All4PetsandPets4All.Models.Requests.ProductRequest;
import com.example.All4PetsandPets4All.Models.Responses.ProductResponses;
import com.example.All4PetsandPets4All.Services.ProductService;

import com.example.All4PetsandPets4All.Services.WarehouseService;

import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("products")
public class ProductController {

    private final ProductService productService;
    private final WarehouseService warehouseService;

    public ProductController(ProductService productService, WarehouseService warehouseService) {
        this.productService = productService;
        this.warehouseService = warehouseService;
    }

    @PostMapping
    public ProductResponses createProduct(@RequestBody ProductRequest productRequest) {
        ProductDto productDto = new ProductDto();
        WarehouseDto warehouseDto = new WarehouseDto();
        BeanUtils.copyProperties(productRequest, productDto);
        BeanUtils.copyProperties(productRequest, warehouseDto);
//        if (productDto.getQuantity() == null || productDto.getQuantity() < 1) {
//            productDto.setQuantity(0);
//        }
        ProductDto updatedProduct = productService.createProduct(productDto);
        WarehouseDto updatedWarehouse = warehouseService.createWarehouseEntry(warehouseDto);
        ProductResponses returnValue = new ProductResponses();
        BeanUtils.copyProperties(updatedProduct, returnValue);
        BeanUtils.copyProperties(updatedWarehouse, returnValue);
        return returnValue;
    }


    @PutMapping
    public ProductResponses updateProduct(@RequestBody ProductRequest productRequest) {
        ProductResponses returnValue = new ProductResponses();
        WarehouseDto warehouseDto1 = new WarehouseDto();
        BeanUtils.copyProperties(productRequest, warehouseDto1);
        WarehouseDto returnedWarehouse = warehouseService.updateQuantity(warehouseDto1);
//        ProductDto productDto = productService.updateProduct(productRequest);
//        BeanUtils.copyProperties(productDto, returnValue);
        BeanUtils.copyProperties(returnedWarehouse, returnValue);
        System.out.println(returnValue.getQuantity() + " This is in the controller");
        return returnValue;
    }

    @PutMapping(path = "/{SKU}")
    public ProductResponses updateASingleProduct(@PathVariable Long SKU, @RequestBody ProductRequest productRequest){
        ProductResponses returnValue = new ProductResponses();
        ProductDto productDto = productService.updateASingleProduct(SKU, productRequest);
        WarehouseDto warehouseDto = warehouseService.updateASingleProduct(SKU, productRequest);
        BeanUtils.copyProperties(productDto, returnValue);
        BeanUtils.copyProperties(warehouseDto, returnValue);
        return returnValue;
    }

    @GetMapping
    public List<ProductResponses> getProducts(@RequestParam(defaultValue = "0") Integer pageNo,
                                             @RequestParam(defaultValue = "15") Integer pageSize,
                                             @RequestParam(defaultValue = "id") String sortBy) {
        List<ProductResponses> returnValue = new ArrayList<>();
        List<ProductDto> productDtos = productService.getProducts(pageNo, pageSize, sortBy);
        for (ProductDto productDto : productDtos) {
            ProductResponses temp = new ProductResponses();
            BeanUtils.copyProperties(productDto, temp);
            returnValue.add(temp);
        }
        return returnValue;
    }

    @GetMapping(path = "/sku/{sku}")
    public ProductResponses getProduct(@PathVariable Long sku) {
        ProductResponses returnValue = new ProductResponses();
        ProductDto productDto = productService.getProductBySku(sku);
        BeanUtils.copyProperties(productDto, returnValue);
        return returnValue;
    }
}
