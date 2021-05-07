document.addEventListener("DOMContentLoaded", () => {

    console.log("DRAG AND DROP");
    let file;
    const dropZone = document.getElementById("dropZone");
    const fileInfo = document.querySelector(".fileInfo");
    const tbDrag = ["dragenter", "dragleave", "dragover", "drop"];
    tbDrag.forEach(element => {
        dropZone.addEventListener(element, (e) => {
            e.preventDefault();
            e.stopPropagation();
            if(element === "drop"){
                let dt = e.dataTransfer;
                file = dt.files
                let name = file[0].name;
                let size = (file[0].size/1000)+"ko";
                fileInfo.innerHTML = name +" - "+size;
            }
        })
    });
    console.log('FOMULAIRE REGISTER');
    const form = document.forms.registration_form;
    form.addEventListener('submit',function(e){
        e.preventDefault();
        console.dir(form,file);
        // traiter mon upload et resize img
        if(file.length>0){
            //upload
            $.ajax({
                type:'POST',
                url:ajaxUrl,
                data:{test:12345},
                success:(data)=>{
                    console.log('youpi');
                }
            });
        }

        // submit
        //form.submit();
    })

})
