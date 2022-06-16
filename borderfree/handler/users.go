package handler

import (
	"borderfree/config"
	"context"
	"fmt"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func GetAllUsers(c *fiber.Ctx) error {
	var client = config.ConnectDB()
	var usersCollection *mongo.Collection = config.GetCollection(client, "userss")
	fmt.Println("email")
	cursor, err := usersCollection.Find(context.TODO(), bson.D{})
	if err != nil {
		// client.Disconnect(context.TODO())
		panic(err)
	}

	var results []bson.M
	if err = cursor.All(context.TODO(), &results); err != nil {
		// client.Disconnect(context.TODO())
		panic(err)
	}

	// client.Disconnect(context.TODO())
	return c.Status(fiber.StatusOK).JSON(&fiber.Map{
		"success": true,
		"payload": results,
	})
}
