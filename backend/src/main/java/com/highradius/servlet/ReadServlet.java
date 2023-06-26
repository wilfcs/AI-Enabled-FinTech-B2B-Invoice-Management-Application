package com.highradius.servlet;

import java.io.IOException;
import java.util.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.highradius.dao.UserDAO;
import com.highradius.dao.UserDAOImpl;
import com.highradius.model.POJO;



@WebServlet("/Read")
public class ReadServlet extends HttpServlet{
	private static final long serialVersionUID = 1L;
	
	private UserDAO users;
	
	public void init() {
		// Initializing the UserDAO object using the UserDAOImpl implementation
		users = new UserDAOImpl();
	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// String to hold the JSON response
		String jsonResponse = new String();

		// Calling the readData() method of the UserDAO object to fetch the list of users from the database
		List<POJO> listUser = users.readData();
		
		// Creating a Gson object to convert the list of users to JSON format
		Gson gson = new Gson();
		jsonResponse = gson.toJson(listUser);
		
		// Setting the response headers and content type
		response.setCharacterEncoding("UTF-8");
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setContentType("application/json");
		// Writing the JSON response to the response.getWriter() stream
		response.getWriter().append(jsonResponse);
	}
}
