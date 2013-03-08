Ext.define('Документы.ВводКоэффициентовИндексацииЗаработка.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 332,width: 550,
	iconCls: 'bogus',
	title: 'Ввод коэффициентов индексации заработка',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:280px;width:444px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:98px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Коэффициент',
			style: 'position:absolute;left:422px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:98px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Период',
			style: 'position:absolute;left:422px;top:33px;width:120px;height:19px;',
		},
	]
});