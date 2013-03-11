Ext.define('Отчеты.СправкаРасчетРублеваяСуммаДокументаВВалюте.Форма',
	{
	extend: 'Ext.window.Window',
	height: 87,width: 430,
	iconCls: 'bogus',
	title: 'Справка-расчет ""Рублевая сумма документа в иностранной валюте""',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:430px;height:25px;',
			items:
			[
				{
					text:'СохранитьЗначения___',
				},
				{
					text:'ВосстановитьЗначения___',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:62px;width:430px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода1',
			style: 'position:absolute;left:81px;top:33px;width:341px;height:21px;',
		},
	]
});