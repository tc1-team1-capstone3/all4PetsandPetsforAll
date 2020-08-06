package com.example.All4PetsandPets4All.Controllers;

import com.example.All4PetsandPets4All.Dto.ProductDto;
import com.example.All4PetsandPets4All.Dto.WarehouseDto;
import com.example.All4PetsandPets4All.Models.Requests.ProductRequest;
import com.example.All4PetsandPets4All.Models.Responses.ProductResponses;
import com.example.All4PetsandPets4All.Services.ProductService;
import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public ProductResponses createProduct(@RequestBody ProductRequest productRequest) {
        ProductDto productDto = new ProductDto();

        BeanUtils.copyProperties(productRequest, productDto);

        ProductDto updatedProduct = productService.createProduct(productDto);

        ProductResponses returnValue = new ProductResponses();
        BeanUtils.copyProperties(updatedProduct, returnValue);
        return returnValue;
    }


    @PutMapping
    public ProductResponses updateProduct(@RequestBody ProductRequest productRequest) {
        ProductResponses returnValue = new ProductResponses();
        ProductDto productDto = productService.updateProduct(productRequest);
        BeanUtils.copyProperties(productDto, returnValue);
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
}
