package com.example.All4PetsandPets4All.Services.Implementations;

import com.example.All4PetsandPets4All.Dto.WarehouseDto;
import com.example.All4PetsandPets4All.ExceptionHandler.ApiRequestException;
import com.example.All4PetsandPets4All.Models.WarehouseModel;
import com.example.All4PetsandPets4All.Services.WarehouseService;
import com.example.All4PetsandPets4All.dao.ProductRepository;
import com.example.All4PetsandPets4All.dao.WarehouseRepository;
import org.springframework.stereotype.Service;

@Service
public class WarehouseServiceImplementation implements WarehouseService {

    private final WarehouseRepository warehouseRepository;

    public WarehouseServiceImplementation(WarehouseRepository warehouseRepository) {
        this.warehouseRepository = warehouseRepository;
    }


    @Override
    public void updateQuantity(WarehouseDto warehouseDto) {
        WarehouseModel selectedProduct = warehouseRepository.findBySKU(warehouseDto.getSKU()).get();
        if (selectedProduct.getQuantity() > 0) {
            selectedProduct.setQuantity(selectedProduct.getQuantity() + warehouseDto.getQuantity());
            warehouseRepository.save(selectedProduct);
        }

    }
}
