package com.squad26.api.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.squad26.api.entities.Usuario;
import com.squad26.api.services.UsuarioService;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "http://localhost:300")
public class UsuarioResource {
	
	@Autowired
	private UsuarioService service;
	
	@GetMapping
	private List<Usuario> findAll() {
		return service.findAll();
	}
	
	@PostMapping
	public ResponseEntity<Usuario> save(@RequestBody Usuario usuario) {
		service.save(usuario);
		return ResponseEntity.ok().body(usuario);
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Usuario> delete(@PathVariable Long id) {
		service.delete(id);
		Usuario usuario = service.getById(id);
		return ResponseEntity.ok().body(usuario);
	}
}
