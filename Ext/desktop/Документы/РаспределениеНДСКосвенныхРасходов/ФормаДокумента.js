Ext.define('Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 470,width: 715,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:715px;height:25px;',
			items:
			[
				{
					text:'Разделитель5',
				},
				{
					text:'Подменю2',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ЗаполнитьДокумент',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:445px;width:715px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:418px;width:613px;height:19px;',
		},
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
			name: 'Организация',
			style: 'position:absolute;left:94px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:426px;top:56px;width:281px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:85px;width:699px;height:328px;',
			height: 328,width: 699,
			items:
			[
				{
					title:'Реализация',
				},
				{
					title:'КосвенныеРасходы',
				},
				{
					title:'СчетаСписанияНДС',
				},
			]
		},
	]
});