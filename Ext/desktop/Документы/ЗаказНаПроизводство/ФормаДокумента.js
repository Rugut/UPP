Ext.define('Документы.ЗаказНаПроизводство.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 424,width: 657,
	iconCls: 'bogus',
	title: 'Документ Заказ на производство',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:90px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:371px;width:559px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:450px;top:56px;width:199px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИсполнения',
			style: 'position:absolute;left:90px;top:106px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнойЗаказНаПроизводство',
			style: 'position:absolute;left:450px;top:81px;width:199px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаЗапуска',
			style: 'position:absolute;left:90px;top:81px;width:80px;height:19px;',
		},
	]
});