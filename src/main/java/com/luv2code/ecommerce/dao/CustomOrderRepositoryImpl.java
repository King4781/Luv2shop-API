package com.luv2code.ecommerce.dao;

import com.luv2code.ecommerce.dto.AddressResponse;
import com.luv2code.ecommerce.dto.CheckoutResponse;
import com.luv2code.ecommerce.dto.OrderResponse;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public class CustomOrderRepositoryImpl implements CustomOrderRepository {

    private final Session currentSession;
    private static final String FIND_FIRST_BY_EMAIL =
            "select new com.luv2code.ecommerce.dto.CheckoutResponse(o.customer.firstName, o.customer.lastName, o.shippingAddress.id, o.billingAddress.id, o.dateCreated) " +
            "from Order o join Customer c on o.customer.id = c.id where o.customer.email = ?1 order by o.dateCreated desc";

    private static final String FIND_ORDERS =
            "select new com.luv2code.ecommerce.dto.OrderResponse(o.id, o.orderTrackingNumber, o.totalPrice, o.totalQuantity, o.dateCreated) from Order o join Customer c on o.customer.id = c.id where o.customer.email = ?1 and o.status = 'paid' order by o.dateCreated desc";

    private static final String FIND_ADDRESS_BY_ID = "select new com.luv2code.ecommerce.dto.AddressResponse(a.city, a.state, a.country, a.zipCode, a.street) from Address a where a.id = ?1";

    @Autowired
    public CustomOrderRepositoryImpl(EntityManager entityManager) {
        currentSession = entityManager.unwrap(Session.class);
    }


    @Override
    public Optional<CheckoutResponse> customFindFirstByEmail(String email) {

        TypedQuery<CheckoutResponse> query = currentSession.createQuery(FIND_FIRST_BY_EMAIL, CheckoutResponse.class);

        query.setParameter(1, email);
        CheckoutResponse response = null;

        try {
             response = query.setMaxResults(1).getSingleResult();
        } catch (Exception ignored) {

        }

        return Optional.ofNullable(response);
    }

    @Override
    public List<OrderResponse> findOrdersByEmail(String email) {

        TypedQuery<OrderResponse> query = currentSession.createQuery(FIND_ORDERS, OrderResponse.class);

        query.setParameter(1, email);

        return query.getResultList();
    }

    @Override
    public Optional<AddressResponse> findAddressById(Long id) {
        TypedQuery<AddressResponse> query = currentSession.createQuery(FIND_ADDRESS_BY_ID, AddressResponse.class);

        query.setParameter(1, id);

        Optional<AddressResponse> addressResponseOptional = Optional.empty();

        try {
            AddressResponse addressResponse = query.getSingleResult();
            addressResponseOptional = Optional.ofNullable(addressResponse);
        } catch (Exception ignored) {

        }

        return addressResponseOptional;
    }
}
