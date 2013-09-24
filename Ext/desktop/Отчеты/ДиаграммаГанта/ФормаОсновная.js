Ext.require(['Данные.Отчеты.ДиаграммаГанта'], function () 
{
	Ext.define('Отчеты.ДиаграммаГанта.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:586px;height:457px;',
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
			name: 'Надпись3',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'по:',
			style: 'position:absolute;left:148px;top:33px;width:16px;height:19px;text-align:center;',
		},
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
					text:'Печать',
					tooltip:'Вывести на печать',
				},
				'-',
				{
					text:'Отбор',
					tooltip:'Отбор данных отчета',
				},
				{
					text:'Настройка...',
					tooltip:'Дополнительная настройка',
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
					tooltip:'Отбор данных отчета',
				},
				'-',
				{
					text:'Настройка...',
					tooltip:'Дополнительная настройка',
				},
				'-',
				{
					text:'Печать',
					tooltip:'Вывести на печать',
				},
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:248px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:57px;width:570px;height:24px;',
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
			style: 'position:absolute;left:0px;top:0px;width:160px;height:18px;',
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
			name: 'ПолеНастройки2',
			width: 246,
			height: 19,
			style: 'position:absolute;left:324px;top:0px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Настройка',
			style: 'position:absolute;left:0px;top:0px;width:160px;height:18px;',
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
		{
			xtype: 'combobox',
			style: 'position:absolute;left:366px;top:33px;width:212px;height:19px;',
			width: 212,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьВидаДиаграммы',
			text: 'Раздел учета:',
			style: 'position:absolute;left:288px;top:33px;width:76px;height:19px;',
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
			name: 'ПолеНастройки3',
			width: 246,
			height: 19,
			style: 'position:absolute;left:324px;top:0px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Настройка',
			style: 'position:absolute;left:0px;top:0px;width:160px;height:18px;',
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
		],
	}],
	dockedItems:
	[
	]
	});
});