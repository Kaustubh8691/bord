package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Data struct {
	ID primitive.ObjectID `bson:"_id"`

	Name            *string   `json:"name" validate:"required"`
	ProductName     *string   `json:"productName" validate:"required"`
	ProductDiscount *string   `json:"productDiscount" validate:"required"`
	ProductPrice    *int      `json:"productPrice" validate:"required"`
	ProductType     *string   `json:"productType" validate:"required"`
	Created_at      time.Time `json:"created_at"`
	Updated_at      time.Time `json:"updated_at"`
	Count           string    `json:"count"`
	User_id         string    `json:"user_id"`
}
