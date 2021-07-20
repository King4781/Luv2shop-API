package com.luv2code.ecommerce.service;

import com.luv2code.ecommerce.dao.CustomerRepository;
import com.luv2code.ecommerce.dao.OrderRepository;
import com.luv2code.ecommerce.dto.AddressResponse;
import com.luv2code.ecommerce.dto.CheckoutResponse;
import com.luv2code.ecommerce.dto.Purchase;
import com.luv2code.ecommerce.dto.PurchaseResponse;
import com.luv2code.ecommerce.entity.Customer;
import com.luv2code.ecommerce.entity.Order;
import com.luv2code.ecommerce.entity.OrderItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;

@Service
public class CheckoutServiceImpl implements CheckoutService {

    private final CustomerRepository customerRepository;
    private final OrderRepository orderRepository;

    @Autowired
    public CheckoutServiceImpl(CustomerRepository customerRepository, OrderRepository orderRepository) {
        this.customerRepository = customerRepository;
        this.orderRepository = orderRepository;
    }

    @Override
    @Transactional
    public PurchaseResponse placeOrder(Purchase purchase, String email, String stripeSessionId) {

        Order order = purchase.getOrder();
        order.setStatus("unpaid");
        order.setStripSessionId(stripeSessionId);

        String trackingNumber = generateTrackingNumber();
        order.setOrderTrackingNumber(trackingNumber);

        Set<OrderItem> orderItems = purchase.getOrderItems();
        orderItems.forEach(order::add);

        order.setShippingAddress(purchase.getShippingAddress());
        order.setBillingAddress(purchase.getBillingAddress());

        Customer customer = purchase.getCustomer();
        customer.setEmail(email);

        Optional<Customer> customerFromDB = customerRepository.findByEmail(customer.getEmail());

        if (customerFromDB.isPresent()) {
            customer = customerFromDB.get();
        }

        customer.add(order);

        customerRepository.save(customer);

        return new PurchaseResponse(trackingNumber);
    }

    @Override
    @Transactional
    public Optional<CheckoutResponse> getCustomerInformation(String email) {
        Optional<CheckoutResponse> checkoutResponse = orderRepository.customFindFirstByEmail(email);

        if (checkoutResponse.isPresent()) {
            CheckoutResponse value = checkoutResponse.get();
            Optional<AddressResponse> shipping = orderRepository.findAddressById(value.getShippingAddressId());
            Optional<AddressResponse> billing = orderRepository.findAddressById(value.getBillingAddressId());
            if (shipping.isPresent() && billing.isPresent()) {
                value.setBillingAddress(billing.get());
                value.setShippingAddress(shipping.get());
            }
        }

        return checkoutResponse;
    }

    private String generateTrackingNumber() {
        return UUID.randomUUID().toString();
    }
}
