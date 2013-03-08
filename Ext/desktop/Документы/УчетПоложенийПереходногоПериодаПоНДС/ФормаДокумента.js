Ext.define('Документы.УчетПоложенийПереходногоПериодаПоНДС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 709,
	iconCls: 'bogus',
	title: '',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:369px;width:611px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:419px;top:57px;width:282px;height:19px;',
		},
	]
});