let swAlert = (event) => {
    swal({
        title: "Внимание!",
        text: "Кнопка пока не работает!",
        icon: "warning",
        button: "Понятно",
      });
};
$(".btn").click(swAlert);
