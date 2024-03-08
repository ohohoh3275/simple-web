#[macro_use] 
extern crate rocket;

struct Item {
    id: usize,
    title: char,
    description: char,
    owner: char,
    // TBC
}


#[get("/api/v1/item")]
fn index() -> &'static str {

}