package com.example.All4PetsandPets4All;



import com.example.All4PetsandPets4All.Dto.ProductDto;
import com.example.All4PetsandPets4All.dao.ProductRepository;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;


import java.net.http.HttpHeaders;

import static org.mockito.Mockito.mock;

@SpringBootTest
class ServiceTests {
	private ProductRepository productRepository = mock(ProductRepository.class);

	@Test
	public void testCreateProduct(){
		ProductDto inputDto = new ProductDto();

	}



	@Test
	public void testGetProductById(){
		Product product = restTemplate.getForObject(getRootUrl() + "/product/1", Products.class);
		System.out.println(product.getProductName());
		Assert.assertNotNull(product);
	}

	@Test
	public void testUpdateProduct(){
		int id = 1;
		Product product = restTemplate.getForObject(getRootUrl() + "/products" + id, Product.class);
		product.setProductName("sample product");
		//add in rest of sets

		restTemplate.put(getRootUrl() + "/products" + id, product);

		Product updatedProduct = restTemplate.getForObject(getRootUrl() + "/products" + id, Product.class);
		Assert.assertNotNull(updatedProduct);
	}


}
