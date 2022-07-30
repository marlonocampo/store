function ValidarFecha (date) {
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
        return null;
    }
}
export default ValidarFecha;