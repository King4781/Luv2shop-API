package com.luv2code.ecommerce.service;

import com.luv2code.ecommerce.dto.Purchase;
import com.luv2code.ecommerce.dto.StripeSessionResponse;
import com.stripe.exception.StripeException;

public interface StripeService {
    StripeSessionResponse createCheckoutSession(Purchase purchase) throws StripeException;
    void updateOrderToPaid(String email) throws StripeException;
}
