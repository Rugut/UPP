Ext.define('Документы.ОплатаПоСреднемуЗаработку.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 580,width: 686,
	iconCls: 'bogus',
	title: 'Оплата по среднему заработку',
	
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:33px;width:203px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:422px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:686px;height:25px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ОткрытьКатегории',
				},
				{
					text:'ОткрытьСвойства',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:686px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:113px;top:57px;width:203px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:528px;width:584px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:113px;top:81px;width:203px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:107px;width:670px;height:380px;',
			height: 380,width: 670,
			items:
			[
				{
					title:'Страница1',
				},
				{
					title:'Начисления',
				},
				{
					title:'РасчетСреднего',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:233px;height:25px;',
			items:
			[
				{
					text:'Исправить',
				},
				{
					text:'ОтменитьИсправление',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:466px;top:491px;width:83px;height:33px;',
			height: 33,width: 83,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:549px;top:491px;width:129px;height:33px;',
			height: 33,width: 129,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});