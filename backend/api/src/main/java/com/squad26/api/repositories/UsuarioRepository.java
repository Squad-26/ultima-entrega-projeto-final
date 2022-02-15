package com.squad26.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.squad26.api.entities.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long>{

}
