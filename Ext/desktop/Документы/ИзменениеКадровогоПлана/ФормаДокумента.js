Ext.define('Документы.ИзменениеКадровогоПлана.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 423,width: 549,
	iconCls: 'bogus',
	title: 'Изменение кадрового плана',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:93px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:193px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:93px;top:371px;width:448px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:93px;top:347px;width:448px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИзменений',
			style: 'position:absolute;left:421px;top:33px;width:120px;height:19px;',
		},
	]
});