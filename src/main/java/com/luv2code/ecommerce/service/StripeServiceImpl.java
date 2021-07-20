package com.luv2code.ecommerce.service;

import com.luv2code.ecommerce.dao.OrderRepository;
import com.luv2code.ecommerce.dao.ProductRepository;
import com.luv2code.ecommerce.dto.Purchase;
import com.luv2code.ecommerce.dto.StripeSessionResponse;
import com.luv2code.ecommerce.entity.Order;
import com.luv2code.ecommerce.entity.OrderItem;
import com.luv2code.ecommerce.entity.Product;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Price;
import com.stripe.model.checkout.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;

@Service
@Transactional
public class StripeServiceImpl implements StripeService {

    @Value("${stripe.secret.key}")
    private String stripeSecretKey;
    private static final String successUrl = "http://digitalocean.kentonking.tech:8080/spring-boot-ecommerce/#/success";
    private static final String failureUrl = "http://digitalocean.kentonking.tech:8080/spring-boot-ecommerce/#/canceled";
    private static final String localSuccessUrl = "http://localhost:4200/#/success";
    private static final String localFailureUrl = "http://localhost:4200/#/canceled";

    private final ProductRepository productRepository;
    private final OrderRepository orderRepository;

    @Autowired
    public StripeServiceImpl(ProductRepository productRepository, OrderRepository orderRepository) {
        this.productRepository = productRepository;
        this.orderRepository = orderRepository;
    }

    @Override
    public StripeSessionResponse createCheckoutSession(Purchase purchase) throws StripeException {
        Stripe.apiKey = stripeSecretKey;
        List<Map<String, Object>> lineItems = new ArrayList<>();

        Set<OrderItem> orderItemSet = purchase.getOrderItems();

        for (OrderItem orderItem: orderItemSet) {
            Long productId = orderItem.getProductId();
            Optional<Product> product = productRepository.findById(productId);
            if (product.isPresent()) {

                Map<String, Object> currentLineItem = new HashMap<>();


                Map<String, Object> productParams = new HashMap<>();
                productParams.put("name", product.get().getName());
                com.stripe.model.Product stripeProduct = com.stripe.model.Product.create(productParams);

                Map<String, Object> priceParams = new HashMap<>();
                int amount = (int) Math.round(product.get().getUnitPrice().doubleValue() * 100);
                priceParams.put("unit_amount", amount);
                priceParams.put("currency", "usd");
                priceParams.put("product", stripeProduct.getId());

                Price  price = Price.create(priceParams);

                currentLineItem.put("quantity", orderItem.getQuantity());
                currentLineItem.put("price", price.getId());

                lineItems.add(currentLineItem);
            }
        }

        Map<String, Object> sessionParams = new HashMap<>();
        List<String> paymentMethodTypes = Collections.singletonList("card");

        sessionParams.put("mode", "payment");
        sessionParams.put("line_items", lineItems);
        sessionParams.put("payment_method_types", paymentMethodTypes);
        sessionParams.put("success_url", successUrl);
        sessionParams.put("cancel_url", failureUrl);

        Session session = Session.create(sessionParams);

        return new StripeSessionResponse(session.getId());
    }

    @Override
    @Transactional
    public void updateOrderToPaid(String email) throws StripeException {

        Stripe.apiKey = stripeSecretKey;

        List<Order> orders = orderRepository.findAllByStatusAndCustomerEmail("unpaid", email);

        for (Order order: orders) {
            Session session = Session.retrieve(order.getStripSessionId());
            String paymentStatus = session.getPaymentStatus();
            if (paymentStatus.equals("paid")) {
                order.setStatus(paymentStatus);
                orderRepository.save(order);
            }
        }
    }
}
