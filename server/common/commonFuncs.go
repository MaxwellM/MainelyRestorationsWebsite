package common

import (
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"io/ioutil"
	"net/http"
)

func readJsonFile(fileName string) (map[string]interface{}, error) {
	fmt.Println("File: ", fileName)
	fileReturn, err := ioutil.ReadFile(fileName)
	if err != nil {
		fmt.Println("Error reading JSON file: ", err)
		return nil, err
	}

	var fileInfo map[string]interface{}
	err = json.Unmarshal([]byte(fileReturn), &fileInfo)
	if err != nil {
		fmt.Println("Error parsing JSON into map[string]interface{}: ", err)
		return nil, err
	}
	return fileInfo, nil
}

func ReadJsonFile(data *gin.Context) {
	type FileName struct {
		FileName	string `json:"fileName"`
	}
	var info FileName
	data.Bind(&info)

	fileInfo, fileErr := readJsonFile(info.FileName)
	if fileErr != nil {
		data.JSON(http.StatusBadRequest, fileErr.Error())
	} else {
		data.JSON(http.StatusOK, fileInfo)
	}
}