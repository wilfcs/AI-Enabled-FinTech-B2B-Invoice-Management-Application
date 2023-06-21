//package com.highradius.servlet;
//
//import java.io.IOException;
//import java.io.PrintWriter;
//import java.sql.SQLException;
//import java.util.List;
//
//import javax.servlet.ServletException;
//import javax.servlet.annotation.WebServlet;
//import javax.servlet.http.HttpServlet;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import com.highradius.dao.UserDAO;
//import com.highradius.dao.UserDAOImpl;
//import com.highradius.model.POJO;
//
//@WebServlet("/")
//public class Servlet extends HttpServlet {
//	private static final long serialVersionUID = 1L;
//	private UserDAO userDAO;
//
//	public void init() {
//		userDAO = new UserDAOImpl();
//	}
//
//	protected void doPost(HttpServletRequest request, HttpServletResponse response)
//			throws ServletException, IOException {
//		doGet(request, response);
//	}
//
//	protected void doGet(HttpServletRequest request, HttpServletResponse response)
//			throws ServletException, IOException {
//		String action = request.getServletPath();
//
//		try {
//			switch (action) {
//			case "/Add":
//				addData(request, response);
//				break;
//			case "/Delete":
//				deleteData(request, response);
//				break;
//			case "/Edit":
//				editData(request, response);
//				break;
//			case "/Read":
//				readData(request,response);
//				break;
//			default:
//				break;
//			}
//		} catch (SQLException ex) {
//			throw new ServletException(ex);
//		}
//	}
//
//	private void readData(HttpServletRequest request, HttpServletResponse response)
//			throws SQLException, IOException, ServletException {
//		System.out.println("listuser");
//		PrintWriter out = response.getWriter();
//		response.setContentType("text/html");
//		List<POJO> listUser = userDAO.readData();
//		out.println("First 10 users: "+listUser);
//
//	}
//
//	private void addData(HttpServletRequest request, HttpServletResponse response) throws SQLException, IOException {
//		int Sl_No = Integer.parseInt(request.getParameter("Sl_No"));
//		String Customer_Order_Id = request.getParameter("Customer_Order_Id");
//		String Sales_Org = request.getParameter("Sales_Org");
//		String Distribution_Channel = request.getParameter("Distribution_Channel");
//		String Company_Code = request.getParameter("Company_Code");
//		String Order_Creation_Date = request.getParameter("Order_Creation_Date");
//		String Order_Currency = request.getParameter("Order_Currency");
//		String Customer_Number = request.getParameter("Customer_Number");
//		String Amount_in_USD = request.getParameter("Amount_in_USD");
//		String Order_Amount = request.getParameter("Order_Amount");
//		POJO newUser = new POJO(Sl_No,Customer_Order_Id,Sales_Org,Distribution_Channel,Company_Code,Order_Creation_Date,Order_Currency,Customer_Number,Amount_in_USD,Order_Amount);;
//		userDAO.addData(newUser);
//	}
//	
//	private void editData(HttpServletRequest request, HttpServletResponse response) throws SQLException, IOException {
//		int id = Integer.parseInt(request.getParameter("Sl_No"));
//		String Customer_Order_Id = request.getParameter("Customer_Order_Id");
//		String Sales_Org = request.getParameter("Sales_Org");
//		String Distribution_Channel = request.getParameter("Distribution_Channel");
//		String Company_Code = request.getParameter("Company_Code");
//		String Order_Creation_Date = request.getParameter("Order_Creation_Date");
//		String Order_Currency = request.getParameter("Order_Currency");
//		String Customer_Number = request.getParameter("Customer_Number");
//		String Amount_in_USD = request.getParameter("Amount_in_USD");
//		String Order_Amount = request.getParameter("Order_Amount");
//		POJO newUser = new POJO(Customer_Order_Id,Sales_Org,Distribution_Channel,Company_Code,Order_Creation_Date,Order_Currency,Customer_Number,Amount_in_USD,Order_Amount);;
//		userDAO.editData(id, newUser);
//	}
//
//	private void deleteData(HttpServletRequest request, HttpServletResponse response) throws SQLException, IOException {
//		int id = Integer.parseInt(request.getParameter("id"));
//		userDAO.deleteData(id);
//
//	}
//}