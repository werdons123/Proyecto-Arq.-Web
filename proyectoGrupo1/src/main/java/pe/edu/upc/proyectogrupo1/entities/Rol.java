package pe.edu.upc.proyectogrupo1.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Rol")
public class Rol {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idRol;
    @Column(name = "tipoRol", nullable = false, length = 30)
    private String tipoRol;
    @ManyToOne
    @JoinColumn(name = "id_usuario", nullable = false)
    private Usuario us;

    public Rol() {
    }

    public Rol(Usuario us, String tipoRol, int idRol) {
        this.us = us;
        this.tipoRol = tipoRol;
        this.idRol = idRol;
    }

    public int getIdRol() {
        return idRol;
    }

    public void setIdRol(int idRol) {
        this.idRol = idRol;
    }

    public String getTipoRol() {
        return tipoRol;
    }

    public void setTipoRol(String tipoRol) {
        this.tipoRol = tipoRol;
    }

    public Usuario getUs() {
        return us;
    }

    public void setUs(Usuario us) {
        this.us = us;
    }
}
