package config

import (
    "context"
    "log"
    "os"

    "github.com/joho/godotenv"
    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
)

var Client *mongo.Client
var BlogCollection *mongo.Collection

func ConnectDB() {
    err := godotenv.Load()
    if err != nil {
        log.Fatal("Error loading .env file")
    }

    mongoURI := os.Getenv("MONGODB_URI")
    if mongoURI == "" {
        log.Fatal("MONGODB_URI not set in .env file")
    }

    clientOptions := options.Client().ApplyURI(mongoURI)

    Client, err = mongo.Connect(context.TODO(), clientOptions)
    if err != nil {
        log.Fatal(err)
    }

    err = Client.Ping(context.TODO(), nil)
    if err != nil {
        log.Fatal(err)
    }

    log.Println("Connected to MongoDB!")

    BlogCollection = Client.Database("blogDB").Collection("posts")
}