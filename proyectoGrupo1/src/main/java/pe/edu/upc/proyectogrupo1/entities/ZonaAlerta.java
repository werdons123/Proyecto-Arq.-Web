package pe.edu.upc.proyectogrupo1.entities;

import jakarta.persistence.*;
@Entity
@Table(name = "ZonaAlerta")

public class ZonaAlerta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_Zona;
    @ManyToOne
    @JoinColumn
    private Zona zo;
    @ManyToOne
    @JoinColumn
    private Alerta al;
    public ZonaAlerta() {};

    public ZonaAlerta(int id_Zona, Zona zo, Alerta al) {
        this.id_Zona = id_Zona;
        this.zo = zo;
        this.al = al;
    }

    public int getId_Zona() {
        return id_Zona;
    }

    public void setId_Zona(int id_Zona) {
        this.id_Zona = id_Zona;
    }

    public Zona getZo() {
        return zo;
    }

    public void setZo(Zona zo) {
        this.zo = zo;
    }

    public Alerta getAl() {
        return al;
    }

    public void setAl(Alerta al) {
        this.al = al;
    }
}
