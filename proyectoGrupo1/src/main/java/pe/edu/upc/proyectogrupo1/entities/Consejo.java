package pe.edu.upc.proyectogrupo1.entities;

import jakarta.persistence.*;
@Entity
@Table(name = "Consejo")

public class Consejo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_Consejo;
    @Column(name = "titulo",nullable = false)
    private String titulo;
    @Column(name = "descripcion",nullable = false)
    private String descripcion;
    @ManyToOne
    @JoinColumn(name = "id_Alerta")
    private Alerta al;

    public Consejo(){};

    public Consejo(int id_Consejo, String titulo, String descripcion, Alerta al) {
        this.id_Consejo = id_Consejo;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.al = al;
    }

    public int getId_Consejo() {
        return id_Consejo;
    }

    public void setId_Consejo(int id_Consejo) {
        this.id_Consejo = id_Consejo;
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

    public Alerta getAl() {
        return al;
    }

    public void setAl(Alerta al) {
        this.al = al;
    }
}
