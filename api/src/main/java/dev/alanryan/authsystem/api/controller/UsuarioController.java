package dev.alanryan.authsystem.api.controller;

import dev.alanryan.authsystem.api.model.Usuario;
import dev.alanryan.authsystem.api.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/cadastro")
    public ResponseEntity<?> cadastrar(@RequestBody Usuario usuario) {
        if (repository.findByEmail(usuario.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Email já cadastrado");
        }

        usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));
        Usuario salvo = repository.save(usuario);
        return ResponseEntity.ok(salvo);
    }

    @PostMapping("/login")
    public Optional<Usuario> login(@RequestBody Usuario usuario) {
        Optional<Usuario> userBanco = repository.findByEmail(usuario.getEmail());

        if (userBanco.isPresent()) {
            if (passwordEncoder.matches(usuario.getPassword(), userBanco.get().getPassword())) {
                return userBanco;
            }
        }
        return Optional.empty();
    }
}
