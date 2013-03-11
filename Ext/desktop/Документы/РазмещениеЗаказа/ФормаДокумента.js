Ext.define('Документы.РазмещениеЗаказа.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 351,width: 640,
	iconCls: 'bogus',
	title: 'Размещение заказа',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:90px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:299px;width:542px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:640px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ОтображатьИзменения',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:84px;width:624px;height:210px;',
			height: 210,width: 624,
			items:
			[
				{
					title:'Товары',
				},
				{
					title:'Тара',
				},
				{
					title:'Материалы',
				},
				{
					title:'Дополнительно',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Заказ',
			style: 'position:absolute;left:90px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтрагентПодразделениеЗаказа',
			style: 'position:absolute;left:412px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:326px;width:640px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Печать',
				},
				{
					text:'Записать',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РазделительОК',
				},
			]
		},
	]
});