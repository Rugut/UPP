Ext.define('Документы.НДФЛПерерасчет.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 401,width: 697,
	iconCls: 'bogus',
	title: 'Перерасчет НДФЛ',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:324px;width:593px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:349px;width:593px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодВзаиморасчетов',
			style: 'position:absolute;left:423px;top:81px;width:266px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НалоговыйПериод',
			style: 'position:absolute;left:96px;top:81px;width:80px;height:19px;',
		},
	]
});