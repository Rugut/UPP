Ext.define('Документы.АвансовыйОтчет.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 434,width: 692,
	iconCls: 'bogus',
	title: 'Авансовый отчет',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:110px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:210px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:692px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Разделитель10',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ВедомостьПоВзаиморасчетам',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель11',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Разделитель13',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Файлы1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю2',
				},
				{
					text:'ДействиеЦеныВалюта',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:110px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СкладОрдер',
			style: 'position:absolute;left:443px;top:57px;width:236px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:109px;width:676px;height:224px;',
			height: 224,width: 676,
			items:
			[
				{
					title:'Авансы',
				},
				{
					title:'Товары',
				},
				{
					title:'Тара',
				},
				{
					title:'ОплатаПоставщикам',
				},
				{
					title:'Прочее',
				},
				{
					title:'Дополнительно',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФизЛицо',
			style: 'position:absolute;left:110px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:382px;width:588px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоПоОтчету',
			style: 'position:absolute;left:575px;top:359px;width:103px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоАвансов',
			style: 'position:absolute;left:575px;top:339px;width:104px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:407px;width:692px;height:27px;',
			items:
			[
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Записать',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПоступления',
			style: 'position:absolute;left:354px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НазначениеАванса',
			style: 'position:absolute;left:443px;top:81px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоДокументов',
			style: 'position:absolute;left:96px;top:339px;width:50px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЛистов',
			style: 'position:absolute;left:231px;top:339px;width:40px;height:19px;',
		},
	]
});