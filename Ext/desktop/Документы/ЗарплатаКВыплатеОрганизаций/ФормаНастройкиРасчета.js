Ext.define('Документы.ЗарплатаКВыплатеОрганизаций.ФормаНастройкиРасчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:352px;height:173px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка расчета',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:148px;width:352px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Рассчитать',
				},
				'-',
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:45px;width:336px;height:93px;',
			height: 93,width: 336,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Плановый аванс',
					items:
					[
		{
			xtype: 'label',
			name: 'ПлановыйАванс_НадписьДнейНеВыплаты',
			text: 'Рассчитать компенсацию за задержку выплаты на',
			style: 'position:absolute;left:0px;top:0px;width:266px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПлановыйАванс_НадписьДней',
			text: 'дней',
			style: 'position:absolute;left:310px;top:0px;width:26px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПлановыйАванс_ДнейНеВыплаты',
			style: 'position:absolute;left:266px;top:0px;width:40px;height:19px;',
		},
					]
				},
				{
					title:'Аванс за первую половину месяца',
					items:
					[
		{
			xtype: 'label',
			name: 'АвансЗаПервуюПоловинуМесяца_НадписьДнейНеВыплаты',
			text: 'Рассчитать компенсацию за задержку выплаты на',
			style: 'position:absolute;left:1px;top:30px;width:265px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'АвансЗаПервуюПоловинуМесяца_НадписьДней',
			text: 'дней',
			style: 'position:absolute;left:310px;top:30px;width:26px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АвансЗаПервуюПоловинуМесяца_ДнейНеВыплаты',
			style: 'position:absolute;left:266px;top:30px;width:40px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Округлять:',
			style: 'position:absolute;left:1px;top:0px;width:100px;height:19px;',
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
			xtype: 'label',
			name: 'Зарплата_НадписьДнейНеВыплаты',
			text: 'Рассчитать компенсацию за задержку выплаты на',
			style: 'position:absolute;left:0px;top:72px;width:265px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Зарплата_НадписьДней',
			text: 'дней',
			style: 'position:absolute;left:310px;top:72px;width:26px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Округлять:',
			style: 'position:absolute;left:0px;top:0px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Зарплата_ДнейНеВыплаты',
			style: 'position:absolute;left:266px;top:72px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Зарплата_НадписьПроцентВыплаты',
			text: 'Процент выплаты:',
			style: 'position:absolute;left:0px;top:43px;width:99px;height:19px;',
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
			xtype: 'checkbox',
			boxLabel: 'Округлять:',
			style: 'position:absolute;left:0px;top:0px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Дивиденды_НадписьПроцентВыплаты',
			text: 'Процент выплаты:',
			style: 'position:absolute;left:1px;top:43px;width:99px;height:19px;',
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
					title:'Прочие выплаты',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Округлять:',
			style: 'position:absolute;left:0px;top:0px;width:100px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учитывать удержания',
			style: 'position:absolute;left:0px;top:30px;width:223px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПрочиеВыплаты_НадписьПредварительныйУчетУдержаний',
			text: 'Расчет начисленных сумм за вычетом удержаний',
			style: 'position:absolute;left:0px;top:46px;width:336px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПрочиеВыплаты_НадписьДнейНеВыплаты',
			text: 'Рассчитать компенсацию за задержку выплаты на',
			style: 'position:absolute;left:0px;top:74px;width:266px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПрочиеВыплаты_НадписьДней',
			text: 'дней',
			style: 'position:absolute;left:310px;top:74px;width:26px;height:19px;',
		},
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
					title:'Прочие выплаты без удержаний',
					items:
					[
		{
			xtype: 'label',
			name: 'ПрочиеВыплатыБезУдержаний_НадписьДнейНеВыплаты',
			text: 'Рассчитать компенсацию за задержку выплаты на',
			style: 'position:absolute;left:0px;top:30px;width:266px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПрочиеВыплатыБезУдержаний_НадписьДней',
			text: 'дней',
			style: 'position:absolute;left:310px;top:30px;width:26px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПрочиеВыплатыБезУдержаний_ДнейНеВыплаты',
			style: 'position:absolute;left:266px;top:30px;width:40px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Округлять:',
			style: 'position:absolute;left:0px;top:0px;width:100px;height:19px;',
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
		{
			xtype: 'label',
			name: 'ЗаголовокРасчета',
			text: 'Расчет сумм к выплате',
			style: 'position:absolute;left:8px;top:8px;width:336px;height:27px;text-align:left;',
		},
	]
});