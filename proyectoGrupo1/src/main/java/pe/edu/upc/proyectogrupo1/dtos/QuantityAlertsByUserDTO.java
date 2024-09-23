package pe.edu.upc.proyectogrupo1.dtos;

public class QuantityAlertsByUserDTO {
    private String nombre;
    private String apellidos;
    private int quantityAlertsByUser;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public int getQuantityAlertsByUser() {
        return quantityAlertsByUser;
    }

    public void setQuantityAlertsByUser(int quantityAlertsByUser) {
        this.quantityAlertsByUser = quantityAlertsByUser;
    }
}
