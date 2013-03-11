Ext.define('Документы.ЗарплатаКВыплатеОрганизаций.ФормаНастройкиРасчета',
	{
	extend: 'Ext.window.Window',
	height: 173,width: 352,
	iconCls: 'bogus',
	title: 'Настройка расчета',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:148px;width:352px;height:25px;',
			items:
			[
				{
					text:'Пересчитать',
				},
				{
					text:'Отмена',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:45px;width:336px;height:93px;',
			height: 93,width: 336,
			items:
			[
				{
					title:'ПлановыйАванс',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПлановыйАванс_ДнейНеВыплаты',
			style: 'position:absolute;left:266px;top:0px;width:40px;height:19px;',
		},
					]
				},
				{
					title:'АвансЗаПервуюПоловинуМесяца',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АвансЗаПервуюПоловинуМесяца_ДнейНеВыплаты',
			style: 'position:absolute;left:266px;top:30px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АвансЗаПервуюПоловинуМесяца_Округление',
			style: 'position:absolute;left:107px;top:0px;width:133px;height:19px;',
		},
					]
				},
				{
					title:'Зарплата',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Зарплата_ПроцентВыплаты',
			style: 'position:absolute;left:107px;top:43px;width:61px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Зарплата_ДнейНеВыплаты',
			style: 'position:absolute;left:266px;top:72px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Зарплата_Округление',
			style: 'position:absolute;left:107px;top:0px;width:133px;height:19px;',
		},
					]
				},
				{
					title:'Дивиденды',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дивиденды_ПроцентВыплаты',
			style: 'position:absolute;left:107px;top:43px;width:61px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дивиденды_Округление',
			style: 'position:absolute;left:107px;top:0px;width:133px;height:19px;',
		},
					]
				},
				{
					title:'ПрочиеВыплаты',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПрочиеВыплаты_ДнейНеВыплаты',
			style: 'position:absolute;left:266px;top:74px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПрочиеВыплаты_Округление',
			style: 'position:absolute;left:107px;top:0px;width:133px;height:19px;',
		},
					]
				},
				{
					title:'ПрочиеВыплатыБезУдержаний',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПрочиеВыплатыБезУдержаний_ДнейНеВыплаты',
			style: 'position:absolute;left:266px;top:30px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПрочиеВыплатыБезУдержаний_Округление',
			style: 'position:absolute;left:101px;top:0px;width:133px;height:19px;',
		},
					]
				},
			]
		},
	]
});