Ext.define('Отчеты.ДиаграммаЗагрузкиРабочихЦентров.Форма',
	{
	extend: 'Ext.window.Window',
	height: 460,width: 618,
	iconCls: 'bogus',
	title: 'Диаграмма загрузки рабочих центров',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:618px;height:25px;',
			items:
			[
				{
					text:'Сформировать1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СохранитьЗначения1',
				},
				{
					text:'Подменю',
				},
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ВосстановитьЗначения1',
				},
				{
					text:'Справка1',
				},
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:328px;top:33px;width:19px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:602px;height:392px;',
			height: 392,width: 602,
			items:
			[
				{
					title:'Диаграмма',
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:588px;height:342px;',
			height: 342,width: 588,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:588px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:66px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:206px;top:33px;width:120px;height:19px;',
		},
	]
});