Ext.define('Документы.ПереносДанных.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 402,width: 650,
	iconCls: 'bogus',
	title: 'Перенос данных',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:422px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:522px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:650px;height:25px;',
			items:
			[
				{
					text:'Разделитель5',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Настройка',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель4',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:239px;top:377px;width:411px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:86px;top:350px;width:556px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:82px;width:634px;height:225px;',
			height: 225,width: 634,
			items:
			[
				{
					title:'РегистрыСведений',
				},
				{
					title:'РегистрыНакопления',
				},
				{
					title:'РегистрыРасчета',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:121px;top:33px;width:203px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:422px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:377px;width:239px;height:25px;',
			items:
			[
				{
					text:'ТекущийСотрудник',
				},
				{
					text:'ВесьДокумент',
				},
				{
					text:'Исправить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОтменитьИсправление',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СписокСотрудников',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:559px;top:312px;width:83px;height:33px;',
			height: 33,width: 83,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:121px;top:57px;width:203px;height:19px;',
		},
	]
});