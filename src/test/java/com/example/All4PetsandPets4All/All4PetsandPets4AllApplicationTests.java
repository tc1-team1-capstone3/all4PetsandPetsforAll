package com.example.All4PetsandPets4All;



import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;


import java.net.http.HttpHeaders;

@SpringBootTest
class All4PetsandPets4AllApplicationTests {

//	@Test
//	public void testGetAllProducts(){
//		HttpHeaders headers = new HttpHeaders();
//		HttpEntity<String> entity = new HttpEntity<String>(null, headers);
//
//		ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/products", HttpMethod.GET, entity, String.class);
//
//		Assert.assertNotNull(response.getBody());
//	}
//
//	@Test
//	public void testCreateProduct(){
//		Product product = new Product();
//		product.setName("test product");
//		//add in rest of sets
//		ResponseEntity<Product> postResponse = restTemplate.postForEntity(getRootUrl() + "/prodcuts", product, Product.class);
//		Assert.assertNotNull(postResponse);
//		Assert.assertNotNull(postResponse.getBody());
//	}
//
//	@Test
//	public void testGetProductById(){
//		Product product = restTemplate.getForObject(getRootUrl() + "/product/1", Products.class);
//		System.out.println(product.getProductName());
//		Assert.assertNotNull(product);
//	}
//
//	@Test
//	public void testUpdateProduct(){
//		int id = 1;
//		Product product = restTemplate.getForObject(getRootUrl() + "/products" + id, Product.class);
//		product.setProductName("sample product");
//		//add in rest of sets
//
//		restTemplate.put(getRootUrl() + "/products" + id, product);
//
//		Product updatedProduct = restTemplate.getForObject(getRootUrl() + "/products" + id, Product.class);
//		Assert.assertNotNull(updatedProduct);
//	}


}
