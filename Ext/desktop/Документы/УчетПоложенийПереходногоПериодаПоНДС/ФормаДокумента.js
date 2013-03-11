Ext.define('Документы.УчетПоложенийПереходногоПериодаПоНДС.ФормаДокумента',
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
					text:'Подменю1',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:396px;width:709px;height:25px;',
			items:
			[
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
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:119px;width:693px;height:246px;',
			height: 246,width: 693,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ОбъектСтроительства',
				},
				{
					text:'СчетФактура',
				},
				{
					text:'ВидЦенности',
				},
				{
					text:'СчетУчетаНДС',
				},
				{
					text:'СуммаБезНДС',
				},
				{
					text:'СтавкаНДС',
				},
				{
					text:'НДС',
				},
				{
					text:'НДСВключенВСтоимость',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:95px;width:693px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Заполнить',
				},
				{
					text:'ПодменюЗаполнить',
				},
			]
		},
	]
});