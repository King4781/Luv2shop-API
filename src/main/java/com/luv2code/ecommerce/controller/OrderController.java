package com.luv2code.ecommerce.controller;

import com.luv2code.ecommerce.dao.OrderRepository;
import com.luv2code.ecommerce.dto.CustomErrorResponse;
import com.luv2code.ecommerce.dto.OrderResponse;
import com.luv2code.ecommerce.service.AuthService;
import com.luv2code.ecommerce.service.AuthServiceImpl;
import com.luv2code.ecommerce.service.StripeService;
import com.stripe.exception.StripeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderRepository orderRepository;
    private final StripeService stripeService;

    @Autowired
    public OrderController(OrderRepository orderRepository, StripeService stripeService) {
        this.orderRepository = orderRepository;
        this.stripeService = stripeService;
    }

    @GetMapping("/findByEmail")
    public ResponseEntity<Object> findByEmail(@RequestHeader("Authorization") String token) {

        AuthService authService = new AuthServiceImpl(token);

        if (authService.hasAuthenticationError()) {
            CustomErrorResponse errorResponse = authService.getError("You must be logged in to view orders.");
            return new ResponseEntity<>(errorResponse, errorResponse.getHttpStatus());
        }

        try {
            stripeService.updateOrderToPaid(authService.getEmail());
        } catch (StripeException e) {
            e.printStackTrace();
        }

        List<OrderResponse> orders = orderRepository.findOrdersByEmail(authService.getEmail());

        return new ResponseEntity<>(orders, HttpStatus.OK);
    }
}
