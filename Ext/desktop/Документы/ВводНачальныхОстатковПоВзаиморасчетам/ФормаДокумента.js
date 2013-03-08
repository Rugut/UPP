Ext.define('Документы.ВводНачальныхОстатковПоВзаиморасчетам.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 444,width: 723,
	iconCls: 'bogus',
	title: 'Ввод начальных остатков по взаиморасчетам',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:104px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:206px;top:33px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:392px;width:619px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:104px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:368px;width:619px;height:19px;',
		},
	]
});