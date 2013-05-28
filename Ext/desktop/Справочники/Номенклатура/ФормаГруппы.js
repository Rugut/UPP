Ext.define('Справочники.Номенклатура.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:422px;height:169px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группа Номенклатура',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:332px;top:60px;width:23px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 55,
			height: 19,
			style: 'position:absolute;left:359px;top:60px;width:55px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:60px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 211,
			height: 19,
			style: 'position:absolute;left:117px;top:60px;width:211px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Родитель:',
			style: 'position:absolute;left:8px;top:33px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Родитель',
			width: 297,
			height: 19,
			style: 'position:absolute;left:117px;top:33px;width:297px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидНоменклатуры',
			text: 'Вид номенклатуры:',
			style: 'position:absolute;left:8px;top:87px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ВидНоменклатуры',
			width: 297,
			height: 19,
			style: 'position:absolute;left:117px;top:87px;width:297px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПорядокПрисвоенияСерийногоНомера',
			text: 'Порядок присвоения серийного номера:',
			style: 'position:absolute;left:8px;top:109px;width:108px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ПорядокПрисвоенияСерийногоНомера',
			width: 297,
			height: 19,
			style: 'position:absolute;left:117px;top:114px;width:297px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:422px;height:25px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'Настройка доступа',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:144px;width:422px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});