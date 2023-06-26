package com.highradius.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.highradius.dao.UserDAO;
import com.highradius.dao.UserDAOImpl;

@WebServlet("/Delete")
public class DeleteServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	private UserDAO user;
	
	public void init() {
		user = new UserDAOImpl();
	}
	

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// Retrieving the ID of the data to be deleted from the request parameters
		int id = Integer.parseInt(request.getParameter("Sl_No"));
		try {
			// Calling the deleteData() method of the UserDAO object to delete the data from the database
			user.deleteData(id);
			
			// Sending a response back to the client indicating the success of deleting the data
			PrintWriter out = response.getWriter();
			response.setContentType("text/html");
			response.setCharacterEncoding("UTF-8");
			out.println("<h2>Data With Sl_no: "+id+" is deleted succesfully</h2>");
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

}
