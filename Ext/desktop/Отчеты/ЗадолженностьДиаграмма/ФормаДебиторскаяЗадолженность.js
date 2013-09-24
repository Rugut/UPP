Ext.require(['Данные.Отчеты.ЗадолженностьДиаграмма'], function () 
{
	Ext.define('Отчеты.ЗадолженностьДиаграмма.ФормаДебиторскаяЗадолженность',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:449px;',
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
					text:'Транспонировать',
					tooltip:'1ba3655-3e44-4bd9-ab1f-6be0573bc78',
				},
				{
					text:'Печать',
					tooltip:'Вывести на печать',
				},
				'-',
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
			width: 80,
			height: 19,
			style: 'position:absolute;left:62px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'На дату:',
			style: 'position:absolute;left:8px;top:33px;width:52px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:416px;top:33px;width:180px;height:19px;',
			width: 180,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Тип диаграммы:',
			style: 'position:absolute;left:326px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:57px;width:588px;height:46px;',
			height: 46,width: 588,
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
			name: 'ПолеНастройкиОрганизация',
			width: 296,
			height: 19,
			style: 'position:absolute;left:292px;top:0px;width:296px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:128px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:130px;top:0px;width:160px;height:19px;',
			width: 160,
			height: 19,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиВидВзаиморасчетов',
			width: 296,
			height: 19,
			style: 'position:absolute;left:292px;top:22px;width:296px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вид взаиморасчетов:',
			style: 'position:absolute;left:0px;top:22px;width:128px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:130px;top:22px;width:160px;height:19px;',
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