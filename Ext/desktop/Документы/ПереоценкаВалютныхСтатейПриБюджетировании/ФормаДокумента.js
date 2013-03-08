Ext.define('Документы.ПереоценкаВалютныхСтатейПриБюджетировании.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 238,width: 356,
	iconCls: 'bogus',
	title: 'Переоценка валютных статей при бюджетировании',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:108px;top:162px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:108px;top:186px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПереоценки',
			style: 'position:absolute;left:108px;top:81px;width:99px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
			style: 'position:absolute;left:108px;top:57px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетОтнесенияКурсовыхРазниц',
			style: 'position:absolute;left:108px;top:105px;width:99px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода2',
			style: 'position:absolute;left:108px;top:138px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:108px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:216px;top:33px;width:132px;height:19px;',
		},
	]
});