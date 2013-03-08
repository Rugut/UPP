Ext.define('Документы.ПланированиеОбучения.ФормаРаспределенияОбучения',
	{
	extend: 'Ext.window.Window',
	height: 88,width: 458,
	iconCls: 'bogus',
	title: 'Помощник равномерного распределения обучения по периоду ',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсОбученияДляРаспределения',
			style: 'position:absolute;left:151px;top:8px;width:299px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РаспределяемоеКоличество',
			style: 'position:absolute;left:151px;top:36px;width:31px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаС',
			style: 'position:absolute;left:241px;top:36px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПо',
			style: 'position:absolute;left:346px;top:36px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:431px;top:36px;width:19px;height:19px;',
		},
	]
});