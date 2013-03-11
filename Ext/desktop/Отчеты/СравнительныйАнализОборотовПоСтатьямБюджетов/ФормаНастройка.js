Ext.define('Отчеты.СравнительныйАнализОборотовПоСтатьямБюджетов.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	height: 389,width: 490,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:474px;height:348px;',
			height: 348,width: 474,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяБаланса',
			style: 'position:absolute;left:96px;top:6px;width:370px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:221px;width:260px;height:101px;',
			height: 101,width: 260,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Представление',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:197px;width:460px;height:24px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'УстановитьВсе',
				},
				{
					text:'СнятьВсе',
				},
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:73px;width:460px;height:100px;',
			height: 100,width: 460,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидДанных',
				},
				{
					text:'Сценарий',
				},
				{
					text:'ДатаНач',
				},
				{
					text:'ДатаКон',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:49px;width:460px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
			]
		},
					]
				},
				{
					title:'Группировки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:25px;width:460px;height:297px;',
			height: 297,width: 460,
			columns:
			[
				{
					text:'Поле',
				},
				{
					text:'Тип',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:460px;height:25px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Страница2',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:298px;',
			height: 298,width: 460,
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
			style: 'position:absolute;left:6px;top:0px;width:460px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Поля',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:298px;',
			height: 298,width: 460,
			columns:
			[
				{
					text:'Поле',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:460px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:364px;width:490px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Справка',
				},
				{
					text:'Разделитель1',
				},
			]
		},
	]
});