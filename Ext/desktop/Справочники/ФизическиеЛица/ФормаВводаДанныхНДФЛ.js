Ext.define('Справочники.ФизическиеЛица.ФормаВводаДанныхНДФЛ',
	{
	extend: 'Ext.window.Window',
	height: 373,width: 692,
	iconCls: 'bogus',
	title: 'Физические лица',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:348px;width:692px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:676px;height:332px;',
			height: 332,width: 676,
			items:
			[
				{
					title:'Вычеты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:222px;width:662px;height:82px;',
			height: 82,width: 662,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Период',
				},
				{
					text:'ПрименятьВычетыТекст',
				},
				{
					text:'ВычетыПрименение',
				},
				{
					text:'Организация',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:285px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:198px;width:662px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:285px;height:129px;',
			height: 129,width: 285,
			columns:
			[
				{
					text:'Картинка',
				},
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
			style: 'position:absolute;left:297px;top:46px;width:371px;height:129px;',
			height: 129,width: 371,
			columns:
			[
				{
					text:'Картинка',
				},
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
			style: 'position:absolute;left:297px;top:22px;width:371px;height:24px;',
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
				{
					title:'СтатусНалогоплательщика',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодСтатусаНалогоплательщикаПоНДФЛ',
			style: 'position:absolute;left:104px;top:51px;width:120px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:29px;top:172px;width:553px;height:28px;',
			height: 28,width: 553,
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
			style: 'position:absolute;left:6px;top:44px;width:661px;height:261px;',
			height: 261,width: 661,
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
			style: 'position:absolute;left:404px;top:6px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:140px;top:6px;width:220px;height:19px;',
		},
					]
				},
			]
		},
	]
});