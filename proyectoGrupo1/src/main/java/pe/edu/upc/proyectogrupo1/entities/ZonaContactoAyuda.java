package pe.edu.upc.proyectogrupo1.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "ZonaContactoAyuda")
public class ZonaContactoAyuda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idZonaContactoAyuda;
    @ManyToOne
    @JoinColumn(name = "idZona")
    private Zona zo;
    @ManyToOne
    @JoinColumn(name = "idContactoAyuda")
    private ContactoAyuda coay;

    public ZonaContactoAyuda() {
    }

    public ZonaContactoAyuda(int idZonaContactoAyuda, Zona zo, ContactoAyuda coay) {
        this.idZonaContactoAyuda = idZonaContactoAyuda;
        this.zo = zo;
        this.coay = coay;
    }

    public int getIdZonaContactoAyuda() {
        return idZonaContactoAyuda;
    }

    public void setIdZonaContactoAyuda(int idZonaContactoAyuda) {
        this.idZonaContactoAyuda = idZonaContactoAyuda;
    }

    public Zona getZo() {
        return zo;
    }

    public void setZo(Zona zo) {
        this.zo = zo;
    }

    public ContactoAyuda getCoay() {
        return coay;
    }

    public void setCoay(ContactoAyuda coay) {
        this.coay = coay;
    }
}
