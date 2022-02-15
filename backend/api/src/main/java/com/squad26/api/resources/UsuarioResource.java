package com.squad26.api.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.squad26.api.entities.Usuario;
import com.squad26.api.services.UsuarioService;

@RestController
@RequestMapping(name = "/usuarios")
public class UsuarioResource {
	
	@Autowired
	private UsuarioService service;
	
	@GetMapping
	private List<Usuario> findAll() {
		return service.findAll();
	}
}
