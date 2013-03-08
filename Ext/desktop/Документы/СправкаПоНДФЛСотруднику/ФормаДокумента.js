Ext.define('Документы.СправкаПоНДФЛСотруднику.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 600,width: 742,
	iconCls: 'bogus',
	title: 'Справка о доходах (2-НДФЛ) для сотрудника',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:450px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:550px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:114px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:450px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:114px;top:550px;width:620px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НалоговыйПериод',
			style: 'position:absolute;left:114px;top:58px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефон',
			style: 'position:absolute;left:574px;top:526px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьПодписавшегоЛица',
			style: 'position:absolute;left:352px;top:526px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПоОКАТО',
			style: 'position:absolute;left:599px;top:147px;width:135px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СправкуПодписал',
			style: 'position:absolute;left:114px;top:526px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:114px;top:83px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодИФНС',
			style: 'position:absolute;left:274px;top:58px;width:60px;height:19px;',
		},
	]
});