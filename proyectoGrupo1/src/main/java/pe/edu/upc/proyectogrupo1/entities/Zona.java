package pe.edu.upc.proyectogrupo1.entities;
import jakarta.persistence.*;
@Entity
@Table(name = "Zona")

public class Zona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_Zona;

    @Column(name = "nombre_zona",nullable = false,length = 40)
    private String nombre_zona;

    @Column(name = "descripcion",nullable = false,length = 80)
    private String descripcion;

    @Column(name = "ubicacion",nullable = false,length = 40)
    private String ubicacion;


    public Zona() {
    }

    public Zona(int id_Zona, String nombre_zona, String descripcion, String ubicacion) {
        this.id_Zona = id_Zona;
        this.nombre_zona = nombre_zona;
        this.descripcion = descripcion;
        this.ubicacion = ubicacion;

    }

    public int getId_Zona() {
        return id_Zona;
    }

    public void setId_Zona(int id_Zona) {
        this.id_Zona = id_Zona;
    }

    public String getNombre_zona() {
        return nombre_zona;
    }

    public void setNombre_zona(String nombreZona) {
        this.nombre_zona = nombreZona;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }



}
