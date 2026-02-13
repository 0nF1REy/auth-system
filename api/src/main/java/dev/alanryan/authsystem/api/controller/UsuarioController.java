package dev.alanryan.authsystem.api.controller;

import dev.alanryan.authsystem.api.model.Usuario;
import dev.alanryan.authsystem.api.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins =  "http://localhost:4200/")
@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
    @Autowired
    private UsuarioRepository repository;

    @PostMapping("/cadastro")
    public String cadastrar(@RequestBody Usuario usuario){
        if(repository.findByEmail(usuario.getEmail()).isPresent()){
            return "Email ja cadastrado";
        }
        repository.save(usuario);
        return "Cadastro realizado com sucesso!";
    }
    @PostMapping("/login")
    public Optional<Usuario> login(@RequestBody Usuario usuario){
        return repository.findByEmailAndPassword(usuario.getEmail(),usuario.getPassword());
    }
}
