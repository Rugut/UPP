Ext.define('Документы.ПогашениеСтоимости.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 185,width: 596,
	iconCls: 'bogus',
	title: 'Погашение стоимости (спецодежда, спецоснастка, инвентарь)',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:143px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:98px;top:82px;width:490px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:98px;top:107px;width:490px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:133px;width:490px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:596px;height:25px;',
			items:
			[
				{
					text:'Подменю1',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:160px;width:596px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
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
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставлениеПериодаРегистрации',
			style: 'position:absolute;left:451px;top:33px;width:137px;height:19px;',
		},
	]
});