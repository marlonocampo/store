const vF = {}

vF.FormatDate = ({date}) => {
    if(date){
        let day = date.getDate();
        let month = (date.getMonth() + 1);
        const year = date.getFullYear();

        if (day.length < 2) {
            day = '0' + day;
        }
        if (month.length < 2) {
            month = '0' + month;
        }
        return (year + "-" + month + "-" + day);
    }else {
        return ''
    }

}

vF.Required = () => {
    return true
}

vF.ValidarForm = ({newProducto}) => {
    const validate = {}
    if (newProducto.nombre.length === 0) {
        validate.nombre = true;
    } else if (newProducto.codigo.length === 0) {
        validate.codigo = true
    } else if (newProducto.precio.length === 0) {
        validate.precio = true;
    } else if (newProducto.stock.length === 0) {
        validate.stock = true;
    } else if (newProducto.categoria_id === 0) {
        validate.categoria_id = 0;
    } else if (newProducto.descripcion.length === 0) {
        validate.categoria = true;
    }
    return validate;
}
export default vF;