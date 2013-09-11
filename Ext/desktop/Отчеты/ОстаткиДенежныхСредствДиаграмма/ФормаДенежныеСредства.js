Ext.require(['Данные.Отчеты.ОстаткиДенежныхСредствДиаграмма'], function () 
{
	Ext.define('Отчеты.ОстаткиДенежныхСредствДиаграмма.ФормаДенежныеСредства',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: '',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			width: 604,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Сформировать',
					tooltip:'Выполнить формирование отчета',
				},
				{
					text:'Настройка...',
					tooltip:'Дополнительная настройка',
				},
				{
					text:'Отбор',
					tooltip:'',
				},
				{
					text:'Восстановить значения...',
					tooltip:'Восстановить значения',
				},
				{
					text:'Сохранить значения...',
					tooltip:'Сохранить значения',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
				},
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
				{
					text:'Транспонировать',
					tooltip:'1ba3655-3e44-4bd9-ab1f-6be0573bc78',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
					tooltip:'Выполнить формирование отчета',
				},
				'-',
				{
					text:'Отбор',
					tooltip:'',
				},
				'-',
				{
					text:'Транспонировать',
					tooltip:'1ba3655-3e44-4bd9-ab1f-6be0573bc78',
				},
				'-',
				{
					text:'Настройка...',
					tooltip:'Дополнительная настройка',
				},
				{
					text:'Восстановить значения',
					tooltip:'Восстановить значения',
				},
				{
					text:'Сохранить значения...',
					tooltip:'Сохранить значения',
				},
				'-',
				{
					text:'Печать',
					tooltip:'Вывести на печать',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКон',
			width: 97,
			height: 19,
			style: 'position:absolute;left:68px;top:33px;width:97px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'На дату::',
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:377px;top:33px;width:219px;height:19px;',
			width: 219,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Тип диаграммы:',
			style: 'position:absolute;left:288px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:60px;width:588px;height:72px;',
			height: 72,width: 588,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиВидДенежныхСредств',
			width: 300,
			height: 19,
			style: 'position:absolute;left:288px;top:0px;width:300px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Наличные, безналичные:',
			style: 'position:absolute;left:0px;top:0px;width:156px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:158px;top:0px;width:128px;height:19px;',
			width: 128,
			height: 19,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиВалютаДенежныхСредств',
			width: 300,
			height: 19,
			style: 'position:absolute;left:288px;top:24px;width:300px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Валюта денежных средств:',
			style: 'position:absolute;left:0px;top:24px;width:156px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:158px;top:24px;width:128px;height:19px;',
			width: 128,
			height: 19,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиБанковскийСчетКасса',
			width: 300,
			height: 19,
			style: 'position:absolute;left:288px;top:48px;width:300px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Банковский счет, касса:',
			style: 'position:absolute;left:0px;top:48px;width:156px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:158px;top:48px;width:128px;height:19px;',
			width: 128,
			height: 19,
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});