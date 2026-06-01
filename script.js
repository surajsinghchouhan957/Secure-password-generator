
    function generatePassword() {

      const length = document.getElementById("length").value;

      const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lower = "abcdefghijklmnopqrstuvwxyz";
      const numbers = "0123456789";
      const symbols = "!@#$%^&*()_+{}[]<>?/";

      let allChars = "";

      if(document.getElementById("uppercase").checked){
        allChars += upper;
      }

      if(document.getElementById("lowercase").checked){
        allChars += lower;
      }

      if(document.getElementById("numbers").checked){
        allChars += numbers;
      }

      if(document.getElementById("symbols").checked){
        allChars += symbols;
      }

      if(allChars === ""){
        alert("Please select at least one option");
        return;
      }

      let password = "";

      for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
      }

      document.getElementById("password").value = password;
    }

    function copyPassword() {
      const passwordField = document.getElementById("password");

      passwordField.select();
      document.execCommand("copy");

      alert("Password copied!");
    }

    generatePassword();