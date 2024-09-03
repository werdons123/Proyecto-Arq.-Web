package pe.edu.upc.proyectogrupo1.entities;

import jakarta.persistence.*;

@Entity
@Table (name="Plan_de_Evacuacion")
public class Plan_de_Evacuacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_plan_evacuacion;

    @Column(name="titulo", nullable=false, length = 30)
    private String titulo;

    @Column(name="descripcion", nullable=false, length = 40)
    private String descripcion;

    @Column(name="rutas_evacuacion", nullable=false, length = 100)
    private String rutas_evacuacion;

    @Column(name="puntos_seguros", nullable=false, length = 40)
    private String puntos_seguros;

    @ManyToOne
    @JoinColumn(name = "Zona_id")
    private Zona zona;

    public Plan_de_Evacuacion(int id_plan_evacuacion, String titulo, String descripcion, String rutas_evacuacion, String puntos_seguros, Zona zona) {
        this.id_plan_evacuacion = id_plan_evacuacion;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.rutas_evacuacion = rutas_evacuacion;
        this.puntos_seguros = puntos_seguros;
        this.zona = zona;
    }

    public Plan_de_Evacuacion() {
    }

    public int getId_plan_evacuacion() {
        return id_plan_evacuacion;
    }

    public void setId_plan_evacuacion(int id_plan_evacuacion) {
        this.id_plan_evacuacion = id_plan_evacuacion;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getRutas_evacuacion() {
        return rutas_evacuacion;
    }

    public void setRutas_evacuacion(String rutas_evacuacion) {
        this.rutas_evacuacion = rutas_evacuacion;
    }

    public String getPuntos_seguros() {
        return puntos_seguros;
    }

    public void setPuntos_seguros(String puntos_seguros) {
        this.puntos_seguros = puntos_seguros;
    }

    public Zona getZona() {
        return zona;
    }

    public void setZona(Zona zona) {
        this.zona = zona;
    }


}
