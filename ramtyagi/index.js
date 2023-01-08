class User{

    constructor(username,email,password){
     this.username=username;
     this.email=email;
     this.password=password;


    }
}

class Member extends User{
    constructor (username,email,password,memberpackage){
        super(username,email,password);{
            this.package=memberpackage;
            let todaysDate= new Date();
            const packagetillYear=todaysDate.getFullYear();
            const packagetillMonth=todaysDate.getMonth();
            const packagetillDay=todaysDate.getDay();
            this.packagetilldate = new Date(
                packagetillYear,
                packagetillMonth + 1,
                packagetillDay
            );
        }
    }
    renewMembership(){
        const packagetillYear=this.packagetilldate.getFullYear();
        const packagetillMonth=this.packagetilldate.getMonth();
        const packagetillDay=this.packagetilldate.getDay();
        if(this.package === "Standard package"){
            this.packagetilldate = new Date(
                packagetillYear,
                packagetillMonth + 1,
                packagetillDay
            )
        }
       else if(this.package === "Yearly package"){
            this.packagetilldate = new Date(
                packagetillYear + 1,
                packagetillMonth + 1,
                packagetillDay
            )
        }

    }
    membershipactivetilldate(){
        console.log(this.username + 'subscribed to '+ this.package + "to" + this.packagetilldate);
      }

    getpackage(){
        console.log(this.username +' is subscried to ' + this.package)
    }
}

let nitin = new Member ("nitin55","1gupta@gmail.com","1234", "Standard package")
nitin.getpackage();
nitin. membershipactivetilldate()
nitin.renewMembership();

let niti = new Member ("nitin55bbb","11gupta@gmail.com","12341", "Yearly package")
niti.getpackage();
niti. membershipactivetilldate()
niti.renewMembership();
