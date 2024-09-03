package pe.edu.upc.proyectogrupo1.entities;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "Simulacros")
public class Simulacro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idSimulacro;
    @Column(name = "tipo_simulacro", nullable = false, length = 40)
    private String tipoSimlacro;
    @Column(name = "fecha",nullable = false )
    private LocalDate fecha;
    @Column(name = "hora",nullable = false )
    private LocalTime hora;
    @Column(name = "descripcion", nullable = false, length = 60)
    private String descripcion;
    @Column(name = "participantes", nullable = false )
    private int participantes;
    @ManyToOne
    @JoinColumn(name = "idZona")
    private Zona zo;

    public Simulacro() {
    }

    public Simulacro(int idSimulacro, String tipoSimlacro, LocalDate fecha, LocalTime hora, String descripcion, int participantes, Zona zo) {
        this.idSimulacro = idSimulacro;
        this.tipoSimlacro = tipoSimlacro;
        this.fecha = fecha;
        this.hora = hora;
        this.descripcion = descripcion;
        this.participantes = participantes;
        this.zo = zo;
    }

    public int getIdSimulacro() {
        return idSimulacro;
    }

    public void setIdSimulacro(int idSimulacro) {
        this.idSimulacro = idSimulacro;
    }

    public String getTipoSimlacro() {
        return tipoSimlacro;
    }

    public void setTipoSimlacro(String tipoSimlacro) {
        this.tipoSimlacro = tipoSimlacro;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public LocalTime getHora() {
        return hora;
    }

    public void setHora(LocalTime hora) {
        this.hora = hora;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public int getParticipantes() {
        return participantes;
    }

    public void setParticipantes(int participantes) {
        this.participantes = participantes;
    }

    public Zona getZo() {
        return zo;
    }

    public void setZo(Zona zo) {
        this.zo = zo;
    }
}
