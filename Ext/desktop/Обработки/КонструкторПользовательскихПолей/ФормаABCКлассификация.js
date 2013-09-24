Ext.require(['Данные.Обработки.КонструкторПользовательскихПолей'], function () 
{
	Ext.define('Обработки.КонструкторПользовательскихПолей.ФормаABCКлассификация',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:511px;height:211px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка ABC-классификации',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьПоле',
			text: 'Анализируемый объект:',
			style: 'position:absolute;left:8px;top:60px;width:142px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:156px;top:34px;width:347px;height:19px;',
			width: 347,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьПоказатель',
			text: 'Анализируемый параметр:',
			style: 'position:absolute;left:8px;top:34px;width:142px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Процент1',
			style: 'position:absolute;left:157px;top:109px;width:54px;height:19px;',
			width: 54,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьПроцент1',
			text: 'A-класс',
			style: 'position:absolute;left:8px;top:109px;width:142px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Процент2',
			style: 'position:absolute;left:157px;top:134px;width:54px;height:19px;',
			width: 54,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьПроцент2',
			text: 'B-класс',
			style: 'position:absolute;left:8px;top:134px;width:142px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Процент3',
			style: 'position:absolute;left:157px;top:159px;width:54px;height:19px;',
			width: 54,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьПроцент3',
			text: 'C-класс',
			style: 'position:absolute;left:8px;top:159px;width:142px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Критерии распределения (процент от общей суммы параметров распределения)',
			style: 'position:absolute;left:8px;top:86px;width:495px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСимволПроцент1',
			text: '%',
			style: 'position:absolute;left:216px;top:109px;width:14px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСимволПроцент2',
			text: '%',
			style: 'position:absolute;left:216px;top:134px;width:14px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСимволПроцент3',
			text: '%',
			style: 'position:absolute;left:216px;top:159px;width:14px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:8px;width:142px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 347,
			height: 19,
			style: 'position:absolute;left:156px;top:8px;width:347px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Поле',
			width: 347,
			height: 19,
			style: 'position:absolute;left:156px;top:60px;width:347px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:186px;width:511px;height:25px;',
			width: 511,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});