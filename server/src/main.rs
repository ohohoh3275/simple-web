use axum::{response::Html, routing::get, Router};

#[tokio::main]
async fn main() {

    let app = Router::new().route("/", get(handler));

    let listener = tokio::net::TcpListener::bind("127.0.0.1:3030")
        .await
        .unwrap();

    println!("listening {}", listener.local_addr().unwrap());
    axum::serve(listener, app).await.unwrap();
}

async fn handler() -> Html<&'static str> {
    //  `&'static` ?

    Html("<h3>hello axum🥳</h3>")
}