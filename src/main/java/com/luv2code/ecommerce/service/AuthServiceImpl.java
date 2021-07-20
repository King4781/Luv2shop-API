package com.luv2code.ecommerce.service;

import com.google.gson.Gson;
import com.luv2code.ecommerce.dto.CustomErrorResponse;
import org.springframework.http.HttpStatus;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.LocalDateTime;
import java.util.Map;

public class AuthServiceImpl implements AuthService {

    private static final String NETLIFY_URL = "https://luv2shopstore.netlify.app/.netlify/functions/netlify-auth";
    private Map<String, Object> data;

    public AuthServiceImpl(String token) {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(NETLIFY_URL))
                .header("Authorization", token)
                .build();

        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            data = new Gson().fromJson(response.body(), Map.class);
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }

    @Override
    public boolean isAuthenticated() {
        return Boolean.parseBoolean(data.get("isAuthenticated").toString());
    }

    @Override
    public boolean hasAuthenticationError() {
        return data == null || !isAuthenticated();
    }

    @Override
    public CustomErrorResponse getError(String message) {

        if (!hasAuthenticationError()) return new CustomErrorResponse();

        if (data == null) {
            CustomErrorResponse customErrorResponse = new CustomErrorResponse();
            customErrorResponse.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.name());
            customErrorResponse.setMessage("There was an internal error processing your request. Please try again later.");
            customErrorResponse.setDate(LocalDateTime.now());
            customErrorResponse.setHttpStatus(HttpStatus.INTERNAL_SERVER_ERROR);
            return customErrorResponse;
        }

        CustomErrorResponse customErrorResponse = new CustomErrorResponse();
        customErrorResponse.setStatus(HttpStatus.UNAUTHORIZED.name());
        customErrorResponse.setHttpStatus(HttpStatus.UNAUTHORIZED);
        customErrorResponse.setMessage(message);
        customErrorResponse.setDate(LocalDateTime.now());

        return customErrorResponse;
    }

    @Override
    public String getEmail() {

        if (!isAuthenticated()) return "";

        return (String) data.get("email");
    }

    @Override
    public String getNetlifyErrorMessage() {

        return (String) data.get("msg");
    }
}
