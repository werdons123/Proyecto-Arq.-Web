package pe.edu.upc.proyectogrupo1.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "ContactoAyuda")
public class ContactoAyuda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idContactoAyuda;
    @Column(name = "nombreInstitucion", nullable = false, length = 60)
    private String nombreInstitucion;
    @Column(name = "descripcion", nullable = false, length = 100)
    private String descripcion;
    @Column(name = "telefono", nullable = false, length = 12)
    private String telefono;

    public ContactoAyuda() {
    }

    public ContactoAyuda(int idContactoAyuda, String nombreInstitucion, String descripcion, String telefono, String email) {
        this.idContactoAyuda = idContactoAyuda;
        this.nombreInstitucion = nombreInstitucion;
        this.descripcion = descripcion;
        this.telefono = telefono;
    }

    public int getIdContactoAyuda() {
        return idContactoAyuda;
    }

    public void setIdContactoAyuda(int idContactoAyuda) {
        this.idContactoAyuda = idContactoAyuda;
    }

    public String getNombreInstitucion() {
        return nombreInstitucion;
    }

    public void setNombreInstitucion(String nombreInstitucion) {
        this.nombreInstitucion = nombreInstitucion;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

}
