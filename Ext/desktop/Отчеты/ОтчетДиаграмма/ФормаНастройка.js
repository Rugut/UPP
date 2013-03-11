Ext.define('Отчеты.ОтчетДиаграмма.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	height: 314,width: 490,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:474px;height:270px;',
			height: 270,width: 474,
			items:
			[
				{
					title:'Настройка',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:64px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:164px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:246px;top:6px;width:20px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:30px;width:460px;height:19px;',
			height: 19,width: 460,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
				{
					title:'НастройкаДиаграммы',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:46px;width:460px;height:127px;',
			height: 127,width: 460,
			items:
			[
				{
					title:'Круговая',
					items:
					[
					]
				},
				{
					title:'КруговаяОбъемная',
					items:
					[
					]
				},
				{
					title:'Гистограмма',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазовоеЗначение',
			style: 'position:absolute;left:130px;top:24px;width:82px;height:19px;',
		},
					]
				},
				{
					title:'ГистограммаОбъемная',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазовоеЗначение1',
			style: 'position:absolute;left:130px;top:24px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'График',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазовоеЗначение5',
			style: 'position:absolute;left:130px;top:0px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'ГрафикСОбластями',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазовоеЗначение3',
			style: 'position:absolute;left:130px;top:0px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Изометрическая',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазовоеЗначение4',
			style: 'position:absolute;left:130px;top:48px;width:82px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Страница3',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:212px;height:195px;',
			height: 195,width: 212,
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
			style: 'position:absolute;left:6px;top:0px;width:212px;height:24px;',
			items:
			[
				{
					text:'Удалить',
				},
				{
					text:'Добавить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:254px;top:24px;width:212px;height:195px;',
			height: 195,width: 212,
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
			style: 'position:absolute;left:254px;top:0px;width:212px;height:24px;',
			items:
			[
				{
					text:'Добавить',
				},
				{
					text:'Удалить',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МаксимумСерийКоличество',
			style: 'position:absolute;left:398px;top:225px;width:68px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:224px;top:24px;width:24px;height:195px;',
			items:
			[
				{
					text:'Транспонировать',
				},
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
			style: 'position:absolute;left:6px;top:24px;width:460px;height:220px;',
			height: 220,width: 460,
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
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:220px;',
			height: 220,width: 460,
			columns:
			[
				{
					text:'Имя',
				},
				{
					text:'НаправлениеСортировки',
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
			style: 'position:absolute;left:0px;top:289px;width:490px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Справка',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Закрыть',
				},
				{
					text:'ОК',
				},
			]
		},
	]
});