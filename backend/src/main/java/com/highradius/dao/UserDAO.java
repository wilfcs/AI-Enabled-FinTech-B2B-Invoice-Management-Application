package com.highradius.dao;

import com.highradius.model.*;

import java.sql.SQLException;
import java.util.*;


public interface UserDAO {
	
		// Method readData to read the whole data to use in servlets
		public List<POJO> readData();
		
		// Method addData to add the data to use in servlets
		public void addData(POJO user) throws SQLException;
		
		// Method editData to edit the data using its id to use in servlets
		public void editData(int id,POJO user) throws SQLException;
		
		// Method deleteData to delete the data using its id to use in servlets
		public boolean deleteData(int id) throws SQLException;
}
