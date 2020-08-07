package com.example.All4PetsandPets4All.Services.Implementations;

import com.example.All4PetsandPets4All.Dto.WarehouseDto;
import com.example.All4PetsandPets4All.ExceptionHandler.ApiRequestException;
import com.example.All4PetsandPets4All.Models.Requests.ProductRequest;
import com.example.All4PetsandPets4All.Models.WarehouseModel;
import com.example.All4PetsandPets4All.Services.WarehouseService;
import com.example.All4PetsandPets4All.dao.WarehouseRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class WarehouseServiceImplementation implements WarehouseService {

    private final WarehouseRepository warehouseRepository;

    public WarehouseServiceImplementation(WarehouseRepository warehouseRepository) {
        this.warehouseRepository = warehouseRepository;
    }


    @Override
    public WarehouseDto updateQuantity(WarehouseDto warehouseDto) {
        WarehouseModel selectedProduct = warehouseRepository.findBySKU(warehouseDto.getSKU()).get();
        if (warehouseDto.getQuantity() > 0) {
            selectedProduct.setQuantity(selectedProduct.getQuantity() + warehouseDto.getQuantity());
            warehouseRepository.save(selectedProduct);
            System.out.println(selectedProduct.getQuantity()+ " THis is the quantity");

        }
        return warehouseDto;
    }

    @Override
    public WarehouseDto updateASingleProduct(Long SKU, ProductRequest productRequest) {
        WarehouseModel warehouseModel = warehouseRepository.findBySKU(SKU).get();
        if(warehouseModel == null){
            throw new ApiRequestException("That SKU doesn't Exist!");
        }
        if(productRequest.getQuantity() == null || productRequest.getQuantity() < 1){
            warehouseModel.setQuantity(warehouseModel.getQuantity());
        }
        if(productRequest.getQuantity() != null && productRequest.getQuantity() > 0){
            warehouseModel.setQuantity(productRequest.getQuantity());
        }
        WarehouseModel savedWarehouse = warehouseRepository.save(warehouseModel);
        WarehouseDto warehouseDto = new WarehouseDto();
        BeanUtils.copyProperties(savedWarehouse, warehouseDto);
        return warehouseDto;
    }

    @Override
    public WarehouseDto createWarehouseEntry(WarehouseDto warehouseDto) {
        WarehouseModel warehouseModel = new WarehouseModel();
        BeanUtils.copyProperties(warehouseDto, warehouseModel);
        if(warehouseDto.getQuantity() == null || warehouseDto.getQuantity() < 1){
            warehouseModel.setQuantity(0);
        }
        WarehouseModel storedWarehouse = warehouseRepository.save(warehouseModel);
        WarehouseDto returnValue = new WarehouseDto();
        BeanUtils.copyProperties(storedWarehouse, returnValue);
        return returnValue;
    }
}
