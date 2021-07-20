package com.luv2code.ecommerce.dto;

public class AddressResponse {
    private final String city;
    private final String state;
    private final String country;
    private final String zipCode;
    private final String street;

    public AddressResponse(String city, String state, String country, String zipCode, String street) {
        this.city = city;
        this.state = state;
        this.country = country;
        this.zipCode = zipCode;
        this.street = street;
    }

    public String getCity() {
        return city;
    }

    public String getState() {
        return state;
    }

    public String getCountry() {
        return country;
    }

    public String getZipCode() {
        return zipCode;
    }

    public String getStreet() {
        return street;
    }
}
