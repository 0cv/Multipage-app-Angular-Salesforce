global with sharing class ngMainController {
	@RemoteAction
	global static List<Account> getAccounts() {
		return [select id, name, billingcountry from Account limit 20];
	}
	@RemoteAction
	global static List<Contact> getContacts() {
		return [select id, LastName, FirstName from Contact limit 20];
	}
}