package com.example.carBackEnd;

import org.springframework.data.repository.CrudRepository;

import com.example.carBackEnd.Car;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface CarRepository extends CrudRepository<Car, Integer> {

}
