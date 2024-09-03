package pe.edu.upc.proyectogrupo1.entities;

import jakarta.persistence.*;

import java.sql.Time;
import java.time.LocalDate;
@Entity
@Table(name = "Alerta")

public class Alerta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_alerta;
    @Column(name = "tipo_desastre",nullable = false)
    private String tipo_desastre;
    @Column(name = "fecha",nullable = false)
    private LocalDate fecha;
    @Column(name = "hora",nullable = false)
    private Time hora;
    @Column(name = "descripcion",nullable = false)
    private String descripcion;
    @Column(name = "nivel_gravedad",nullable = false)
    private String nivel_gravedad;
    @Column(name = "estado",nullable = false)
    private Boolean estado;
    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario us;
    public Alerta(){

    }

    public Alerta(int id_alerta, String tipo_desastre, LocalDate fecha, Time hora, String descripcion, String nivel_gravedad, Boolean estado, Usuario us) {
        this.id_alerta = id_alerta;
        this.tipo_desastre = tipo_desastre;
        this.fecha = fecha;
        this.hora = hora;
        this.descripcion = descripcion;
        this.nivel_gravedad = nivel_gravedad;
        this.estado = estado;
        this.us = us;
    }

    public int getId_alerta() {
        return id_alerta;
    }

    public void setId_alerta(int id_alerta) {
        this.id_alerta = id_alerta;
    }

    public String getTipo_desastre() {
        return tipo_desastre;
    }

    public void setTipo_desastre(String tipo_desastre) {
        this.tipo_desastre = tipo_desastre;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public Time getHora() {
        return hora;
    }

    public void setHora(Time hora) {
        this.hora = hora;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getNivel_gravedad() {
        return nivel_gravedad;
    }

    public void setNivel_gravedad(String nivel_gravedad) {
        this.nivel_gravedad = nivel_gravedad;
    }

    public Boolean getEstado() {
        return estado;
    }

    public void setEstado(Boolean estado) {
        this.estado = estado;
    }

    public Usuario getUs() {
        return us;
    }

    public void setUs(Usuario us) {
        this.us = us;
    }
}
