Ext.define('Справочники.ЗанятияКурсовОбучения.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 406,width: 400,
	iconCls: 'bogus',
	title: 'Занятия курсов обучения',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:298px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОписаниеЗанятия',
			style: 'position:absolute;left:8px;top:75px;width:384px;height:82px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДлительностьЗанятия',
			style: 'position:absolute;left:170px;top:162px;width:75px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:239px;width:384px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'КоррекцияВесов',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:263px;width:384px;height:110px;',
			height: 110,width: 384,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Компетенция',
				},
				{
					text:'Вес',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:381px;width:400px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидЗанятия',
			style: 'position:absolute;left:170px;top:186px;width:222px;height:19px;',
		},
	]
});