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
		int id = Integer.parseInt(request.getParameter("Sl_No"));
		try {
			user.deleteData(id);
			PrintWriter out = response.getWriter();
			response.setContentType("text/html");
			response.setCharacterEncoding("UTF-8");
			out.println("<h2>Data With Sl_no: "+id+" is deleted succesfully</h2>");
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

}
