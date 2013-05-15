Ext.define('Справочники.ОстаткиОтпусков.ФормаСпискаПоследнихОстатков',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:477px;height:297px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Остатки отпусков прошлых лет',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:225px;height:256px;',
			height: 256,width: 225,
			columns:
			[
				{
					text:'Наименование',
					width:'131',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Физлицо',
					width:'350',
					dataIndex:'Физлицо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОстаткиОтпусков/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
					{
						name:'Физлицо',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:239px;top:123px;width:230px;height:140px;',
			height: 140,width: 230,
			columns:
			[
				{
					text:'Год работы',
					width:'100',
					dataIndex:'ГодРаботы',
					flex:1,
				},
				{
					text:'С',
					width:'80',
					dataIndex:'ДатаНачалаРабочегоГода',
					flex:1,
				},
				{
					text:'По',
					width:'80',
					dataIndex:'ДатаОкончанияРабочегоГода',
					flex:1,
				},
				{
					text:'Количество дней',
					width:'70',
					dataIndex:'Количество',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОстаткиОтпусков/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ГодРаботы',
					},
					{
						name:'ДатаНачалаРабочегоГода',
					},
					{
						name:'ДатаОкончанияРабочегоГода',
					},
					{
						name:'Количество',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСотрудник',
			text: '',
			style: 'position:absolute;left:239px;top:33px;width:230px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОстаток',
			text: 'Остатки отпуска заполнены. Программа будет рассчитывать остатки для всех рабочих лет, следующих за последним рабочим годом, на который заполнены остатки',
			style: 'position:absolute;left:239px;top:56px;width:230px;height:67px;',
		},
		{
			xtype: 'button',
			name: 'Изменить',
			text: 'Изменить',
			style: 'position:absolute;left:239px;top:268px;width:101px;height:21px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:477px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Заполнить остатки отпусков',
				},
				'-',
				{
					text:'Настроить автоматическое заполнение...',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});