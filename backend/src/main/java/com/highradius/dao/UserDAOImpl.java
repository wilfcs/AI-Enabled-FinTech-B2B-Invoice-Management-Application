package com.highradius.dao;

import com.highradius.connection.*;
import com.highradius.model.*;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class UserDAOImpl implements UserDAO{
	
	// queries for read, add, edit and deleting users in the table
	private static final String ReadAllUsers = "select * from h2h_oap";
	private static final String AddUser = "insert into h2h_oap "+"(Sl_No,Customer_Order_Id,Sales_Org,Distribution_Channel,Company_Code,Order_Creation_Date,Order_Currency,Customer_Number,Amount_in_USD,Order_Amount) values "+" (?,?,?,?,?,?,?,?,?,?)";
	private static final String EditUser = "update h2h_oap set Customer_Order_Id = ?,Sales_Org=?,Distribution_Channel=?,Company_Code=?,Order_Creation_Date=?,Order_Currency=?,Customer_Number=?,Amount_in_USD=?,Order_Amount=? where Sl_no = ?";
	private static final String DeleteUser = "delete from h2h_oap where Sl_no = ?";
	
	public UserDAOImpl() {
	}
	
	// method from userdao interface to read database
	public List<POJO> readData(){
		List<POJO> users = new ArrayList<>();
		
		try (Connection connection = DbConnection.connect()){
			
			//Prepare a SQL statement to retrieve all users from the database
			PreparedStatement preparedStatement = connection.prepareStatement(ReadAllUsers);
			System.out.println(preparedStatement);
			
			ResultSet result = preparedStatement.executeQuery();
			
			// Retrieve the values for each column 
			while (result.next() && result.getInt("Sl_No")<10) {
				int sl_No = result.getInt("Sl_No");
				String customer_Order_Id = result.getString("Customer_Order_Id");
				String sales_Org = result.getString("Sales_Org");
				String distribution_Channel = result.getString("Distribution_Channel");
				String company_Code = result.getString("Company_Code");
				String order_Creation_Date = result.getString("Order_Creation_Date");
				String order_Currency = result.getString("Order_Currency");
				String customer_Number = result.getString("Customer_Number");
				String amount_in_USD = result.getString("Amount_in_USD");
				String order_Amount = result.getString("Order_Amount");
				users.add(new POJO(sl_No, customer_Order_Id,sales_Org,distribution_Channel,company_Code,order_Creation_Date, order_Currency,customer_Number,amount_in_USD,order_Amount));
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return users;
	};
	
	// method from userdao interface to add to database
	public void addData(POJO user) throws SQLException {
		System.out.println(AddUser);
		// try-with-resource statement will auto close the connection.
		//Set the values for each parameter in the prepared statement using the corresponding user object's getter methods. 
		//The values are retrieved from the POJO object and passed to the statement
		try (Connection connection = DbConnection.connect()){
			PreparedStatement preparedStatement = connection.prepareStatement(AddUser);
			preparedStatement.setInt(1, user.getSl_No());
			preparedStatement.setString(2, user.getCustomer_Order_Id());
			preparedStatement.setString(3, user.getSales_Org());
			preparedStatement.setString(4, user.getDistribution_Channel());
			preparedStatement.setString(5, user.getCompany_Code());
			preparedStatement.setString(6, user.getOrder_Creation_Date());
			preparedStatement.setString(7, user.getOrder_Currency());
			preparedStatement.setString(8, user.getCustomer_Number());
			preparedStatement.setString(9, user.getAmount_in_USD());
			preparedStatement.setString(10, user.getOrder_Amount());
			System.out.println(preparedStatement);
			preparedStatement.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	// method from userdao interface to edit database
	public void editData(int id,POJO user) throws SQLException {
		System.out.println(EditUser);
		try (Connection connection = DbConnection.connect()){
			PreparedStatement preparedStatement = connection.prepareStatement(EditUser);
			preparedStatement.setInt(10, id);
			preparedStatement.setString(1, user.getCustomer_Order_Id());
			preparedStatement.setString(2, user.getSales_Org());
			preparedStatement.setString(3, user.getDistribution_Channel());
			preparedStatement.setString(4, user.getCompany_Code());
			preparedStatement.setString(5, user.getOrder_Creation_Date());
			preparedStatement.setString(6, user.getOrder_Currency());
			preparedStatement.setString(7, user.getCustomer_Number());
			preparedStatement.setString(8, user.getAmount_in_USD());
			preparedStatement.setString(9, user.getOrder_Amount());
			System.out.println(preparedStatement);
			preparedStatement.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
	}
	
	// method from userdao interface to delete from database
	public boolean deleteData(int id) throws SQLException {
		//boolean variable rowDeleted to track whether the deletion was successful
		boolean rowDeleted;
		try (Connection connection = DbConnection.connect()){
			PreparedStatement statement = connection.prepareStatement(DeleteUser);
			statement.setInt(1, id);
			// If the number of affected rows is greater than 0, it means the deletion was successful, and rowDeleted is set to true
			rowDeleted = statement.executeUpdate() > 0;
			System.out.println(statement);
		}
		return rowDeleted;
	}

}
