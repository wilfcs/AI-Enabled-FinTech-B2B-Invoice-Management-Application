package com.highradius.model;


//  Class to encapsulate data and provides getters and setters for accessing and modifying that data. POJOs are typically used to represent entities or data structures in an application.

public class POJO {
	protected int Sl_No;
	protected String Customer_Order_Id,Sales_Org,Distribution_Channel,Company_Code,Order_Creation_Date,Order_Currency,Customer_Number,Amount_in_USD,Order_Amount;
	
	public POJO() {
	}

	public POJO(int sl_No, String customer_Order_Id, String sales_Org, String distribution_Channel, String company_Code,
			String order_Creation_Date, String order_Currency, String customer_Number, String amount_in_USD,
			String order_Amount) { // Parameterized constructor
		super();
		this.Sl_No = sl_No;
		this.Customer_Order_Id = customer_Order_Id;
		this.Sales_Org = sales_Org;
		this.Distribution_Channel = distribution_Channel;
		this.Company_Code = company_Code;
		this.Order_Creation_Date = order_Creation_Date;
		this.Order_Currency = order_Currency;
		this.Customer_Number = customer_Number;
		this.Amount_in_USD = amount_in_USD;
		this.Order_Amount = order_Amount;
	}
	
	public POJO(String customer_Order_Id, String sales_Org, String distribution_Channel, String company_Code,
			String order_Creation_Date, String order_Currency, String customer_Number, String amount_in_USD,
			String order_Amount) {
		super();
		this.Customer_Order_Id = customer_Order_Id;
		this.Sales_Org = sales_Org;
		this.Distribution_Channel = distribution_Channel;
		this.Company_Code = company_Code;
		this.Order_Creation_Date = order_Creation_Date;
		this.Order_Currency = order_Currency;
		this.Customer_Number = customer_Number;
		this.Amount_in_USD = amount_in_USD;
		this.Order_Amount = order_Amount;
	}

	
	// Getter and Setter methods for each attribute
	public int getSl_No() {
		return Sl_No;
	}

	public void setSl_No(int sl_No) {
		Sl_No = sl_No;
	}

	public String getCustomer_Order_Id() {
		return Customer_Order_Id;
	}

	public void setCustomer_Order_Id(String customer_Order_Id) {
		Customer_Order_Id = customer_Order_Id;
	}

	public String getSales_Org() {
		return Sales_Org;
	}

	public void setSales_Org(String sales_Org) {
		Sales_Org = sales_Org;
	}

	public String getDistribution_Channel() {
		return Distribution_Channel;
	}

	public void setDistribution_Channel(String distribution_Channel) {
		Distribution_Channel = distribution_Channel;
	}

	public String getCompany_Code() {
		return Company_Code;
	}

	public void setCompany_Code(String company_Code) {
		Company_Code = company_Code;
	}

	public String getOrder_Creation_Date() {
		return Order_Creation_Date;
	}

	public void setOrder_Creation_Date(String order_Creation_Date) {
		Order_Creation_Date = order_Creation_Date;
	}

	public String getOrder_Currency() {
		return Order_Currency;
	}

	public void setOrder_Currency(String order_Currency) {
		Order_Currency = order_Currency;
	}

	public String getCustomer_Number() {
		return Customer_Number;
	}

	public void setCustomer_Number(String customer_Number) {
		Customer_Number = customer_Number;
	}

	public String getAmount_in_USD() {
		return Amount_in_USD;
	}

	public void setAmount_in_USD(String amount_in_USD) {
		Amount_in_USD = amount_in_USD;
	}

	public String getOrder_Amount() {
		return Order_Amount;
	}

	public void setOrder_Amount(String order_Amount) {
		Order_Amount = order_Amount;
	}

	@Override
	public String toString() {
		return "POJO [Sl_No=" + Sl_No + ", Customer_Order_Id=" + Customer_Order_Id + ", Sales_Org=" + Sales_Org
				+ ", Distribution_Channel=" + Distribution_Channel + ", Company_Code=" + Company_Code
				+ ", Order_Creation_Date=" + Order_Creation_Date + ", Order_Currency=" + Order_Currency
				+ ", Customer_Number=" + Customer_Number + ", Amount_in_USD=" + Amount_in_USD + ", Order_Amount="
				+ Order_Amount + "]";
	}
	
	
	
}
