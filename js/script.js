// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Jakub Malhotra
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  let text = ""
  let counter = 0
  const dividend = parseInt(document.getElementById("dividend").value)
  const divisor = parseInt(document.getElementById("divisor").value)


  while (counter <= multiplier) {
    text = text + multiplicand + " x " + counter + " = " + counter * multiplicand + "<br>"
    counter = counter + 1
  }
  document.getElementById("answer").innerHTML = text
}