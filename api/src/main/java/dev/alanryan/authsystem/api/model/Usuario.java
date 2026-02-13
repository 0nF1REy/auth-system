package dev.alanryan.authsystem.api.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "usuarios")
public class Usuario {
    @Id
    private String id;
    private String name;
    private String email;
    private String password;
}
