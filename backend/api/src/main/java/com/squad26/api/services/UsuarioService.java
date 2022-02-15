package com.squad26.api.services;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.squad26.api.entities.Usuario;
import com.squad26.api.repositories.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository repository;
	
	@Transactional(readOnly = true)
	public List<Usuario> findAll() {
		List<Usuario> resultado = repository.findAll();
		return resultado;
	}
		
}
