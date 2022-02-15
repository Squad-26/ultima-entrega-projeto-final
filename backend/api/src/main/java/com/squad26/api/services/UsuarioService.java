package com.squad26.api.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.squad26.api.entities.Usuario;
import com.squad26.api.repositories.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository repository;
	
	// GET Method lista geral
	@Transactional(readOnly = true)
	public List<Usuario> findAll() {
		List<Usuario> resultado = repository.findAll();
		return resultado;
	}
	
	// GET Method por id
	public Usuario getById(Long id) {
		Optional<Usuario> usuario = repository.findById(id);
		if(usuario.isPresent()) {
			return usuario.get();		
		} else {
			return null;
		}
	}
	
	// POST Method
	public void save(Usuario usuario) {
		repository.save(usuario);
	}
	
	// DELETE Method
	public void delete(Long id) {
		repository.deleteById(id);
	}
		
}
