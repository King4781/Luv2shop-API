package com.luv2code.ecommerce.dao;

import com.luv2code.ecommerce.dto.AddressResponse;
import com.luv2code.ecommerce.dto.CheckoutResponse;
import com.luv2code.ecommerce.dto.OrderResponse;

import java.util.List;
import java.util.Optional;

public interface CustomOrderRepository {
    Optional<CheckoutResponse> customFindFirstByEmail(String email);
    List<OrderResponse> findOrdersByEmail(String email);
    Optional<AddressResponse> findAddressById(Long id);
}
