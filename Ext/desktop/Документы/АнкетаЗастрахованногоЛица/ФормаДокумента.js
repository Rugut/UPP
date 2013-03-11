Ext.define('Документы.АнкетаЗастрахованногоЛица.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 470,width: 645,
	iconCls: 'bogus',
	title: 'Анкета застрахованного лица (АДВ-1)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:645px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие5',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие6',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие3',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель4',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:445px;width:645px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Записать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Проверить',
				},
				{
					text:'ПроверитьВCheckUFA',
				},
				{
					text:'РазделительПечать',
				},
				{
					text:'ОК',
				},
				{
					text:'НаДискетку',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Файл',
				},
				{
					text:'ПроверитьВCheckXML',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:418px;width:543px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:629px;height:48px;',
			height: 48,width: 629,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:122px;width:629px;height:269px;',
			height: 269,width: 629,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:629px;height:41px;',
			height: 41,width: 629,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});