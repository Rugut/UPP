Ext.define('Отчеты.СправкаРасчетРублеваяСуммаДокументаВВалюте.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:430px;height:87px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справка-расчет ""Рублевая сумма документа в иностранной валюте""',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВвода1',
			style: 'position:absolute;left:81px;top:33px;width:341px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Документ:',
			style: 'position:absolute;left:8px;top:33px;width:71px;height:21px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:430px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Сохранить значения...',
				},
				{
					text:'Восстановить значения...',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:62px;width:430px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});