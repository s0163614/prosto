onSubmit() {
const controls = this.myFirstReactiveForm.controls;

 /** Проверяем форму на валидность */ 
 if (this.myFirstReactiveForm.invalid) {
  /** Если форма не валидна, то помечаем все контролы как touched*/
  Object.keys(controls)
   .forEach(controlName => controls[controlName].markAsTouched());
   
   /** Прерываем выполнение метода*/
   return;
  }

 /** TODO: Обработка данных формы */
 console.log(this.myFirstReactiveForm.value);
 $(function(){
    $(".ajaxForm").submit(function(e){
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function(response){
                if(response.status == "success"){
                    alert("Заявка отправлена !");
					localStorage.removeItem("email");
                    localStorage.removeItem("nick");
                    localStorage.removeItem("anotherInput");
					localStorage.removeItem("check");
					email.value = localStorage.getItem("email");
                    nick.value = localStorage.getItem("nick");
                    anotherInput.value = localStorage.getItem("anotherInput");
					check.checked = false;
                }else{
                    alert("Что-то пошло не так " + response.message);
                }
            }
        });
    });
});
}