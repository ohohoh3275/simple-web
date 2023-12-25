#[macro_use] 
extern crate rocket;

#[get("/main")]
fn index() -> &'static str {
    "main page!"
}


#[launch]
fn rocket() -> _ {

    rocket::build()
        .configure(rocket::Config::figment().merge(("port", 5000)))
        .mount("/v1", routes![index])
    
}