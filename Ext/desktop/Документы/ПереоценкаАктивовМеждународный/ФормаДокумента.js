Ext.define('Документы.ПереоценкаАктивовМеждународный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 446,width: 460,
	iconCls: 'bogus',
	title: '',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:258px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:358px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:394px;width:356px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:81px;width:358px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяПрочихДоходов',
			style: 'position:absolute;left:139px;top:105px;width:313px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяПрочихРасходов',
			style: 'position:absolute;left:139px;top:130px;width:313px;height:19px;',
		},
	]
});