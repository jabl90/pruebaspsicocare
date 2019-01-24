    export class User {

        constructor(private _id:number, private _name:string, private _email:string, private _password:String){
        }
            get id(){return this._id;}
            get name(){return this._name;}
            get email(){return this._email;}
            get password(){return this._password;}
            
            set id(id){this._id=id; }
            set name(name){this._name=name; }
            set email(email){this._email=email; }
            set password(password){this._password=password; }
        
        
        
        
        
    
        
    
    
    
        
    }