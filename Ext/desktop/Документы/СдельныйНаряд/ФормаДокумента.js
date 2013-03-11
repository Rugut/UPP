Ext.define('Документы.СдельныйНаряд.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 577,width: 692,
	iconCls: 'bogus',
	title: 'Сдельный наряд на выполненные работы',
	
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
			name: 'Организация',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:525px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:424px;top:525px;width:260px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Заказ',
			style: 'position:absolute;left:424px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:692px;height:25px;',
			items:
			[
				{
					text:'Разделитель5',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ГрафикиРаботыПоВидамВремени',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:552px;width:692px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:189px;width:676px;height:331px;',
			height: 331,width: 676,
			items:
			[
				{
					title:'Страница1',
				},
				{
					title:'Страница2',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:106px;width:676px;height:78px;',
			height: 78,width: 676,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});