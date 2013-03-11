Ext.define('Документы.ВводНачальныхОстатковПоВзаиморасчетам.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 444,width: 723,
	iconCls: 'bogus',
	title: 'Ввод начальных остатков по взаиморасчетам',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:104px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:206px;top:33px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:392px;width:619px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:104px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:723px;height:25px;',
			items:
			[
				{
					text:'Разделитель4',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Подменю2',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:419px;width:723px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
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
			style: 'position:absolute;left:8px;top:104px;width:707px;height:258px;',
			height: 258,width: 707,
			items:
			[
				{
					title:'ДанныеПоРасчетам',
				},
				{
					title:'ДанныеПоАвансам',
				},
				{
					title:'РезервыПоСомнительнымДолгам',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:368px;width:619px;height:19px;',
		},
	]
});