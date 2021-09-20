package main

import (
	"MainelyRestorationsWebsite/server/common"
	"fmt"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"

	//"MainelyRestorationsWebsite/server/email"
)
func main() {
	// Sets Gin to run in default mode
	router := gin.Default()

	// Serve frontend static files
	router.Static("/images", "../src/images")
	router.Use(static.Serve("/", static.LocalFile("../build", true)))

    // We'll house all of our API calls here
    api := router.Group("/api")
    {
		//api.POST("/sendEmail", email.SendEmail)
		api.POST("/getGoogleMapsAPIKey", common.ReadJsonFile)
    }

    // This will have the frontend handle all of the routing
    router.NoRoute(func(c *gin.Context) {
        c.File("../build/index.html")
    })

	// Runs server on port 8080.
	fmt.Println("Starting server on the port 9090...")
	router.Run(":9090")
}