Ext.require(['Данные.Отчеты.ОтчетДиаграмма'], function () 
{
	Ext.define('Отчеты.ОтчетДиаграмма.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:586px;height:449px;',
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
			style: 'position:absolute;left:0px;top:0px;width:586px;height:25px;',
			width: 586,
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
					iconCls:'x-RestoreValues',
				},
				{
					text:'Сохранить значения...',
					tooltip:'Сохранить значения',
					iconCls:'x-SaveValues',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
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
					text:'Настройка...',
					tooltip:'Дополнительная настройка',
				},
				{
					text:'Сохранить значения...',
					tooltip:'Сохранить значения',
					iconCls:'x-SaveValues',
				},
				{
					text:'Восстановить значения',
					tooltip:'Восстановить значения',
					iconCls:'x-RestoreValues',
				},
				'-',
				{
					text:'Транспонировать',
					tooltip:'1ba3655-3e44-4bd9-ab1f-6be0573bc78',
				},
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
			name: 'ДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:66px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:166px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
			text: 'по:',
			style: 'position:absolute;left:148px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:248px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:378px;top:33px;width:200px;height:19px;',
			width: 200,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Тип диаграммы:',
			style: 'position:absolute;left:288px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:378px;top:57px;width:200px;height:19px;',
			width: 200,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьИмяРегистра',
			text: 'Раздел учета:',
			style: 'position:absolute;left:288px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:81px;width:570px;height:24px;',
			height: 24,width: 570,
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
			name: 'ПолеНастройки1',
			width: 246,
			height: 19,
			style: 'position:absolute;left:324px;top:0px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Настройка',
			style: 'position:absolute;left:0px;top:0px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиС1',
			width: 120,
			height: 19,
			style: 'position:absolute;left:324px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПо1',
			width: 120,
			height: 19,
			style: 'position:absolute;left:450px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:162px;top:0px;width:160px;height:19px;',
			width: 160,
			height: 19,
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:177px;width:570px;height:24px;',
			height: 24,width: 570,
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
			name: 'ПолеНастройки5',
			width: 246,
			height: 19,
			style: 'position:absolute;left:324px;top:0px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Настройка',
			style: 'position:absolute;left:0px;top:0px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиС5',
			width: 120,
			height: 19,
			style: 'position:absolute;left:324px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПо5',
			width: 120,
			height: 19,
			style: 'position:absolute;left:450px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:162px;top:0px;width:160px;height:19px;',
			width: 160,
			height: 19,
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:153px;width:570px;height:24px;',
			height: 24,width: 570,
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
			name: 'ПолеНастройки4',
			width: 246,
			height: 19,
			style: 'position:absolute;left:324px;top:0px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Настройка',
			style: 'position:absolute;left:0px;top:0px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиС4',
			width: 120,
			height: 19,
			style: 'position:absolute;left:324px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПо4',
			width: 120,
			height: 19,
			style: 'position:absolute;left:450px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:162px;top:0px;width:160px;height:19px;',
			width: 160,
			height: 19,
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:129px;width:570px;height:24px;',
			height: 24,width: 570,
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
			name: 'ПолеНастройки3',
			width: 246,
			height: 19,
			style: 'position:absolute;left:324px;top:0px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Настройка',
			style: 'position:absolute;left:0px;top:0px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиС3',
			width: 120,
			height: 19,
			style: 'position:absolute;left:324px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПо3',
			width: 120,
			height: 19,
			style: 'position:absolute;left:450px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:162px;top:0px;width:160px;height:19px;',
			width: 160,
			height: 19,
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:105px;width:570px;height:24px;',
			height: 24,width: 570,
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
			name: 'ПолеНастройки2',
			width: 246,
			height: 19,
			style: 'position:absolute;left:324px;top:0px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Настройка',
			style: 'position:absolute;left:0px;top:0px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиС2',
			width: 120,
			height: 19,
			style: 'position:absolute;left:324px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПо2',
			width: 120,
			height: 19,
			style: 'position:absolute;left:450px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:162px;top:0px;width:160px;height:19px;',
			width: 160,
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