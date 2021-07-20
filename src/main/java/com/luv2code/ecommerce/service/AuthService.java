package com.luv2code.ecommerce.service;

import com.luv2code.ecommerce.dto.CustomErrorResponse;

public interface AuthService {
    boolean isAuthenticated();
    boolean hasAuthenticationError();
    CustomErrorResponse getError(String message);
    String getEmail();
    String getNetlifyErrorMessage();
}
