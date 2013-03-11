Ext.define('Документы.УстановкаСоответствияСчетовБУиНУ.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 594,
	iconCls: 'bogus',
	title: 'Установка соответствия счетов БУ и НУ',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:245px;width:490px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:269px;width:490px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:594px;height:25px;',
			items:
			[
				{
					text:'Подменю1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:296px;width:594px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:52px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:152px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:81px;width:578px;height:159px;',
			height: 159,width: 578,
			columns:
			[
				{
					text:'Учитывается',
				},
				{
					text:'НомерСтроки',
				},
				{
					text:'СчетБУ',
				},
				{
					text:'СчетКоррБУ',
				},
				{
					text:'ВидЗатратНУ',
				},
				{
					text:'СчетНУ',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:57px;width:578px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ПоТекущемуСоответствию',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'ЗаполнитьПоУмолчанию',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'СнятьФлажки',
				},
			]
		},
	]
});