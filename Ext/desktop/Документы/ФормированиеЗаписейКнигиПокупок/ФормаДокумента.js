Ext.define('Документы.ФормированиеЗаписейКнигиПокупок.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 709,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:709px;height:25px;',
			items:
			[
				{
					text:'Разделитель5',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ЗаполнитьДокумент',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ПроводкиДтКт',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:396px;width:709px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Печать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:369px;width:611px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:419px;top:57px;width:282px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:99px;width:693px;height:267px;',
			height: 267,width: 693,
			items:
			[
				{
					title:'ВычетПоПриобретеннымЦенностям',
				},
				{
					title:'НДСсАвансов',
				},
				{
					title:'НДССАвансовВыданных',
				},
				{
					title:'ВычетНДСПоНалоговомуАгенту',
				},
				{
					title:'ВычетПриИзмененииСтоимости',
				},
			]
		},
	]
});