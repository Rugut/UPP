Ext.require(['Данные.Отчеты.ВзаиморасчетыСКомитентами'], function () 
{
	Ext.define('Отчеты.ВзаиморасчетыСКомитентами.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:437px;',
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
					text:'Заголовок',
					tooltip:'Заголовок отчета',
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
					]
				},
				'-',
				{
					text:'Сформировать',
					tooltip:'Выполнить формирование отчета',
				},
				'-',
				{
					text:'Заголовок',
					tooltip:'Заголовок отчета',
				},
				{
					text:'Настройка...',
					tooltip:'Дополнительная настройка',
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
			name: 'ДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:64px;top:33px;width:80px;height:19px;',
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
			style: 'position:absolute;left:173px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:51px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
			text: 'по:',
			style: 'position:absolute;left:149px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:258px;top:33px;width:19px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});