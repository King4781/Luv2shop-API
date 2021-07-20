package com.luv2code.ecommerce.dto;

import java.math.BigDecimal;
import java.util.Date;

public class OrderResponse {
    private final Long id;
    private final String orderTrackingNumber;
    private final BigDecimal totalPrice;
    private final int totalQuantity;
    private final Date dateCreated;

    public OrderResponse(Long id, String orderTrackingNumber, BigDecimal totalPrice, int totalQuantity, Date dateCreated) {
        this.id = id;
        this.orderTrackingNumber = orderTrackingNumber;
        this.totalPrice = totalPrice;
        this.totalQuantity = totalQuantity;
        this.dateCreated = dateCreated;
    }

    public Long getId() {
        return id;
    }

    public String getOrderTrackingNumber() {
        return orderTrackingNumber;
    }

    public BigDecimal getTotalPrice() {
        return totalPrice;
    }

    public int getTotalQuantity() {
        return totalQuantity;
    }

    public Date getDateCreated() {
        return dateCreated;
    }
}
