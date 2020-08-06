package com.example.All4PetsandPets4All;



import com.example.All4PetsandPets4All.Dto.ProductDto;
import com.example.All4PetsandPets4All.Models.ProductModel;
import com.example.All4PetsandPets4All.Services.Implementations.ProductServiceImplementation;
import com.example.All4PetsandPets4All.Services.ProductService;
import com.example.All4PetsandPets4All.dao.ProductRepository;
import com.example.All4PetsandPets4All.dao.WarehouseRepository;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.BeanUtils;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;


import java.net.http.HttpHeaders;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest
class ServiceTests {
	private ProductRepository productRepository = mock(ProductRepository.class);
	private WarehouseRepository warehouseRepository = mock(WarehouseRepository.class);
	private ProductService productService = new ProductServiceImplementation(productRepository, warehouseRepository);

	@Test
	public void testCreateProduct() {
		ProductDto inputDto = new ProductDto(
				1234L,
				"penguin",
				"wintery friend",
				100.00,
				"url",
				1
		);
		ProductDto expectedDto = new ProductDto(
				1234L,
				"penguin",
				"wintery friend",
				100.00,
				"url",
				1
		);
		expectedDto.setId(55L);
		ProductModel saveToDB = new ProductModel();
		ProductModel returnFromDB = new ProductModel();
		BeanUtils.copyProperties(inputDto, saveToDB);
		BeanUtils.copyProperties(saveToDB, returnFromDB);
		returnFromDB.setId(55L);

		when(productRepository.save(Mockito.any(ProductModel.class))).thenReturn(returnFromDB);

		ProductDto actualProduct = productService.createProduct(inputDto);
		assertEquals(expectedDto.getDescription(), actualProduct.getDescription());
		assertEquals(expectedDto.getId(), actualProduct.getId());
		assertEquals(expectedDto.getImgUrl(), actualProduct.getImgUrl());
		assertEquals(expectedDto.getName(), actualProduct.getName());
		assertEquals(expectedDto.getPrice(), actualProduct.getPrice());
		assertEquals(expectedDto.getSKU(), actualProduct.getSKU());

	}
}


