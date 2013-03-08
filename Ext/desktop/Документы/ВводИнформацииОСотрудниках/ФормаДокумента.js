Ext.define('Документы.ВводИнформацииОСотрудниках.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 374,width: 400,
	iconCls: 'bogus',
	title: 'Ввод информации о сотрудниках',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:312px;top:322px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:107px;top:322px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:107px;top:298px;width:285px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:8px;top:252px;width:384px;height:41px;',
		},
	]
});