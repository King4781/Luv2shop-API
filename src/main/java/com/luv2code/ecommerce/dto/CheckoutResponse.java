package com.luv2code.ecommerce.dto;

import com.luv2code.ecommerce.entity.Address;

import java.util.Date;

public class CheckoutResponse {
    private final String firstName;
    private final String lastName;
    private final Long shippingAddressId;
    private final Long billingAddressId;
    private final Date dateCreated;
    private AddressResponse shippingAddress;
    private AddressResponse billingAddress;

    public CheckoutResponse(String firstName, String lastName, Long shippingAddressId, Long billingAddressId, Date dateCreated) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.shippingAddressId = shippingAddressId;
        this.billingAddressId = billingAddressId;
        this.dateCreated = dateCreated;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public Long getShippingAddressId() {
        return shippingAddressId;
    }

    public Long getBillingAddressId() {
        return billingAddressId;
    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public AddressResponse getShippingAddress() {
        return shippingAddress;
    }

    public void setShippingAddress(AddressResponse shippingAddress) {
        this.shippingAddress = shippingAddress;
    }

    public AddressResponse getBillingAddress() {
        return billingAddress;
    }

    public void setBillingAddress(AddressResponse billingAddress) {
        this.billingAddress = billingAddress;
    }

    @Override
    public String toString() {
        return "CheckoutResponse{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", shippingAddressId=" + shippingAddressId +
                ", billingAddressId=" + billingAddressId +
                ", dateCreated=" + dateCreated +
                '}';
    }
}
