Ext.define('Справочники.Номенклатура.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	height: 292,width: 698,
	iconCls: 'bogus',
	title: 'Настройка формы элемента Номенклатура',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:698px;height:25px;',
			items:
			[
				{
					text:'ВосстановитьНастройки',
				},
				{
					text:'СохранитьНастройки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:698px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыНастройкиПоУмолчанию',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыВыполнить',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:682px;height:226px;',
			height: 226,width: 682,
			items:
			[
				{
					title:'НастройкаСтраниц',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:668px;height:24px;',
			items:
			[
				{
					text:'ДействиеОтметитьВсеСтраницы',
				},
				{
					text:'ДействиеСнятьВсеСтраницы',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:668px;height:170px;',
			height: 170,width: 668,
			columns:
			[
				{
					text:'Видимость',
				},
				{
					text:'Представление',
				},
				{
					text:'ВидимостьСистемная',
				},
			]
		},
					]
				},
				{
					title:'НастройкаОбязательныхРеквизитов',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:668px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:668px;height:170px;',
			height: 170,width: 668,
			columns:
			[
				{
					text:'Доступность',
				},
				{
					text:'Обязательность',
				},
				{
					text:'Уникальность',
				},
				{
					text:'Представление',
				},
				{
					text:'ДоступностьСистемная',
				},
				{
					text:'ОбязательностьСистемная',
				},
			]
		},
					]
				},
				{
					title:'НастройкаОбязательнойНоменклатуры',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:668px;height:24px;',
			items:
			[
				{
					text:'Действие7',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:668px;height:170px;',
			height: 170,width: 668,
			columns:
			[
				{
					text:'Доступность',
				},
				{
					text:'Обязательность',
				},
				{
					text:'Представление',
				},
			]
		},
					]
				},
			]
		},
	]
});