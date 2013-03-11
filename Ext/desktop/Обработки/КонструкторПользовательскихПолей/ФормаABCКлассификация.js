Ext.define('Обработки.КонструкторПользовательскихПолей.ФормаABCКлассификация',
	{
	extend: 'Ext.window.Window',
	height: 211,width: 511,
	iconCls: 'bogus',
	title: 'Настройка ABC-классификации',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:186px;width:511px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Процент1',
			style: 'position:absolute;left:157px;top:109px;width:54px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Процент2',
			style: 'position:absolute;left:157px;top:134px;width:54px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Процент3',
			style: 'position:absolute;left:157px;top:159px;width:54px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:156px;top:8px;width:347px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Поле',
			style: 'position:absolute;left:156px;top:60px;width:347px;height:19px;',
		},
	]
});