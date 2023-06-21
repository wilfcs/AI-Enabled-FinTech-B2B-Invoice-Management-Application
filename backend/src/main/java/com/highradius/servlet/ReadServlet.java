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
		users = new UserDAOImpl();
	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String jsonResponse = new String();

		List<POJO> listUser = users.readData();
		
		Gson gson = new Gson();
		jsonResponse = gson.toJson(listUser);
		
		response.setCharacterEncoding("UTF-8");
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setContentType("application/json");
		response.getWriter().append(jsonResponse);
	}
}
