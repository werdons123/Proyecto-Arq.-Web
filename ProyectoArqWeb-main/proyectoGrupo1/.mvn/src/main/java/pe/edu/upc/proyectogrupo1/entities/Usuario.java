package pe.edu.upc.proyectogrupo1.entities;
import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table (name = "Usuario")

public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_usuario;

    @Column(name = "nombre", nullable=false, length = 50)
    private String nombre;

    @Column(name = "apellidos", nullable=false, length = 50)
    private String apellidos;

    @Column(name = "fechanacimiento", nullable=false)
    private LocalDate fechanacimiento;

    @Column(name = "correo", nullable=false, length = 50)
    private String correo;

    @Column(name = "ruc", length = 11)
    private String ruc;

    @Column(name = "direccion", length = 30)
    private String direccion;

    @Column(name = "telefono", nullable=false, length = 12)
    private String telefono;

    @Column(name = "username", nullable=false, length = 20)
    private String username;

    @Column(name = "password", nullable=false, length = 20)
    private String password;

    public Usuario(int id_usuario, String nombre, String apellidos, LocalDate fechanacimiento, String correo, String ruc, String direccion, String telefono, String username, String password) {
        this.id_usuario = id_usuario;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechanacimiento = fechanacimiento;
        this.correo = correo;
        this.ruc = ruc;
        this.direccion = direccion;
        this.telefono = telefono;
        this.username = username;
        this.password = password;
    }

    public Usuario() {
    }

    public int getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(int id_usuario) {
        this.id_usuario = id_usuario;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public LocalDate getFechanacimiento() {
        return fechanacimiento;
    }

    public void setFechanacimiento(LocalDate fechanacimiento) {
        this.fechanacimiento = fechanacimiento;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getRuc() {
        return ruc;
    }

    public void setRuc(String ruc) {
        this.ruc = ruc;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
