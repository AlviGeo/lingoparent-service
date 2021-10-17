import {
  successResponse,
  errorResponse
} from '../../helpers';

const db = require("../../models");


export const login = async (req, res) => {
  try {
    const test = "Login"
    return successResponse(req, res, {test})
  } catch (error) {
    return errorResponse(req, res, {error})
  }
}

export const register = async (req, res) => {
  try {
    const test = "Register"
    return successResponse(req, res, {test})
  } catch (error) {
    return errorResponse(req, res, {error})
  }
}