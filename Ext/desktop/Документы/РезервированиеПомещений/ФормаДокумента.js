Ext.define('Документы.РезервированиеПомещений.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 309,width: 378,
	iconCls: 'bogus',
	title: 'Резервирование помещения',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРезервирования',
			style: 'position:absolute;left:96px;top:109px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:8px;top:182px;width:362px;height:41px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Помещение',
			style: 'position:absolute;left:96px;top:33px;width:274px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:114px;top:233px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:114px;top:257px;width:256px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:290px;top:233px;width:80px;height:19px;',
		},
	]
});