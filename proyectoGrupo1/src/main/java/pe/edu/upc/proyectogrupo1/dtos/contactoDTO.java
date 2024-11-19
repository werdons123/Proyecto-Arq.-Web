package pe.edu.upc.proyectogrupo1.dtos;

public class contactoDTO {
    private String nombre_zona;
    private String nombre_institucion;
    private String telefono_institucion;
    private String descripcion_institucion;

    public String getNombre_zona() {
        return nombre_zona;
    }

    public void setNombre_zona(String nombre_zona) {
        this.nombre_zona = nombre_zona;
    }

    public String getNombre_institucion() {
        return nombre_institucion;
    }

    public void setNombre_institucion(String nombre_institucion) {
        this.nombre_institucion = nombre_institucion;
    }

    public String getTelefono_institucion() {
        return telefono_institucion;
    }

    public void setTelefono_institucion(String telefono_institucion) {
        this.telefono_institucion = telefono_institucion;
    }

    public String getDescripcion_institucion() {
        return descripcion_institucion;
    }

    public void setDescripcion_institucion(String descripcion_institucion) {
        this.descripcion_institucion = descripcion_institucion;
    }
}
