package com.luv2code.ecommerce.dto;

public class StripeSessionResponse {
    private final String id;

    public StripeSessionResponse(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }
}
