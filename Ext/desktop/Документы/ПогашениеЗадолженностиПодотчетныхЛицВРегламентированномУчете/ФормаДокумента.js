Ext.define('Документы.ПогашениеЗадолженностиПодотчетныхЛицВРегламентированномУчете.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 396,width: 652,
	iconCls: 'bogus',
	title: 'Погашение задолженности подотчетных лиц в регл. учете',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:344px;width:548px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:441px;top:57px;width:203px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Очистить',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:371px;width:652px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:84px;width:636px;height:255px;',
			height: 255,width: 636,
			items:
			[
				{
					title:'Начисления',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:622px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ДействиеЗаполнитьДолгамиПодотчетныхЛиц',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:27px;width:622px;height:202px;',
			height: 202,width: 622,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Физлицо',
				},
				{
					text:'ПодразделениеОрганизации',
				},
				{
					text:'Результат',
				},
				{
					text:'РасчетныйДокумент',
				},
				{
					text:'ВалютаВзаиморасчетов',
				},
				{
					text:'СуммаВзаиморасчетов',
				},
				{
					text:'КурсВзаиморасчетов',
				},
				{
					text:'КратностьВзаиморасчетов',
				},
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
			style: 'position:absolute;left:6px;top:24px;width:622px;height:211px;',
			height: 211,width: 622,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Физлицо',
				},
				{
					text:'ПодразделениеОрганизации',
				},
				{
					text:'Результат',
				},
				{
					text:'РасчетныйДокумент',
				},
				{
					text:'ВалютаВзаиморасчетов',
				},
				{
					text:'СуммаВзаиморасчетов',
				},
				{
					text:'КурсВзаиморасчетов',
				},
				{
					text:'КратностьВзаиморасчетов',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:622px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ДействиеЗаполнитьДолгамиПодотчетныхЛиц',
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
			name: 'ПредставлениеПериодаРегистрации',
			style: 'position:absolute;left:441px;top:33px;width:203px;height:19px;',
		},
	]
});