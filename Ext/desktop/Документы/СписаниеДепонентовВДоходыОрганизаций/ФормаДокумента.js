Ext.define('Документы.СписаниеДепонентовВДоходыОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 401,width: 676,
	iconCls: 'bogus',
	title: 'Списание депонентов в доходы организаций',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:349px;width:572px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:676px;height:25px;',
			items:
			[
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:376px;width:676px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:106px;width:660px;height:237px;',
			height: 237,width: 660,
			items:
			[
				{
					title:'Депоненты',
				},
				{
					title:'СчетаУчетаДоходов',
				},
			]
		},
	]
});