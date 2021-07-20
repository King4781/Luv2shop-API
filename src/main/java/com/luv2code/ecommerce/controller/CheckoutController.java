package com.luv2code.ecommerce.controller;

import com.luv2code.ecommerce.dto.CheckoutResponse;
import com.luv2code.ecommerce.dto.CustomErrorResponse;
import com.luv2code.ecommerce.dto.Purchase;
import com.luv2code.ecommerce.dto.StripeSessionResponse;
import com.luv2code.ecommerce.service.AuthService;
import com.luv2code.ecommerce.service.AuthServiceImpl;
import com.luv2code.ecommerce.service.CheckoutService;
import com.luv2code.ecommerce.service.StripeService;
import com.stripe.exception.StripeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Optional;

@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {

    private final CheckoutService checkoutService;
    private final StripeService stripeService;

    @Autowired
    public CheckoutController(CheckoutService checkoutService, StripeService stripeService) {
        this.checkoutService = checkoutService;
        this.stripeService = stripeService;
    }

    @GetMapping("/purchase")
    public ResponseEntity<CheckoutResponse> getCustomerInformation(@RequestHeader("Authorization") String token) {
        AuthService authService = new AuthServiceImpl(token);
        Optional<CheckoutResponse> checkoutResponse = checkoutService.getCustomerInformation(authService.getEmail());

        return checkoutResponse.map(response -> new ResponseEntity<>(response, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/purchase")
    public ResponseEntity<Object> placeOrder(@RequestBody Purchase purchase, @RequestHeader("Authorization") String token) {

        AuthService authService = new AuthServiceImpl(token);

        if (authService.hasAuthenticationError()) {
            CustomErrorResponse errorResponse = authService.getError("You must be logged in to check out");
            return new ResponseEntity<>(errorResponse, errorResponse.getHttpStatus());
        }

        StripeSessionResponse stripeSessionResponse;

        try {
            stripeSessionResponse = stripeService.createCheckoutSession(purchase);
        } catch (StripeException e) {
            return new ResponseEntity<>(createError(e), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        checkoutService.placeOrder(purchase, authService.getEmail(), stripeSessionResponse.getId());

        return new ResponseEntity<>(stripeSessionResponse, HttpStatus.OK);
    }

    @PostMapping("/create-checkout-session")
    public ResponseEntity<Object> createCheckoutSession(@RequestBody Purchase purchase) {

        try {
            return new ResponseEntity<>(stripeService.createCheckoutSession(purchase), HttpStatus.OK);
        } catch (StripeException e) {
            return new ResponseEntity<>(createError(e), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private CustomErrorResponse createError(StripeException e) {
        CustomErrorResponse customErrorResponse = new CustomErrorResponse();
        customErrorResponse.setHttpStatus(HttpStatus.INTERNAL_SERVER_ERROR);
        customErrorResponse.setDate(LocalDateTime.now());
        customErrorResponse.setMessage(e.getMessage());
        customErrorResponse.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.name());
        return customErrorResponse;
    }
}
