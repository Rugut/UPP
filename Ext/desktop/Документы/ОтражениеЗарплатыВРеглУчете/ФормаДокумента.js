Ext.define('Документы.ОтражениеЗарплатыВРеглУчете.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 479,width: 659,
	iconCls: 'bogus',
	title: 'Отражение зарплаты в регламентированном учете',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:431px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:531px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:431px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:431px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:659px;height:25px;',
			items:
			[
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'ОткрытьСвойства',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Очистить',
				},
				{
					text:'ОткрытьКатегории',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:454px;width:659px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:110px;width:643px;height:312px;',
			height: 312,width: 643,
			items:
			[
				{
					title:'Проводки',
				},
				{
					title:'ОсновныеНачисления',
				},
				{
					title:'ДополнительныеНачисления',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:86px;top:427px;width:548px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставлениеПериодаРегистрации',
			style: 'position:absolute;left:113px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнить',
			text: 'Заполнить',
			style: 'position:absolute;left:8px;top:64px;width:120px;height:36px;',
		},
	]
});