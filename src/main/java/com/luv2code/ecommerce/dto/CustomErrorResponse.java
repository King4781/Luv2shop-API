package com.luv2code.ecommerce.dto;

import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

public class CustomErrorResponse {
    private String status;
    private String message;
    private LocalDateTime date;
    private HttpStatus httpStatus;

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }

    public void setHttpStatus(HttpStatus httpStatus) {
        this.httpStatus = httpStatus;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "CustomErrorResponse{" +
                "status='" + status + '\'' +
                ", message='" + message + '\'' +
                ", date=" + date +
                ", httpStatus=" + httpStatus +
                '}';
    }
}
