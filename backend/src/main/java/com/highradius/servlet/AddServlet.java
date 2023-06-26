package com.highradius.servlet;

//servlet that handles HTTP GET requests for adding a new user to the database.
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
import com.highradius.model.*;

@WebServlet("/Add")
public class AddServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	private UserDAO user;
	
	public void init() {
		user = new UserDAOImpl();
	}
	

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// Retrieving user input from the request parameters
		int Sl_No = Integer.parseInt(request.getParameter("Sl_No"));
		String Customer_Order_Id = request.getParameter("Customer_Order_Id");
		String Sales_Org = request.getParameter("Sales_Org");
		String Distribution_Channel = request.getParameter("Distribution_Channel");
		String Company_Code = request.getParameter("ACompany_Code");
		String Order_Creation_Date = request.getParameter("Order_Creation_Date");
		String Order_Currency = request.getParameter("Order_Currency");
		String Customer_Number = request.getParameter("Customer_Number");
		String Amount_in_USD = request.getParameter("Amount_in_USD");
		String Order_Amount = request.getParameter("Order_Amount");
		
		// Creating a new POJO (Plain Old Java Object) instance with the retrieved data
		POJO newUser = new POJO(Sl_No,Customer_Order_Id,Sales_Org,Distribution_Channel,Company_Code,Order_Creation_Date,Order_Currency,Customer_Number,Amount_in_USD,Order_Amount);
		try {
			// Calling the addData() method of the UserDAO object to add the user data to the database
			user.addData(newUser);
			
			// Sending a response back to the client indicating the success of adding the data
			PrintWriter out = response.getWriter();
			response.setContentType("text/html");
			response.setCharacterEncoding("UTF-8");
			out.println("<h2>Data "+newUser+" is added succesfully yeyy!</h2>");
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

}
