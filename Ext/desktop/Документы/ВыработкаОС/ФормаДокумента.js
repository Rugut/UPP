Ext.define('Документы.ВыработкаОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 401,width: 584,
	iconCls: 'bogus',
	title: 'Выработка ОС',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:349px;width:482px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:325px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:584px;height:25px;',
			items:
			[
				{
					text:'Подменю1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:376px;width:584px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:100px;width:568px;height:220px;',
			height: 220,width: 568,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ИнвНомер',
				},
				{
					text:'ОсновноеСредство',
				},
				{
					text:'ПараметрВыработкиОС',
				},
				{
					text:'Количество',
				},
				{
					text:'Единица',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:76px;width:568px;height:24px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие8',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				{
					text:'ЗаполнитьПоНаименованию',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});