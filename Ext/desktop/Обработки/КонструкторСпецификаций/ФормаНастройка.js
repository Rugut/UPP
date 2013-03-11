Ext.define('Обработки.КонструкторСпецификаций.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	height: 359,width: 490,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:474px;height:315px;',
			height: 315,width: 474,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:124px;width:460px;height:165px;',
			height: 165,width: 460,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Представление',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:100px;width:280px;height:24px;',
			items:
			[
				{
					text:'УстановитьВсе',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'СнятьВсе',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:14px;top:22px;width:452px;height:20px;',
			height: 20,width: 452,
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
					title:'Группировки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:212px;height:265px;',
			height: 265,width: 212,
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:258px;top:0px;width:208px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:258px;top:24px;width:208px;height:265px;',
			height: 265,width: 208,
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
			style: 'position:absolute;left:227px;top:117px;width:24px;height:62px;',
			items:
			[
				{
					text:'ПеренестиВСтроки',
				},
				{
					text:'ПеренестиВКолонки',
				},
			]
		},
					]
				},
				{
					title:'ИнтервалыГруппировок',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:32px;width:460px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:56px;width:460px;height:233px;',
			height: 233,width: 460,
			columns:
			[
				{
					text:'ВГраница',
				},
				{
					text:'Название',
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
			style: 'position:absolute;left:6px;top:24px;width:460px;height:265px;',
			height: 265,width: 460,
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
			style: 'position:absolute;left:6px;top:50px;width:460px;height:239px;',
			height: 239,width: 460,
			columns:
			[
				{
					text:'Поле',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:26px;width:460px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Сортировка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:265px;',
			height: 265,width: 460,
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
			style: 'position:absolute;left:0px;top:334px;width:490px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Справка',
				},
				{
					text:'Закрыть',
				},
			]
		},
	]
});