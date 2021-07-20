package com.luv2code.ecommerce.service;

import com.luv2code.ecommerce.dto.CheckoutResponse;
import com.luv2code.ecommerce.dto.Purchase;
import com.luv2code.ecommerce.dto.PurchaseResponse;

import java.util.Optional;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase, String email, String stripeSessionId);
    Optional<CheckoutResponse> getCustomerInformation(String email);
}
