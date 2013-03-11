Ext.define('Справочники.СотрудникиОрганизаций.ФормаВводаДанныхНДФЛ',
	{
	extend: 'Ext.window.Window',
	height: 389,width: 552,
	iconCls: 'bogus',
	title: 'Стандартные вычеты',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:364px;width:552px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеЗаписатьИЗакрыть',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:536px;height:348px;',
			height: 348,width: 536,
			items:
			[
				{
					title:'Вычеты',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:158px;width:522px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:522px;height:90px;',
			height: 90,width: 522,
			columns:
			[
				{
					text:'Период',
				},
				{
					text:'ВычетыЛичныеТекст',
				},
				{
					text:'ВычетыЛичныеПрименение',
				},
				{
					text:'КодВычетаЛичный',
				},
				{
					text:'Основание',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:182px;width:522px;height:90px;',
			height: 90,width: 522,
			columns:
			[
				{
					text:'КолонкаПериод',
				},
				{
					text:'Период',
				},
				{
					text:'ПериодЗавершения',
				},
				{
					text:'ВычетыНаДетейТекст',
				},
				{
					text:'ВычетыНаДетейПрименение',
				},
				{
					text:'КодВычетаНаДетей',
				},
				{
					text:'КоличествоДетей',
				},
				{
					text:'Основание',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:522px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПредоставленияВычетов',
			style: 'position:absolute;left:256px;top:303px;width:85px;height:19px;',
		},
					]
				},
				{
					title:'Статус',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодСтатусаНалогоплательщикаПоНДФЛ',
			style: 'position:absolute;left:115px;top:62px;width:120px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:40px;top:183px;width:488px;height:28px;',
			height: 28,width: 488,
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
					title:'Доходы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:522px;height:276px;',
			height: 276,width: 522,
			columns:
			[
				{
					text:'МесяцНалоговогоПериода',
				},
				{
					text:'Размер',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Год',
			style: 'position:absolute;left:67px;top:24px;width:60px;height:19px;',
		},
					]
				},
			]
		},
	]
});