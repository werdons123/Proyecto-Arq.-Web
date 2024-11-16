package pe.edu.upc.proyectogrupo1.dtos;

public class QuantityAlertsByZoneDTO {
    private String nombre_zona;
    private int quantityAlertsByZone;

    public String getNombre_zona() {
        return nombre_zona;
    }

    public void setNombre_zona(String nombre_zona) {
        this.nombre_zona = nombre_zona;
    }

    public int getQuantityAlertsByZone() {
        return quantityAlertsByZone;
    }

    public void setQuantityAlertsByZone(int quantityAlertsByZone) {
        this.quantityAlertsByZone = quantityAlertsByZone;
    }
}
