async function forgotPassword(event) {
    event.preventDefault();
 
    const email = event.target.email.value;
 
    const userDetails = {
      email,
    };
 
    //console.log(userDetails);
 
    try {
      const res = await axios.post("http://13.126.238.163:4000/password/forgotpassword", userDetails);
      // console.log(res);
      window.alert("reset password link sent to your email")
    } catch (err) {
      console.log(err);
      window.alert("User not Registerd");
  
    }
  }