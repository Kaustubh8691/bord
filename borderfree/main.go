package main

import (
	"borderfree/handler"
	"borderfree/router"
	"fmt"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	jwtware "github.com/gofiber/jwt/v3"
)

func main() {
	app := fiber.New()

	app.Use(logger.New())
	app.Use(cors.New())

	fmt.Println("email is")
	auth := app.Group("/auth")
	auth.Post("/login", handler.Login)
	fmt.Println("insideauth abd login")
	auth.Post("/register", handler.Register)

	app.Use(jwtware.New(jwtware.Config{
		SigningKey: []byte("ANiceLittleSecretOfMine987654321"),
	}))

	router.SetupSecuredRoutes(app)
	// app.Listen(":5050")
	app.Listen(":" + os.Getenv("PORT"))

}
