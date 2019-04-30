package com.faire.model;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by janda on 29.4.2019.
 */
public interface CharacterRepository extends JpaRepository<CharacterDAO, Long> {
}
